# Claude Code 作業メモ

## ブログ記事作成時の注意事項

### 日付設定について
- 新しい記事を作成する際は、必ず正確な作成日付を設定してください
- blog.jsファイルの記事データで日付を設定する際は、実際の作成日を確認してください
- HTMLファイルの以下の箇所も同様に正確な日付を設定してください：
  - `<meta property="article:published_time" content="YYYY-MM-DD">`
  - `<time class="article-date" datetime="YYYY-MM-DD">YYYY年MM月DD日</time>`
  - JSON-LDの`datePublished`と`dateModified`

### 記事作成の流れ
1. blog.jsに記事データを追加（正確な日付で）
2. HTMLファイルを作成（テンプレートから）
3. 日付が正しく設定されているか確認
4. コミット前に最終確認

## その他の注意事項
- 画像パスが正しく設定されているか確認
- リンク切れがないか確認