const fs = require('fs');
const path = require('path');
const https = require('https');
require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

async function generateImage(prompt, filename) {
    const requestData = JSON.stringify({
        model: "dall-e-3",
        prompt: prompt,
        n: 1,
        size: "1792x1024",
        style: "vivid",
        quality: "standard"
    });

    const options = {
        hostname: 'api.openai.com',
        path: '/v1/images/generations',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Length': Buffer.byteLength(requestData)
        }
    };

    return new Promise((resolve, reject) => {
        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', async () => {
                try {
                    const response = JSON.parse(data);
                    if (response.data && response.data[0] && response.data[0].url) {
                        const imageUrl = response.data[0].url;
                        
                        // 画像をダウンロード
                        const imagePath = path.join(__dirname, 'generated-images', filename);
                        const file = fs.createWriteStream(imagePath);
                        
                        https.get(imageUrl, (response) => {
                            response.pipe(file);
                            file.on('finish', () => {
                                file.close();
                                console.log(`画像を保存しました: ${imagePath}`);
                                resolve(imagePath);
                            });
                        });
                    } else {
                        reject(new Error('画像URLが取得できませんでした'));
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.write(requestData);
        req.end();
    });
}

// 白黒画像を生成するためのプロンプト
const prompts = [
    {
        prompt: "A minimalist black and white horizontal illustration of a male business executive in his 40s-50s working with AI technology at a modern desk, wearing a business suit, digital interface elements floating in the background, professional office setting, clean lines, high contrast monochrome, wide aspect ratio composition, clearly masculine features",
        filename: "male-executive-ai-productivity-wide.png"
    }
];

// generated-imagesディレクトリが存在しない場合は作成
const imagesDir = path.join(__dirname, 'generated-images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// 画像を生成
async function generateAllImages() {
    console.log('画像生成を開始します...');
    
    for (const { prompt, filename } of prompts) {
        try {
            console.log(`生成中: ${filename}`);
            await generateImage(prompt, filename);
            console.log(`完了: ${filename}`);
            
            // API制限を考慮して少し待機
            await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
            console.error(`エラーが発生しました (${filename}):`, error.message);
        }
    }
    
    console.log('すべての画像生成が完了しました');
}

generateAllImages();