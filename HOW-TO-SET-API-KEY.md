# APIキー設定手順

## ⚠️ 重要：APIキーは絶対に他人に教えないでください

### 手順

1. **新しいAPIキーを作成**
   - https://platform.openai.com/api-keys にアクセス
   - 「Create new secret key」をクリック
   - キーをコピー（一度しか表示されません）

2. **このフォルダの.envファイルを開く**
   ```
   C:\Users\info\OneDrive\デスクトップ\MyProjects\20250622-5（ホームページ）\.env
   ```

3. **以下の行を見つけて編集**
   ```
   OPENAI_API_KEY=ここに新しいAPIキーを入力してください
   ```
   
   ↓ このように変更（例）
   ```
   OPENAI_API_KEY=sk-proj-あなたの実際のAPIキー
   ```

4. **保存**

5. **設定確認**
   - コマンドプロンプトまたはWSLで以下を実行：
   ```bash
   cd "/mnt/c/Users/info/OneDrive/デスクトップ/MyProjects/20250622-5（ホームページ）"
   node setup-env.js
   ```

### 成功例
```
✅ 環境変数が正常に読み込まれました
🔑 APIキー: sk-proj-3W...
✅ APIキーは有効です
```

### 注意事項
- APIキーは絶対にチャットやコードに貼り付けない
- .envファイルはGitにコミットしない（.gitignoreで除外済み）
- 定期的にAPIキーを更新する