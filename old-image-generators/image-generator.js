// ブログ用画像生成ツール
// 注意: APIキーは環境変数で管理してください

// 使用例（APIキーは環境変数で設定）
// const apiKey = process.env.OPENAI_API_KEY;

async function generateBlogImage(prompt, category) {
    // APIキーが設定されているかチェック
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
        console.error('OpenAI APIキーが設定されていません');
        return null;
    }

    const categoryColors = {
        'ai': '#e3f2fd', // 青系
        'hr': '#f3e5f5', // 紫系
        'law': '#fff3e0', // オレンジ系
        'subsidy': '#e8f5e9' // 緑系
    };

    try {
        const response = await fetch('https://api.openai.com/v1/images/generations', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "dall-e-3",
                prompt: `Professional business illustration for a blog article about ${prompt}. Clean, modern design with ${categoryColors[category]} color scheme. Suitable for a social security and labor consultant website. No text in image.`,
                n: 1,
                size: "1024x1024",
                quality: "standard"
            })
        });

        const data = await response.json();
        
        if (data.error) {
            console.error('画像生成エラー:', data.error);
            return null;
        }

        return data.data[0].url;
    } catch (error) {
        console.error('API呼び出しエラー:', error);
        return null;
    }
}

// 使用例
async function generateImagesForBlog() {
    const articles = [
        {
            prompt: "ChatGPT AI technology helping with labor management and HR tasks",
            category: "ai",
            title: "ChatGPT労務管理"
        },
        {
            prompt: "Legal documents and law reform in Japanese labor law",
            category: "law",
            title: "労働法改正"
        },
        {
            prompt: "AI tools and software for small business productivity",
            category: "ai",
            title: "中小企業AIツール"
        },
        {
            prompt: "Government subsidies and grants for business support",
            category: "subsidy",
            title: "助成金制度"
        },
        {
            prompt: "Telework and remote work management for HR professionals",
            category: "hr",  
            title: "テレワーク労務管理"
        }
    ];

    for (const article of articles) {
        console.log(`${article.title}の画像を生成中...`);
        const imageUrl = await generateBlogImage(article.prompt, article.category);
        
        if (imageUrl) {
            console.log(`✅ ${article.title}: ${imageUrl}`);
        } else {
            console.log(`❌ ${article.title}: 生成失敗`);
        }
        
        // API制限を避けるため少し待機
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

// フォールバック用のプレースホルダー画像生成
function generatePlaceholderImage(title, category) {
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

// エクスポート（Node.js環境用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateBlogImage,
        generatePlaceholderImage,
        generateImagesForBlog
    };
}

// 使用手順のメモ:
// 1. Node.js環境で実行
// 2. 環境変数 OPENAI_API_KEY を設定
// 3. npm install node-fetch（必要に応じて）
// 4. node image-generator.js で実行