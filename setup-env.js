// 環境変数設定用のヘルパーファイル
const fs = require('fs');
const path = require('path');

// .envファイルを読み込む関数
function loadEnv() {
    const envPath = path.join(__dirname, '.env');
    
    if (!fs.existsSync(envPath)) {
        console.error('❌ .envファイルが見つかりません');
        console.log('📝 .envファイルを作成してください:');
        console.log('   OPENAI_API_KEY=あなたのAPIキー');
        return false;
    }

    try {
        const envData = fs.readFileSync(envPath, 'utf-8');
        const lines = envData.split('\n');
        
        lines.forEach(line => {
            if (line.trim() && !line.startsWith('#')) {
                const [key, value] = line.split('=');
                if (key && value) {
                    process.env[key.trim()] = value.trim();
                }
            }
        });
        
        // APIキーが設定されているかチェック
        if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === 'ここに新しいAPIキーを入力してください') {
            console.error('❌ OPENAI_API_KEYが正しく設定されていません');
            console.log('📝 .envファイルでAPIキーを設定してください');
            return false;
        }
        
        console.log('✅ 環境変数が正常に読み込まれました');
        console.log(`🔑 APIキー: ${process.env.OPENAI_API_KEY.slice(0, 10)}...`);
        return true;
        
    } catch (error) {
        console.error('❌ .envファイルの読み込みエラー:', error.message);
        return false;
    }
}

// APIキーの検証
async function validateApiKey() {
    if (!process.env.OPENAI_API_KEY) {
        console.error('❌ APIキーが設定されていません');
        return false;
    }

    try {
        const response = await fetch('https://api.openai.com/v1/models', {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            }
        });

        if (response.ok) {
            console.log('✅ APIキーは有効です');
            return true;
        } else {
            console.error('❌ APIキーが無効です');
            console.error('Status:', response.status, response.statusText);
            return false;
        }
    } catch (error) {
        console.error('❌ API接続エラー:', error.message);
        return false;
    }
}

// メイン実行関数
async function main() {
    console.log('🔧 環境変数設定チェック');
    console.log('========================');
    
    if (loadEnv()) {
        console.log('🔍 APIキーを検証中...');
        await validateApiKey();
    }
    
    console.log('\n📋 設定手順:');
    console.log('1. .envファイルを開く');
    console.log('2. OPENAI_API_KEY=の後に新しいAPIキーを入力');
    console.log('3. node setup-env.js で検証');
}

// コマンドラインから実行された場合
if (require.main === module) {
    main();
}

module.exports = { loadEnv, validateApiKey };