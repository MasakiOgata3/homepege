const fs = require('fs');
const path = require('path');

class ImageGeneratorService {
    constructor() {
        this.apiKey = this.loadApiKey();
        this.imagesDir = path.join(__dirname, '..', 'generated-images');
        this.infoFile = path.join(__dirname, '..', 'generated-images-info.json');
        this.ensureDirectories();
    }

    loadApiKey() {
        try {
            const envContent = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf8');
            const apiKeyMatch = envContent.match(/OPENAI_API_KEY=(.+)/);
            const apiKey = apiKeyMatch ? apiKeyMatch[1].trim() : null;
            
            if (!apiKey) {
                throw new Error('APIキーが見つかりません');
            }
            return apiKey;
        } catch (error) {
            console.error('APIキーの読み込みに失敗:', error.message);
            process.exit(1);
        }
    }

    ensureDirectories() {
        if (!fs.existsSync(this.imagesDir)) {
            fs.mkdirSync(this.imagesDir, { recursive: true });
        }
    }

    async generateImage(prompt, options = {}) {
        const {
            size = '1792x1024',
            quality = 'standard',
            model = 'dall-e-3'
        } = options;

        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model,
                    prompt,
                    n: 1,
                    size,
                    quality
                })
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(`画像生成エラー: ${data.error.message}`);
            }

            return data.data[0].url;
        } catch (error) {
            console.error('API呼び出しエラー:', error.message);
            throw error;
        }
    }

    async downloadImage(imageUrl, filename) {
        try {
            const response = await fetch(imageUrl);
            const buffer = await response.arrayBuffer();
            const filepath = path.join(this.imagesDir, filename);
            
            fs.writeFileSync(filepath, Buffer.from(buffer));
            console.log(`画像保存完了: ${filepath}`);
            
            return filepath;
        } catch (error) {
            console.error('画像ダウンロードエラー:', error.message);
            throw error;
        }
    }

    async generateAndSave(prompt, filename, options = {}) {
        try {
            console.log(`🎨 画像生成中: ${filename}`);
            
            const imageUrl = await this.generateImage(prompt, options);
            const filepath = await this.downloadImage(imageUrl, filename);
            
            return {
                url: imageUrl,
                localPath: filepath,
                filename: filename
            };
        } catch (error) {
            console.error(`画像生成・保存エラー (${filename}):`, error.message);
            throw error;
        }
    }

    updateImageInfo(imageInfo) {
        try {
            let imagesInfo = [];
            
            if (fs.existsSync(this.infoFile)) {
                imagesInfo = JSON.parse(fs.readFileSync(this.infoFile, 'utf8'));
            }

            if (imagesInfo.length >= 5) {
                const oldImage = imagesInfo.shift();
                try {
                    fs.unlinkSync(oldImage.localPath);
                    console.log(`古い画像を削除: ${oldImage.filename}`);
                } catch (e) {
                    console.log(`古い画像の削除に失敗: ${e.message}`);
                }
            }

            imagesInfo.push(imageInfo);
            fs.writeFileSync(this.infoFile, JSON.stringify(imagesInfo, null, 2));
            console.log('画像情報ファイル更新完了');
        } catch (error) {
            console.error('画像情報更新エラー:', error.message);
        }
    }

    async generateBlogImage(prompt, category, filename) {
        const categoryPrompts = {
            'ai': 'clean geometric tech elements, simple computer screens, minimal interface symbols',
            'hr': 'modern office elements, clean workspace symbols, simple geometric shapes',
            'law': 'minimal document symbols, clean geometric forms, simple business elements',
            'subsidy': 'clean chart elements, simple geometric patterns, modern business symbols'
        };

        const fullPrompt = `Clean, simple black and white illustration about ${prompt}. ${categoryPrompts[category]}. Minimalist line art style similar to modern tech illustrations, white background. Black outlines with subtle gray fills, geometric shapes, professional but approachable. Modern flat design aesthetic. No text in image.`;

        return await this.generateAndSave(fullPrompt, filename);
    }

    async generateSuccessImage(filename, maleSpecific = false) {
        const genderText = maleSpecific ? 'A male person' : 'A person';
        const prompt = `Clean, simple black and white illustration showing success and achievement. ${genderText} celebrating with raised arms at a desk with a computer showing a completed website. Minimalist line art style similar to modern tech illustrations. Black lines on white background only, no colors, no shading, very clean and professional.`;
        
        return await this.generateAndSave(prompt, filename);
    }

    async generateCollaborationImage(filename) {
        const prompt = 'Clean, simple black and white illustration showing collaboration between a male person and AI. A man working at a computer with AI symbols (gears, circuits, or abstract AI representations) around him, suggesting partnership and cooperation. Minimalist line art style similar to modern tech illustrations. Black lines on white background only, no colors, no shading, very clean and professional.';
        
        return await this.generateAndSave(prompt, filename);
    }

    generatePlaceholderUrl(title, category) {
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

    async generateBatch(imageConfigs, delayMs = 2000) {
        const results = [];
        
        for (const config of imageConfigs) {
            try {
                const result = await this.generateAndSave(config.prompt, config.filename, config.options);
                results.push({
                    id: config.id,
                    ...result
                });
                
                if (delayMs > 0) {
                    await new Promise(resolve => setTimeout(resolve, delayMs));
                }
            } catch (error) {
                console.error(`バッチ生成エラー (${config.filename}):`, error.message);
                results.push({
                    id: config.id,
                    error: error.message
                });
            }
        }
        
        return results;
    }
}

module.exports = ImageGeneratorService;