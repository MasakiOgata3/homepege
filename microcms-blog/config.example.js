// MicroCMS設定ファイルのテンプレート
// 使い方:
// 1. このファイルをコピーして config.js として保存
// 2. API_KEY に実際のAPIキーを設定
// 3. config.js は .gitignore に追加されているのでGitHubにはアップロードされません

const MICROCMS_CONFIG = {
    // サービスドメイン（XXXX.microcms.ioのXXXXの部分）
    SERVICE_DOMAIN: 'YOUR-SERVICE-DOMAIN',
    
    // APIキー（MicroCMS管理画面から取得）
    API_KEY: 'YOUR-API-KEY-HERE',
    
    // エンドポイント名
    ENDPOINT: 'blogs',
    
    // 1ページあたりの記事数
    ARTICLES_PER_PAGE: 6,
    
    // 画像のデフォルト設定
    DEFAULT_IMAGE: '../generated-images/ai-business-transformation-wide.png',
    
    // カテゴリー設定
    CATEGORIES: {
        'ai-tools': 'AIツール活用',
        'automation': '業務自動化',
        'case-study': '導入事例',
        'tips': '活用のコツ'
    }
};

// MicroCMSクライアントの初期化（SDKを使用）
let microcmsClient = null;

// SDKが読み込まれているか確認
if (typeof microcms !== 'undefined' && microcms.createClient) {
    // 設定が完了している場合のみクライアントを作成
    if (MICROCMS_CONFIG.SERVICE_DOMAIN !== 'YOUR-SERVICE-DOMAIN' && MICROCMS_CONFIG.API_KEY) {
        microcmsClient = microcms.createClient({
            serviceDomain: MICROCMS_CONFIG.SERVICE_DOMAIN,
            apiKey: MICROCMS_CONFIG.API_KEY
        });
        console.log('✅ MicroCMSクライアントが初期化されました');
    } else {
        console.log('⚠️ MicroCMS設定が必要です:');
        console.log('1. MicroCMSでサービスを作成');
        console.log('2. config.jsのSERVICE_DOMAINを設定（例: "my-blog"）');
        console.log('3. config.jsのAPI_KEYを設定（または.envファイルを使用）');
    }
} else {
    console.error('❌ MicroCMS SDKが読み込まれていません');
}