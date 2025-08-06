# Next.js + microCMS ブログプロジェクト仕様書

## プロジェクト概要
- **目的**: 既存の静的サイトから独立したNext.js + microCMSブログシステムの構築
- **技術スタック**: Next.js (App Router), TypeScript, microCMS
- **デプロイ先**: Vercel
- **特徴**: バックエンドAPIを含むフルスタック構成

## プロジェクト構成

### ディレクトリ配置
```
homepege/
├── microcms-blog/      # 既存のmicroCMSブログ
├── nextjs-blog/        # 新規Next.jsプロジェクト（同階層）
├── blog/               # 既存の静的ブログ
└── ...                 # その他の既存ファイル
```

### Next.jsプロジェクト構造
```
nextjs-blog/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # ルートレイアウト
│   │   ├── page.tsx                # ホームページ
│   │   ├── posts/
│   │   │   ├── page.tsx            # 記事一覧
│   │   │   └── [slug]/
│   │   │       └── page.tsx        # 記事詳細
│   │   ├── categories/
│   │   │   └── [category]/
│   │   │       └── page.tsx        # カテゴリ別一覧
│   │   └── api/
│   │       ├── posts/
│   │       │   ├── route.ts        # 記事取得API
│   │       │   └── create/
│   │       │       └── route.ts    # 記事作成API（APIキー隠蔽）
│   │       └── revalidate/
│   │           └── route.ts        # Webhook用キャッシュ更新
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── post/
│   │   │   ├── PostCard.tsx
│   │   │   ├── PostList.tsx
│   │   │   └── PostDetail.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Pagination.tsx
│   ├── lib/
│   │   ├── microcms.ts             # microCMS APIクライアント
│   │   └── utils.ts                # ユーティリティ関数
│   ├── types/
│   │   └── blog.ts                 # 型定義
│   └── styles/
│       └── globals.css             # グローバルスタイル
├── public/
│   └── images/                     # 静的画像
├── .env.local                      # 環境変数（Gitに含めない）
├── .gitignore
├── next.config.js                  # Next.js設定
├── package.json
├── tsconfig.json                   # TypeScript設定
└── README.md
```

## 主要機能

### 1. 記事管理
- microCMSからの記事取得・表示
- カテゴリ別記事一覧
- ページネーション
- 記事詳細ページ（動的ルーティング）

### 2. API機能（バックエンド）
- **記事取得API**: `/api/posts`
- **記事作成API**: `/api/posts/create`
  - Claude Codeからの記事投稿用
  - APIキーをサーバー側で管理
  - 認証機能を実装予定
- **キャッシュ更新API**: `/api/revalidate`
  - microCMSのWebhook連携
  - ISR（増分静的再生成）対応

### 3. セキュリティ
- APIキーの環境変数管理
- 記事作成APIの認証保護
- CORS設定

## 環境変数設定
```env
# .env.local
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
MICROCMS_WRITE_API_KEY=your-write-api-key
API_SECRET_TOKEN=your-secret-token
```

## 注意事項

### 開発時の注意
1. **ポート設定**: デフォルト3000番（既存サービスと競合しないよう確認）
2. **パッケージ管理**: `nextjs-blog/`内で独立して管理
3. **Git管理**: `.gitignore`に適切な除外設定を追加
4. **環境変数**: APIキーは必ず`.env.local`で管理

### 既存サイトとの関係
- 完全に独立した構成で既存サイトに影響なし
- 将来的な統合を考慮したURL設計
- 静的書き出しは使用せず、Vercelでのサーバー実行を前提

## デプロイ戦略
1. Vercelアカウントでプロジェクト作成
2. GitHub連携で自動デプロイ設定
3. 環境変数をVercelダッシュボードで設定
4. カスタムドメイン設定（必要に応じて）

## 今後の拡張予定
- 認証システムの実装（NextAuth.js等）
- 画像最適化（next/image）
- SEO最適化
- アナリティクス統合
- コメント機能（任意）