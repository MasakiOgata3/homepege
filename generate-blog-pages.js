// ブログ記事の個別HTMLページを生成するスクリプト
const fs = require('fs');
const path = require('path');

// blog.jsから記事データをコピー（実際の運用ではモジュール化推奨）
const blogPosts = [
    {
        id: 1,
        title: "ChatGPTを活用した労務管理の効率化：実践的な導入ガイド",
        excerpt: "AI技術の進化により、労務管理業務も大きく変革しています。本記事では、ChatGPTを活用して労務管理を効率化する具体的な方法をご紹介します。",
        category: "ai",
        categoryLabel: "AI活用",
        date: "2025年6月28日",
        dateISO: "2025-06-28",
        image: "https://placehold.co/600x400/e3f2fd/1976d2?text=AI%E6%B4%BB%E7%94%A8",
        content: `
            <h2>はじめに</h2>
            <p>AI技術の急速な発展により、労務管理の分野でも大きな変革が起きています。特にChatGPTをはじめとする生成AIの登場は、従来の業務プロセスを根本から見直す機会を提供しています。</p>
            
            <h2>ChatGPTが労務管理にもたらす価値</h2>
            <p>ChatGPTを労務管理に活用することで、以下のような価値を実現できます：</p>
            <ul>
                <li>労務相談への迅速な対応</li>
                <li>就業規則の作成・改定の効率化</li>
                <li>各種届出書類の作成支援</li>
                <li>労働法改正情報の整理・要約</li>
            </ul>
            
            <h2>実践的な活用方法</h2>
            <h3>1. 労務相談対応の効率化</h3>
            <p>従業員からの基本的な労務相談に対して、ChatGPTを活用することで初期対応を効率化できます。ただし、最終的な判断は必ず専門家が行う必要があります。</p>
            
            <h3>2. 文書作成の支援</h3>
            <p>就業規則や各種規程の草案作成において、ChatGPTは強力なアシスタントとなります。企業の実情に合わせたカスタマイズは必須ですが、基本的な構成や文言の提案を得ることができます。</p>
            
            <h2>導入時の注意点</h2>
            <p>ChatGPTを労務管理に活用する際は、以下の点に注意が必要です：</p>
            <ul>
                <li>機密情報の取り扱いには十分注意する</li>
                <li>生成された内容は必ず専門家がレビューする</li>
                <li>最新の法改正情報は別途確認する</li>
                <li>個別の事案については慎重に判断する</li>
            </ul>
            
            <h2>まとめ</h2>
            <p>ChatGPTは労務管理業務を大きく効率化する可能性を秘めています。適切に活用することで、より価値の高い業務に集中できる環境を構築できるでしょう。</p>
        `
    },
    {
        id: 2,
        title: "2025年労働法改正のポイント：企業が押さえるべき5つの変更点",
        excerpt: "2025年に施行される労働法改正について、企業が特に注意すべき5つのポイントを解説します。早めの対応で、スムーズな移行を実現しましょう。",
        category: "law",
        categoryLabel: "法改正",
        date: "2025年6月25日",
        dateISO: "2025-06-25",
        image: "https://placehold.co/600x400/fff3e0/ff6f00?text=%E6%B3%95%E6%94%B9%E6%AD%A3",
        content: `
            <h2>2025年労働法改正の概要</h2>
            <p>2025年4月から施行される労働法改正は、働き方改革をさらに推進する内容となっています。企業は早めの準備が必要です。</p>
            
            <h2>押さえるべき5つの変更点</h2>
            <h3>1. 時間外労働の上限規制の強化</h3>
            <p>中小企業にも適用される時間外労働の上限規制がさらに強化されます。月45時間、年360時間の原則を厳守する体制作りが必要です。</p>
            
            <h3>2. 有給休暇取得の促進</h3>
            <p>年10日以上の有給休暇が付与される労働者に対して、年5日の取得義務が徹底されます。取得状況の管理体制を整備しましょう。</p>
            
            <h3>3. 同一労働同一賃金の適用拡大</h3>
            <p>正規・非正規労働者間の不合理な待遇差の禁止がより厳格に運用されます。賃金体系の見直しが必要になる場合があります。</p>
            
            <h3>4. テレワーク規定の整備</h3>
            <p>テレワークに関する労働条件の明示が義務化されます。就業規則にテレワーク規定を追加する必要があります。</p>
            
            <h3>5. ハラスメント防止措置の強化</h3>
            <p>パワーハラスメント防止措置が中小企業にも義務化されます。相談体制の整備と研修の実施が必要です。</p>
            
            <h2>対応のポイント</h2>
            <p>これらの改正に対応するため、以下の準備を進めることをお勧めします：</p>
            <ul>
                <li>現行の就業規則の見直し</li>
                <li>労務管理システムの更新</li>
                <li>管理職向け研修の実施</li>
                <li>従業員への周知徹底</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "中小企業でも使える！生産性向上に効果的なAIツール10選",
        excerpt: "限られた予算でも導入可能な、中小企業向けのAIツールを厳選してご紹介。業務効率化と生産性向上を実現する具体的な活用方法も解説します。",
        category: "ai",
        categoryLabel: "AI活用",
        date: "2025年6月20日",
        dateISO: "2025-06-20",
        image: "https://placehold.co/600x400/f3e5f5/7b1fa2?text=AI%E3%83%84%E3%83%BC%E3%83%AB",
        content: `
            <h2>中小企業こそAIを活用すべき理由</h2>
            <p>限られたリソースで最大の成果を出す必要がある中小企業にとって、AIツールは強力な味方となります。本記事では、実際に効果が実証されているツールを紹介します。</p>
            
            <h2>おすすめAIツール10選</h2>
            <h3>1. ChatGPT（OpenAI）</h3>
            <p>文書作成、翻訳、アイデア出しなど、幅広い業務に活用できる汎用AIツール。月額20ドルから利用可能。</p>
            
            <h3>2. Notion AI</h3>
            <p>ドキュメント管理とAI機能が統合されたツール。議事録の要約や文書の改善に効果的。</p>
            
            <h3>3. Canva AI</h3>
            <p>デザイン作成を支援するAI機能。プレゼン資料や広告素材を効率的に作成できる。</p>
            
            <h3>4. Microsoft Copilot</h3>
            <p>Office製品と連携し、Excel分析やPowerPoint作成を支援。既存のOffice環境で利用可能。</p>
            
            <h3>5. Grammarly</h3>
            <p>英文の文法チェックと改善提案。海外取引のある企業には必須のツール。</p>
            
            <h3>6. Zoom AI Companion</h3>
            <p>会議の要約と議事録作成を自動化。会議後のフォローアップを効率化。</p>
            
            <h3>7. Claude（Anthropic）</h3>
            <p>長文処理に強いAI。契約書レビューや長文レポートの分析に適している。</p>
            
            <h3>8. Jasper AI</h3>
            <p>マーケティングコンテンツ作成に特化。ブログ記事やSNS投稿を効率的に作成。</p>
            
            <h3>9. Salesforce Einstein</h3>
            <p>CRMと連携したAI機能。顧客データ分析と営業活動の最適化を支援。</p>
            
            <h3>10. Google Workspace AI</h3>
            <p>Gmail、Docs、Sheetsに統合されたAI機能。日常業務の効率化に貢献。</p>
            
            <h2>導入のポイント</h2>
            <p>AIツールを効果的に導入するには：</p>
            <ul>
                <li>まず無料版で試してみる</li>
                <li>特定の業務課題から始める</li>
                <li>社員への研修を実施する</li>
                <li>効果測定を行い、改善を続ける</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "助成金活用ガイド：2025年度注目の支援制度",
        excerpt: "2025年度に活用できる主要な助成金制度をまとめました。申請のポイントと注意事項も含めて、わかりやすく解説します。",
        category: "subsidy",
        categoryLabel: "助成金",
        date: "2025年6月18日",
        dateISO: "2025-06-18",
        image: "https://placehold.co/600x400/e8f5e9/2e7d32?text=%E5%8A%A9%E6%88%90%E9%87%91",
        content: `
            <h2>2025年度の助成金動向</h2>
            <p>2025年度は、DX推進と人材育成に関する助成金が充実しています。早めの情報収集と準備が成功の鍵となります。</p>
            
            <h2>注目の助成金制度</h2>
            <h3>1. IT導入補助金2025</h3>
            <p>中小企業のDX推進を支援。最大450万円の補助が受けられます。AIツール導入にも活用可能です。</p>
            
            <h3>2. ものづくり補助金</h3>
            <p>生産性向上のための設備投資を支援。最大1,250万円の補助金が交付されます。</p>
            
            <h3>3. 人材開発支援助成金</h3>
            <p>従業員のスキルアップ研修費用を助成。DX人材育成コースが新設されました。</p>
            
            <h3>4. 働き方改革推進支援助成金</h3>
            <p>労働時間短縮や有給休暇取得促進の取り組みを支援。最大200万円の助成。</p>
            
            <h3>5. キャリアアップ助成金</h3>
            <p>非正規雇用労働者の正社員化や待遇改善を支援。1人あたり最大72万円。</p>
            
            <h2>申請成功のポイント</h2>
            <ul>
                <li>事業計画書の具体性と実現可能性</li>
                <li>数値目標の明確化</li>
                <li>必要書類の完備</li>
                <li>申請期限の厳守</li>
            </ul>
            
            <h2>注意事項</h2>
            <p>助成金申請には以下の点にご注意ください：</p>
            <ul>
                <li>労働保険料の滞納がないこと</li>
                <li>就業規則の整備が必要</li>
                <li>事前の計画承認が必要な場合がある</li>
                <li>助成金は後払いが原則</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "テレワーク時代の労務管理：押さえるべき法的ポイント",
        excerpt: "テレワークが定着する中、労務管理の課題も複雑化しています。法的リスクを回避し、適切な労務管理を行うためのポイントを解説します。",
        category: "hr",
        categoryLabel: "労務管理",
        date: "2025年6月15日",
        dateISO: "2025-06-15",
        image: "https://placehold.co/600x400/e1f5fe/00acc1?text=%E3%83%86%E3%83%AC%E3%83%AF%E3%83%BC%E3%82%AF",
        content: `
            <h2>テレワーク労務管理の現状</h2>
            <p>コロナ禍を経て、テレワークは多くの企業で定着しました。しかし、労務管理の観点からは新たな課題も生まれています。</p>
            
            <h2>法的に押さえるべきポイント</h2>
            <h3>1. 労働時間管理</h3>
            <p>在宅勤務でも労働時間の適正な把握は使用者の義務です。以下の方法が推奨されます：</p>
            <ul>
                <li>パソコンのログイン・ログアウト時刻の記録</li>
                <li>勤怠管理システムの導入</li>
                <li>始業・終業時刻の報告ルール確立</li>
            </ul>
            
            <h3>2. 労働条件の明示</h3>
            <p>テレワーク実施時の労働条件を明確にする必要があります：</p>
            <ul>
                <li>就業場所の明示</li>
                <li>通信費・光熱費の負担区分</li>
                <li>業務用機器の貸与・費用負担</li>
            </ul>
            
            <h3>3. 安全配慮義務</h3>
            <p>在宅勤務でも使用者の安全配慮義務は継続します：</p>
            <ul>
                <li>作業環境の確認と指導</li>
                <li>長時間労働の防止</li>
                <li>メンタルヘルス対策</li>
            </ul>
            
            <h3>4. 情報セキュリティ</h3>
            <p>機密情報保護のための対策が必要です：</p>
            <ul>
                <li>セキュリティポリシーの策定</li>
                <li>VPN等の技術的対策</li>
                <li>情報取扱いルールの徹底</li>
            </ul>
            
            <h2>テレワーク規程の整備</h2>
            <p>適切なテレワーク運用のため、以下を含む規程整備が推奨されます：</p>
            <ul>
                <li>対象者・実施条件</li>
                <li>申請・承認手続き</li>
                <li>勤務時間・休憩時間</li>
                <li>業務報告の方法</li>
                <li>費用負担のルール</li>
            </ul>
            
            <h2>まとめ</h2>
            <p>テレワークは働き方の選択肢を広げる一方、適切な労務管理が不可欠です。法的要件を満たしながら、生産性の高い働き方を実現しましょう。</p>
        `
    }
];

// HTMLテンプレート
function generateBlogHTML(post) {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "datePublished": post.dateISO,
        "dateModified": post.dateISO,
        "author": {
            "@type": "Person",
            "name": "尾形雅基",
            "url": "https://ogata-offices.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "尾形社会保険労務士事務所",
            "logo": {
                "@type": "ImageObject",
                "url": "https://ogata-offices.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://ogata-offices.com/blog/article-${post.id}.html`
        }
    };

    return `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${post.title} | 尾形社会保険労務士事務所</title>
    <meta name="description" content="${post.excerpt}">
    
    <!-- OGP Meta Tags -->
    <meta property="og:title" content="${post.title} | 尾形社会保険労務士事務所">
    <meta property="og:description" content="${post.excerpt}">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://ogata-offices.com/blog/article-${post.id}.html">
    <meta property="og:image" content="${post.image}">
    <meta property="og:site_name" content="尾形社会保険労務士事務所">
    <meta property="article:published_time" content="${post.dateISO}">
    <meta property="article:author" content="尾形雅基">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${post.title} | 尾形社会保険労務士事務所">
    <meta name="twitter:description" content="${post.excerpt}">
    <meta name="twitter:image" content="${post.image}">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://ogata-offices.com/blog/article-${post.id}.html">
    
    <!-- Stylesheets -->
    <link rel="stylesheet" href="../styles.css">
    <link rel="stylesheet" href="../blog.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    ${JSON.stringify(structuredData, null, 4)}
    </script>
</head>
<body>
    <!-- Navigation -->
    <nav class="nav">
        <div class="nav-container">
            <div class="nav-logo">
                <h2>尾形社会保険労務士事務所</h2>
            </div>
            <ul class="nav-menu">
                <li><a href="../index.html">ホーム</a></li>
                <li><a href="../index.html#ai-services">AI活用支援</a></li>
                <li><a href="../index.html#sr-services">社労士業務</a></li>
                <li><a href="../index.html#pricing">料金</a></li>
                <li><a href="../index.html#about">事務所概要</a></li>
                <li><a href="../blog.html" class="active">ブログ</a></li>
                <li><a href="../index.html#contact">お問い合わせ</a></li>
            </ul>
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Article Container -->
    <article class="blog-article">
        <div class="container">
            <!-- Breadcrumb -->
            <nav class="breadcrumb" aria-label="パンくずリスト">
                <ol itemscope itemtype="https://schema.org/BreadcrumbList">
                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <a itemprop="item" href="../index.html">
                            <span itemprop="name">ホーム</span>
                        </a>
                        <meta itemprop="position" content="1" />
                    </li>
                    <li>&gt;</li>
                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <a itemprop="item" href="../blog.html">
                            <span itemprop="name">ブログ</span>
                        </a>
                        <meta itemprop="position" content="2" />
                    </li>
                    <li>&gt;</li>
                    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                        <span itemprop="name">${post.categoryLabel}</span>
                        <meta itemprop="position" content="3" />
                    </li>
                </ol>
            </nav>

            <!-- Article Header -->
            <header class="article-header">
                <div class="article-meta">
                    <time class="article-date" datetime="${post.dateISO}">${post.date}</time>
                    <span class="article-category">${post.categoryLabel}</span>
                </div>
                <h1 class="article-title">${post.title}</h1>
                <div class="article-author">
                    <span>執筆者: 尾形雅基</span>
                </div>
            </header>

            <!-- Article Content -->
            <div class="article-content">
                ${post.content}
            </div>

            <!-- Share Buttons -->
            <div class="share-section">
                <h3>この記事をシェア</h3>
                <div class="share-buttons">
                    <a href="https://twitter.com/intent/tweet?url=${encodeURIComponent('https://ogata-offices.com/blog/article-' + post.id + '.html')}&text=${encodeURIComponent(post.title)}" class="share-btn twitter" target="_blank" rel="noopener noreferrer">
                        <span>X (Twitter)</span>
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://ogata-offices.com/blog/article-' + post.id + '.html')}" class="share-btn facebook" target="_blank" rel="noopener noreferrer">
                        <span>Facebook</span>
                    </a>
                    <a href="https://line.me/R/msg/text/?${encodeURIComponent(post.title + '\n' + 'https://ogata-offices.com/blog/article-' + post.id + '.html')}" class="share-btn line" target="_blank" rel="noopener noreferrer">
                        <span>LINE</span>
                    </a>
                </div>
            </div>

            <!-- Related Articles -->
            <section class="related-articles">
                <h2>関連記事</h2>
                <div class="related-grid" id="relatedArticles">
                    <!-- 関連記事は動的に生成 -->
                </div>
            </section>

            <!-- CTA Section -->
            <section class="article-cta">
                <div class="cta-box">
                    <h3>AI活用で業務効率化を実現しませんか？</h3>
                    <p>尾形社会保険労務士事務所では、労務管理とAI活用の両面から企業の成長をサポートします。</p>
                    <a href="../index.html#contact" class="btn-primary">無料相談を申し込む</a>
                </div>
            </section>
        </div>
    </article>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>尾形社会保険労務士事務所</h3>
                    <p>AI活用支援に重点を置いた次世代の社労士サービス</p>
                </div>
                <div class="footer-section">
                    <h4>AI活用支援</h4>
                    <ul>
                        <li><a href="../index.html#ai-services">AI導入戦略策定</a></li>
                        <li><a href="../index.html#ai-services">AI実装・運用支援</a></li>
                        <li><a href="../index.html#ai-services">AI効果測定・改善</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>社労士業務</h4>
                    <ul>
                        <li><a href="../index.html#sr-services">労務相談・指導</a></li>
                        <li><a href="../index.html#sr-services">各種手続き代行</a></li>
                        <li><a href="../index.html#sr-services">助成金申請支援</a></li>
                        <li><a href="../index.html#sr-services">就業規則作成</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>お問い合わせ</h4>
                    <p>📞 03-6824-6886</p>
                    <p>✉️ info@ogata-offices.com</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 尾形社会保険労務士事務所. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="../script.js"></script>
    <script>
        // 関連記事の表示
        const relatedPosts = ${JSON.stringify(blogPosts.filter(p => p.category === post.category && p.id !== post.id).slice(0, 3))};
        const relatedGrid = document.getElementById('relatedArticles');
        
        relatedGrid.innerHTML = relatedPosts.map(p => \`
            <article class="blog-card" onclick="window.location.href='article-\${p.id}.html'">
                <img src="\${p.image}" alt="\${p.title}" class="blog-card-image">
                <div class="blog-card-content">
                    <div class="blog-card-meta">
                        <span class="blog-card-date">\${p.date}</span>
                        <span class="blog-card-category">\${p.categoryLabel}</span>
                    </div>
                    <h3 class="blog-card-title">\${p.title}</h3>
                    <a href="article-\${p.id}.html" class="blog-card-link">
                        続きを読む →
                    </a>
                </div>
            </article>
        \`).join('');
    </script>
</body>
</html>`;
}

// blogディレクトリを作成
const blogDir = path.join(__dirname, 'blog');
if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir);
}

// 各記事のHTMLファイルを生成
blogPosts.forEach(post => {
    const html = generateBlogHTML(post);
    const filename = path.join(blogDir, `article-${post.id}.html`);
    fs.writeFileSync(filename, html, 'utf8');
    console.log(`Generated: ${filename}`);
});

console.log('All blog article pages have been generated successfully!');