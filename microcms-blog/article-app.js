// 記事詳細ページのアプリケーション
class ArticleDetailApp {
    constructor() {
        this.articleId = null;
        this.article = null;
    }

    // 初期化
    async init() {
        // URLからarticleIdを取得
        this.articleId = this.getArticleIdFromURL();
        
        if (!this.articleId) {
            this.showError('記事IDが指定されていません');
            return;
        }

        try {
            await this.loadArticle();
        } catch (error) {
            console.error('記事読み込みエラー:', error);
            this.showError('記事の読み込みに失敗しました');
        }
    }

    // URLから記事IDを取得
    getArticleIdFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    // MicroCMSから記事を取得
    async loadArticle() {
        if (!microcmsClient) {
            throw new Error('MicroCMSクライアントが初期化されていません');
        }

        try {
            // SDKのgetListDetailメソッドで単一記事を取得
            const response = await microcmsClient.getListDetail({
                endpoint: MICROCMS_CONFIG.ENDPOINT,
                contentId: this.articleId
            });

            this.article = response;
            this.renderArticle();
            this.updateMetaTags();
            this.setupShareButtons();
        } catch (error) {
            if (error.message.includes('404') || error.message.includes('Not Found')) {
                this.showError('記事が見つかりませんでした');
            } else {
                throw error;
            }
        }
    }

    // 記事を表示
    renderArticle() {
        // ローディングを非表示
        document.getElementById('loading').style.display = 'none';
        
        // 記事コンテンツを表示
        const articleContent = document.getElementById('article-content');
        articleContent.style.display = 'block';

        // カテゴリーラベルを取得
        const categoryLabel = MICROCMS_CONFIG.CATEGORIES[this.article.category] || this.article.category || 'AI活用';

        // 各要素に値を設定
        document.getElementById('article-title').textContent = this.article.title;
        document.getElementById('article-excerpt').textContent = this.article.excerpt || '';
        document.getElementById('article-category').textContent = categoryLabel;
        document.getElementById('article-date').textContent = this.formatDate(this.article.publishedAt || this.article.createdAt);

        // 画像の設定
        const imageElement = document.getElementById('article-image');
        if (this.article.image?.url) {
            imageElement.src = `${this.article.image.url}?w=800&h=300&fit=crop`;
            imageElement.alt = this.article.title;
            imageElement.style.display = 'block';
        } else {
            imageElement.style.display = 'none';
        }

        // 本文の設定（MicroCMSのリッチエディタの内容をそのまま表示）
        const bodyElement = document.getElementById('article-body');
        bodyElement.innerHTML = this.article.content || '<p>本文がありません。</p>';
    }

    // メタタグを更新（SEO対策）
    updateMetaTags() {
        const title = `${this.article.title} | AI活用ブログ`;
        const description = this.article.excerpt || this.article.title;
        const imageUrl = this.article.image?.url || MICROCMS_CONFIG.DEFAULT_IMAGE;
        const url = window.location.href;

        // ページタイトル
        document.title = title;
        document.getElementById('page-title').textContent = title;
        document.getElementById('page-description').content = description;

        // OGP
        document.getElementById('og-title').content = title;
        document.getElementById('og-description').content = description;
        document.getElementById('og-url').content = url;
        document.getElementById('og-image').content = imageUrl;
    }

    // シェアボタンの設定
    setupShareButtons() {
        const title = this.article.title;
        const url = window.location.href;

        // Twitter
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        document.getElementById('twitter-share').href = twitterUrl;

        // Facebook
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        document.getElementById('facebook-share').href = facebookUrl;
    }

    // 日付フォーマット
    formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}年${month}月${day}日`;
    }

    // エラー表示
    showError(message) {
        document.getElementById('loading').style.display = 'none';
        const errorElement = document.getElementById('error');
        errorElement.style.display = 'block';
        
        // エラーメッセージをカスタマイズ
        if (message) {
            const errorTitle = errorElement.querySelector('h2');
            const errorText = errorElement.querySelector('p');
            if (message === '記事IDが指定されていません') {
                errorTitle.textContent = 'URLが正しくありません';
                errorText.textContent = '記事のURLが正しく指定されていません。';
            } else if (message === '記事が見つかりませんでした') {
                errorTitle.textContent = '記事が見つかりませんでした';
                errorText.textContent = '記事が削除されたか、URLが間違っている可能性があります。';
            } else {
                errorTitle.textContent = 'エラーが発生しました';
                errorText.textContent = message;
            }
        }
    }
}

// アプリケーション起動
document.addEventListener('DOMContentLoaded', () => {
    const app = new ArticleDetailApp();
    app.init();
});