const ImageGeneratorService = require('./services/ImageGeneratorService');

const imageGenerator = new ImageGeneratorService();

async function generateSuccessImages() {
    try {
        console.log('🎨 成功画像の生成を開始...');
        
        const result1 = await imageGenerator.generateSuccessImage('success-achievement.png');
        imageGenerator.updateImageInfo({
            id: 6,
            ...result1
        });
        
        const result2 = await imageGenerator.generateSuccessImage('male-success-achievement.png', true);
        imageGenerator.updateImageInfo({
            id: 7,
            ...result2
        });
        
        const result3 = await imageGenerator.generateCollaborationImage('ai-collaboration.png');
        imageGenerator.updateImageInfo({
            id: 8,
            ...result3
        });
        
        console.log('✅ 成功画像の生成が完了しました');
    } catch (error) {
        console.error('❌ 成功画像生成エラー:', error.message);
    }
}

async function generateBlogImages() {
    const articles = [
        {
            id: 1,
            prompt: "modern chat interface with clean geometric speech bubbles and simple computer",
            category: "ai",
            filename: "chatgpt-labor-management.png"
        },
        {
            id: 2,
            prompt: "clean workflow diagram with geometric arrows and minimal process icons",
            category: "ai",
            filename: "labor-law-reform-2025.png"
        },
        {
            id: 3,
            prompt: "organized grid of simple tool icons in clean geometric style",
            category: "ai",
            filename: "sme-ai-tools.png"
        },
        {
            id: 4,
            prompt: "clean business chart with upward trending arrow in minimal style",
            category: "ai",
            filename: "subsidies-grants-guide.png"
        },
        {
            id: 5,
            prompt: "simple lightbulb icon with geometric learning elements around it",
            category: "ai",
            filename: "telework-labor-management.png"
        }
    ];

    try {
        console.log('🎨 ブログ画像の生成を開始...');
        
        const results = [];
        for (const article of articles) {
            const result = await imageGenerator.generateBlogImage(
                article.prompt,
                article.category,
                article.filename
            );
            results.push({
                id: article.id,
                ...result
            });
            
            // API制限を避けるため待機
            await new Promise(resolve => setTimeout(resolve, 2000));
        }
        
        console.log('✅ ブログ画像の生成が完了しました');
        return results;
    } catch (error) {
        console.error('❌ ブログ画像生成エラー:', error.message);
    }
}

async function generateSpecificImage(prompt, filename, options = {}) {
    try {
        console.log(`🎨 個別画像生成: ${filename}`);
        const result = await imageGenerator.generateAndSave(prompt, filename, options);
        console.log('✅ 個別画像生成完了');
        return result;
    } catch (error) {
        console.error('❌ 個別画像生成エラー:', error.message);
    }
}

// コマンドライン引数の処理
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.includes('--success')) {
        generateSuccessImages();
    } else if (args.includes('--blog')) {
        generateBlogImages();
    } else if (args.includes('--all')) {
        (async () => {
            await generateSuccessImages();
            await new Promise(resolve => setTimeout(resolve, 3000));
            await generateBlogImages();
        })();
    } else {
        console.log('🎨 統合画像生成ツール');
        console.log('========================');
        console.log('使用方法:');
        console.log('  node generate-images.js --success  # 成功画像を生成');
        console.log('  node generate-images.js --blog     # ブログ画像を生成');
        console.log('  node generate-images.js --all      # 全画像を生成');
        console.log('');
        console.log('使用例:');
        console.log('  const imageGen = require("./generate-images");');
        console.log('  imageGen.generateSpecificImage("prompt", "filename.png");');
    }
}

module.exports = {
    generateSuccessImages,
    generateBlogImages,
    generateSpecificImage,
    imageGenerator
};