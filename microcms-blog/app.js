// MicroCMSブログアプリケーション
class MicroCMSBlog {
    constructor() {
        this.currentPage = 1;
        this.totalPages = 1;
        this.articles = [];
    }

    // 初期化
    async init() {
        try {
            await this.loadArticles();
        } catch (error) {
            console.error('初期化エラー:', error);
            this.showError('記事の読み込みに失敗しました');
        }
    }

    // MicroCMSから記事を取得（SDK使用）
    async loadArticles(page = 1) {
        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = '<div class="loading">記事を読み込み中...</div>';

        try {
            // MicroCMSクライアントが初期化されているか確認
            if (!microcmsClient) {
                throw new Error('MicroCMSクライアントが初期化されていません');
            }

            // SDKのgetListメソッドを使用
            const offset = (page - 1) * MICROCMS_CONFIG.ARTICLES_PER_PAGE;
            const response = await microcmsClient.getList({
                endpoint: MICROCMS_CONFIG.ENDPOINT,
                queries: {
                    limit: MICROCMS_CONFIG.ARTICLES_PER_PAGE,
                    offset: offset,
                    orders: '-publishedAt' // 新しい順に並べる
                }
            });

            this.articles = response.contents;
            this.totalPages = Math.ceil(response.totalCount / MICROCMS_CONFIG.ARTICLES_PER_PAGE);
            this.currentPage = page;
            
            this.renderArticles();
            this.renderPagination();
        } catch (error) {
            console.error('記事取得エラー:', error);
            // 開発中はダミーデータを表示
            this.showDummyData();
        }
    }

    // 記事を表示
    renderArticles() {
        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = '';

        if (this.articles.length === 0) {
            articlesContainer.innerHTML = '<div class="no-articles">記事がありません</div>';
            return;
        }

        this.articles.forEach(article => {
            const articleElement = this.createArticleElement(article);
            articlesContainer.appendChild(articleElement);
        });
    }

    // 記事要素を作成
    createArticleElement(article) {
        const div = document.createElement('div');
        div.className = 'article-card';
        
        // カテゴリーラベルを取得
        const categoryLabel = MICROCMS_CONFIG.CATEGORIES[article.category] || article.category || 'AI活用';
        
        // 画像URLを取得（MicroCMSの画像URLにクエリパラメータを追加可能）
        const imageUrl = article.image?.url 
            ? `${article.image.url}?w=400&h=200&fit=crop` 
            : MICROCMS_CONFIG.DEFAULT_IMAGE;
        
        div.innerHTML = `
            <img src="${imageUrl}" 
                 alt="${article.title}" 
                 class="article-image"
                 loading="lazy">
            <div class="article-content">
                <span class="article-category">${categoryLabel}</span>
                <h2 class="article-title">${article.title}</h2>
                <p class="article-excerpt">${article.excerpt || ''}</p>
                <time class="article-date">${this.formatDate(article.publishedAt || article.createdAt)}</time>
            </div>
        `;

        div.addEventListener('click', () => {
            // 記事詳細ページへ遷移（将来実装）
            window.location.href = `article.html?id=${article.id}`;
        });

        return div;
    }

    // 日付フォーマット
    formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}年${month}月${day}日`;
    }

    // ページネーション表示
    renderPagination() {
        const paginationContainer = document.getElementById('pagination');
        paginationContainer.innerHTML = '';

        if (this.totalPages <= 1) return;

        // 前へボタン
        if (this.currentPage > 1) {
            const prevButton = document.createElement('button');
            prevButton.textContent = '← 前へ';
            prevButton.addEventListener('click', () => {
                this.loadArticles(this.currentPage - 1);
            });
            paginationContainer.appendChild(prevButton);
        }

        // ページ番号
        for (let i = 1; i <= this.totalPages; i++) {
            // 表示するページ番号を制限（現在のページの前後2ページまで）
            if (i === 1 || i === this.totalPages || 
                (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                const button = document.createElement('button');
                button.textContent = i;
                button.className = i === this.currentPage ? 'active' : '';
                button.addEventListener('click', () => {
                    this.loadArticles(i);
                });
                paginationContainer.appendChild(button);
            } else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                const span = document.createElement('span');
                span.textContent = '...';
                span.className = 'ellipsis';
                paginationContainer.appendChild(span);
            }
        }

        // 次へボタン
        if (this.currentPage < this.totalPages) {
            const nextButton = document.createElement('button');
            nextButton.textContent = '次へ →';
            nextButton.addEventListener('click', () => {
                this.loadArticles(this.currentPage + 1);
            });
            paginationContainer.appendChild(nextButton);
        }
    }

    // エラー表示
    showError(message) {
        const articlesContainer = document.getElementById('articles');
        articlesContainer.innerHTML = `<div class="error">${message}</div>`;
    }

    // 開発用ダミーデータ
    showDummyData() {
        this.articles = [
            {
                id: 'dummy-1',
                title: 'MicroCMSでブログを構築する方法',
                excerpt: 'MicroCMSを使って簡単にブログを構築する手順を解説します。APIの設定から実装まで。',
                category: 'ai-tools',
                publishedAt: new Date().toISOString(),
                image: { url: '../generated-images/ai-business-transformation-wide.png' }
            },
            {
                id: 'dummy-2',
                title: 'ChatGPTとClaudeの使い分け術',
                excerpt: '2つのAIアシスタントの特徴を理解して、業務に最適な使い分けを実現しましょう。',
                category: 'tips',
                publishedAt: new Date(Date.now() - 86400000).toISOString(), // 1日前
                image: { url: '../generated-images/ai-collaboration.png' }
            },
            {
                id: 'dummy-3',
                title: '社労士業務をAIで効率化した事例',
                excerpt: '実際にAIツールを導入して業務効率を3倍に向上させた具体的な事例を紹介します。',
                category: 'case-study',
                publishedAt: new Date(Date.now() - 172800000).toISOString(), // 2日前
                image: { url: '../generated-images/male-executive-ai-productivity-wide.png' }
            }
        ];

        this.totalPages = 1;
        this.renderArticles();
        
        // 設定方法を表示
        const notice = document.createElement('div');
        notice.className = 'setup-notice';
        notice.innerHTML = `
            <h3>🚀 MicroCMS設定手順</h3>
            <ol>
                <li><a href="https://microcms.io/" target="_blank">MicroCMS</a>でアカウントを作成</li>
                <li>新しいサービスを作成（例: ogata-blog）</li>
                <li>「blog」APIを作成し、以下のフィールドを追加：
                    <ul>
                        <li><strong>title</strong>（テキストフィールド）- 必須</li>
                        <li><strong>excerpt</strong>（テキストフィールド）- 概要</li>
                        <li><strong>content</strong>（リッチエディタ）- 本文</li>
                        <li><strong>category</strong>（セレクトフィールド）- カテゴリー</li>
                        <li><strong>image</strong>（画像）- アイキャッチ画像</li>
                    </ul>
                </li>
                <li>config.jsを開き、SERVICE_DOMAINとAPI_KEYを設定</li>
                <li>ページをリロードして動作確認</li>
            </ol>
            <p>※ 現在はダミーデータが表示されています</p>
        `;
        document.getElementById('articles').insertBefore(notice, document.getElementById('articles').firstChild);
    }
}

// アプリケーション起動
document.addEventListener('DOMContentLoaded', () => {
    const blog = new MicroCMSBlog();
    blog.init();
});