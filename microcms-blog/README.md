# MicroCMSブログ

このフォルダには、MicroCMS JavaScript SDKを使用したブログシステムが含まれています。

## セットアップ手順

### 1. MicroCMSアカウント作成
1. [MicroCMS](https://microcms.io/)でアカウントを作成
2. 新しいサービスを作成（例: `ogata-blog`）

### 2. APIスキーマ設定
以下のフィールドを持つ「blog」APIを作成：
- `title` (テキストフィールド) - 記事タイトル（必須）
- `excerpt` (テキストフィールド) - 記事の概要
- `content` (リッチエディタ) - 本文
- `category` (セレクトフィールド) - カテゴリー
  - 選択肢: `ai-tools`, `automation`, `case-study`, `tips`
- `image` (画像) - アイキャッチ画像

### 3. 設定ファイルの更新
1. `config.js`を開く
2. 以下を設定：
   ```javascript
   SERVICE_DOMAIN: 'ogata-blog', // あなたのサービスドメイン
   API_KEY: 'your-api-key', // あなたのAPIキー
   ```

### 4. 動作確認
ブラウザで`/microcms-blog/index.html`にアクセス

## ファイル構成
- `index.html` - ブログのメインページ
- `app.js` - ブログアプリケーションのメインロジック
- `config.js` - 設定ファイル
- `style.css` - スタイルシート
- `.env` - APIキー（作成が必要）

## 注意事項
- `.env`ファイルは`.gitignore`に含まれているため、Gitにはコミットされません
- APIキーは絶対に公開しないでください