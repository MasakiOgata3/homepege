// 安全な画像生成ツール（環境変数対応版）
const { loadEnv } = require('./setup-env');
const fs = require('fs');
const path = require('path');

// 環境変数を読み込み
loadEnv();

// 生成された画像を保存するディレクトリ
const IMAGES_DIR = path.join(__dirname, 'generated-images');

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(IMAGES_DIR)) {
    fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

async function generateBlogImage(prompt, category, filename) {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        console.error('❌ OpenAI APIキーが設定されていません');
        return null;
    }

    const categoryPrompts = {
        'ai': 'clean geometric tech elements, simple computer screens, minimal interface symbols',
        'hr': 'modern office elements, clean workspace symbols, simple geometric shapes',
        'law': 'minimal document symbols, clean geometric forms, simple business elements',
        'subsidy': 'clean chart elements, simple geometric patterns, modern business symbols'
    };

    const fullPrompt = `Clean, simple black and white illustration about ${prompt}. ${categoryPrompts[category]}. Minimalist line art style similar to modern tech illustrations, white background. Black outlines with subtle gray fills, geometric shapes, professional but approachable. Modern flat design aesthetic. No text in image.`;

    try {
        console.log(`🎨 画像生成中: ${filename}`);
        
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "dall-e-3",
                prompt: fullPrompt,
                n: 1,
                size: "1792x1024",
                quality: "standard"
            })
        });

        const data = await response.json();
        
        if (data.error) {
            console.error('❌ 画像生成エラー:', data.error.message);
            return null;
        }

        const imageUrl = data.data[0].url;
        
        // 画像をダウンロードして保存
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.arrayBuffer();
        const imagePath = path.join(IMAGES_DIR, `${filename}.png`);
        
        fs.writeFileSync(imagePath, Buffer.from(imageBuffer));
        
        console.log(`✅ 画像保存完了: ${imagePath}`);
        return {
            url: imageUrl,
            localPath: imagePath,
            filename: `${filename}.png`
        };
        
    } catch (error) {
        console.error('❌ API呼び出しエラー:', error.message);
        return null;
    }
}

// 既存のブログ記事用の画像を生成
async function generateAllBlogImages() {
    const articles = [
        {
            id: 1,
            prompt: "modern chat interface with clean geometric speech bubbles and simple computer",
            category: "ai",
            filename: "chatgpt-labor-management"
        },
        {
            id: 2,
            prompt: "clean workflow diagram with geometric arrows and minimal process icons",
            category: "ai",
            filename: "labor-law-reform-2025"
        },
        {
            id: 3,
            prompt: "organized grid of simple tool icons in clean geometric style",
            category: "ai",
            filename: "sme-ai-tools"
        },
        {
            id: 4,
            prompt: "clean business chart with upward trending arrow in minimal style",
            category: "ai",
            filename: "subsidies-grants-guide"
        },
        {
            id: 5,
            prompt: "simple lightbulb icon with geometric learning elements around it",
            category: "ai",
            filename: "telework-labor-management"
        }
    ];

    console.log('🚀 ブログ用画像の一括生成を開始');
    console.log('=====================================');

    const results = [];
    
    for (const article of articles) {
        const result = await generateBlogImage(
            article.prompt, 
            article.category, 
            article.filename
        );
        
        if (result) {
            results.push({
                id: article.id,
                ...result
            });
        }
        
        // API制限を避けるため待機
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // 結果をJSONファイルに保存
    const resultPath = path.join(__dirname, 'generated-images-info.json');
    fs.writeFileSync(resultPath, JSON.stringify(results, null, 2));
    
    console.log('\n📊 生成結果:');
    console.log(`✅ 成功: ${results.length}/${articles.length}枚`);
    console.log(`💾 情報ファイル: ${resultPath}`);
    
    return results;
}

// プレースホルダー画像URL生成（フォールバック用）
function generatePlaceholderUrl(title, category) {
    const categoryColors = {
        'ai': { bg: 'e3f2fd', text: '1976d2' },
        'hr': { bg: 'f3e5f5', text: '7b1fa2' },
        'law': { bg: 'fff3e0', text: 'ff6f00' },
        'subsidy': { bg: 'e8f5e9', text: '2e7d32' }
    };
    
    const colors = categoryColors[category] || { bg: 'f5f5f5', text: '333333' };
    const encodedTitle = encodeURIComponent(title);
    
    return `https://placehold.co/600x400/${colors.bg}/${colors.text}?text=${encodedTitle}`;
}

// 単体画像生成（対話的）
async function generateSingleImage() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const prompt = await new Promise(resolve => {
        rl.question('📝 画像の内容を説明してください: ', resolve);
    });

    const category = await new Promise(resolve => {
        rl.question('📂 カテゴリを選択 (ai/hr/law/subsidy): ', resolve);
    });

    const filename = await new Promise(resolve => {
        rl.question('📁 ファイル名を入力: ', resolve);
    });

    rl.close();

    const result = await generateBlogImage(prompt, category, filename);
    if (result) {
        console.log('🎉 画像生成完了!');
        console.log(`🖼️  保存先: ${result.localPath}`);
    }
}

// コマンドライン実行
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.includes('--all')) {
        generateAllBlogImages();
    } else if (args.includes('--single')) {
        generateSingleImage();
    } else {
        console.log('🎨 画像生成ツール');
        console.log('=================');
        console.log('使用方法:');
        console.log('  node image-generator-safe.js --all     # 全ブログ記事用画像を生成');
        console.log('  node image-generator-safe.js --single  # 単体画像を対話的に生成');
    }
}

module.exports = {
    generateBlogImage,
    generateAllBlogImages,
    generatePlaceholderUrl
};