// 画像パスを正しく取得する関数
function getImagePath(imagePath) {
    // 現在のURLがblog.htmlまたはblog-post.htmlの場合は相対パス
    const currentPath = window.location.pathname;
    if (currentPath.includes('blog.html') || currentPath.includes('blog-post.html')) {
        return imagePath;
    }
    // その他の場合も相対パス（同じディレクトリ内のため）
    return imagePath;
}

// AI活用ブログ記事データ（新しい記事順）
const blogPosts = [
    {
        id: 7,
        title: "経営者が今すぐAIを学ぶべき理由 - 生産性10倍の未来を掴む",
        excerpt: "経営者の皆様、AI技術の進化スピードは想像を超えています。「まだ大丈夫」と思っている間に、世界は大きく変わっているかもしれません。",
        category: "ai-business",
        categoryLabel: "AIと経営",
        date: "2025年7月2日",
        image: "./generated-images/male-executive-ai-productivity-wide.png",
        content: `
            <p>経営者の皆様、AI技術の進化スピードは想像を超えています。「まだ大丈夫」と思っている間に、世界は大きく変わっているかもしれません。</p>
            
            <p>しかし、これは脅威ではなく、大きなチャンスです。なぜなら、AIは経営者の能力を10倍に引き上げる可能性を秘めているからです。</p>
            
            <h2>なぜ経営者こそAIを学ぶべきなのか</h2>
            
            <h3>経営者の生産性が10倍になる現実</h3>
            <p>私も経営者として実感しています。経営者は組織で最もパワーを持つ存在ですが、時間には限りがあり、すべてを自分でこなすことはできません。だからこそ従業員が必要になるわけです。</p>
            
            <p>ここで重要な事実をお伝えします。近い将来、AIを活用する経営者は、従業員10人分の仕事ができるようになります。つまり、労働生産性が10倍になるということです。これは実際に可能なのです。</p>
            
            <h3>できなかったことが、できるようになる感動</h3>
            <p>私自身、AIを学んで本当に驚いています。</p>
            
            <ul>
                <li>ホームページが作れなかった → AIの力で作成可能に</li>
                <li>システム開発ができなかった → AIと協働して開発できるように</li>
                <li>複雑な分析に時間がかかっていた → 瞬時に分析・提案を得られるように</li>
            </ul>
            
            <p>この変化は、単なる効率化を超えた、新しい可能性の扉を開くものです。</p>
            

            <h2>トップダウンでのAI導入が成功の鍵</h2>
            
            <div style="text-align: center; margin: 30px 0;"><img src="./generated-images/ai-business-transformation-wide.png" alt="AIによるビジネス変革のイメージ" style="width: 90%; max-width: 600px; height: auto;"></div>
            
            <h3>経営者自身が価値を実感する必要性</h3>
            <p>「社員に任せればいい」では、本当の変革は起きません。</p>
            
            <p>経営者自身がAIの凄さに気づき、本当の意味で理解しない限り、会社にAIを普及させることはできません。経営者がリーダーシップを取り、自ら実践することで、組織は変わり始めます。</p>
            
            <h3>全社員のAI活用で圧倒的な競争力を</h3>
            <p>私なら社員全員にAIを学ばせます。考えてみてください。</p>
            
            <p>生産性が一人10倍になったらどうでしょうか？どう考えても勝てます。今ならまだ、この優位性を手に入れるチャンスがあります。</p>
            
            <h2>今すぐ始める理由</h2>
            
            <h3>学ばないことのリスクと学ぶことの楽しさ</h3>
            <p>AIを学ばないことは、大きな機会損失です。でも、恐怖や危機感だけで始める必要はありません。</p>
            
            <p>AIを学ぶことは、とにかく楽しいのです。新しいことができるようになる喜び、問題解決のスピードが上がる快感。まずは「楽しい」と思えるところまで到達することが大切です。</p>
            

            <h2>経営者の皆様へ</h2>
            <p>この感動を、ぜひ一緒に体験しましょう。私は経営者の皆様を心から応援しています。一緒に頑張りましょう。</p>
            
            <p>AIがもたらす新しい経営の形を、共に実現していきませんか。お問い合わせをお待ちしています。</p>
            
            <p>今すぐ、第一歩を踏み出してください。その一歩が、あなたの会社の未来を大きく変えることになるでしょう。</p>
        `
    },
    {
        id: 1,
        title: "プログラミング初心者がClaude Codeでホームページ制作に成功した体験談（このホームページを作った時の実話です）",
        excerpt: "プログラミング初心者の私が、AIの力を借りてホームページとブログシステムを作り上げることができました。その実体験を包み隠さずお話しします。",
        category: "tips",
        categoryLabel: "活用・成功事例",
        date: "2025年6月30日",
        image: "./generated-images/male-success-achievement.png",
        content: `
            <h2>きっかけ：YouTubeで見つけた可能性</h2>
            <p>もともとバイブコーディングにすごく興味があって、YouTubeでバイブコーディング関連の動画をよく見ていました。その中で関連動画として、イケハヤさんの動画が出てきたんです。バイブコーディングの紹介動画のような内容で、それで興味を持ちました。</p>
            
            <p style="font-size: 0.9em; color: #666; font-style: italic;">※バイブコーディング：AIを活用した新しいプログラミング手法。「バイブ（雰囲気・フィーリング）」で全体的な目的や機能をAIに伝え、細かい技術的詳細はAIに任せるアプローチ。2025年に注目されている。</p>
            
            <p><strong>参考動画：</strong></p>
            <div style="position: relative; width: 90%; height: 0; padding-bottom: 50.625%; margin: 15px auto;">
                <iframe 
                    src="https://www.youtube.com/embed/TNet-59wnH0" 
                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
                    allowfullscreen>
                </iframe>
            </div>
            <p style="text-align: center; font-size: 0.9em; color: #666;">イケハヤさんのClaude Code紹介動画</p>
            
            <p>そこからイケハヤさんの他の動画も見るようになり、Claude Codeというツールを知ったんです。「AIがコードを書いてくれる」という話に、半信半疑ながらも試してみることにしました。</p>
            
            <h2>Claude Codeとの出会い</h2>
            <p>イケハヤさんがClaude Codeの魅力を熱く語っていました。「プログラミングを知らなくても、AIが手伝ってくれる」「自然言語で指示を出すだけでコードが生成される」そんな説明を聞いて、これは試してみる価値があると思いました。</p>
            
            <p>早速Claude Codeをダウンロードして、最初のお願いをしました：</p>
            
            <div style="background: #fff3e0; padding: 15px; border-left: 4px solid #ff9800; margin: 20px 0;">
                <p><strong>最初のリクエスト：</strong><br>
                「AI活用に力を入れている社労士事務所のホームページを作ってください。現代的でプロフェッショナルな印象で、AI活用支援サービスを前面に押し出したデザインにしてください。」</p>
            </div>
            
            <h2>予想以上の出来栄え</h2>
            <p>Claude Codeが作ってくれたホームページは、思っていたよりもしっかりとしたものでした。レスポンシブデザインでスマホ表示にも対応しており、想像していた以上の仕上がりになっていました。正直、これほどちゃんとしたものができるとは思っていませんでした。</p>
            
            <p>最初は「本当にうまくいくのかな？」と半信半疑でしたが、実際に動くホームページができあがっているのを見た時は、素直に感動しました。AIツールの可能性を肌で感じた瞬間でした。</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <img src="./generated-images/ai-collaboration.png" alt="AIとの協働" style="width: 90%; max-width: 600px; height: auto;">
            </div>
            
            <h2>まとめ</h2>
            <p>Claude Codeとの出会いは、私にとって大きな転換点でした。プログラミング初心者でも「できない」と思い込んでいたことが「できる」に変わった瞬間です。</p>
            
            <p>AI活用は特別な技術ではなく、適切な使い方を学べば誰でも活用できるツールです。大切なのは「やってみる」という一歩を踏み出すことだと思います。</p>
        `
    },
    {
        id: 6,
        title: "綺麗なスライドも調べものも！ジェンスパーク（Genspark）が業務効率化におすすめな理由",
        excerpt: "AIエージェント・ジェンスパークの実力を社労士が検証。スライド作成から専門的な調べものまで、実際の使用例とともに詳しく解説します。",
        category: "tools",
        categoryLabel: "おすすめAIツール",
        date: "2025年6月28日",
        image: "./generated-images/ai-collaboration.png",
        content: `
            <h2>ジェンスパークとは？</h2>
            <p>ジェンスパークは、従来の検索エンジンとは一線を画すAIエージェントです。単に検索結果を表示するだけでなく、質問に対して包括的で正確な回答を生成してくれます。特に専門的な内容や複雑な質問に対しても、驚くほど詳細で実用的な回答を提供してくれるのが特徴です。</p>
            
            <h2>魅力1：綺麗なスライドを簡単作成</h2>
            <p>ジェンスパークの大きな魅力の一つが、プレゼンテーション用のスライドを簡単に作成できることです。テーマや内容を伝えるだけで、見栄えの良いスライドを自動生成してくれます。</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <img src="./generated-images/success-achievement.png" alt="成功への道のり" style="width: 60%; max-width: 500px; height: auto;">
            </div>
            
            <h2>まとめ</h2>
            <p>ジェンスパークは、単なる検索ツールの枠を超えた、本当に優秀なAIアシスタントです。スライド作成から専門的な調べものまで、幅広い業務で頼りになるパートナーとなってくれます。</p>
        `
    }
];

// 現在のページを判定
const isArticlePage = window.location.pathname.includes('blog-post.html');

// カテゴリーフィルター機能
if (!isArticlePage) {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogGrid = document.getElementById('blogGrid');
    let currentCategory = 'all';
    let displayedPosts = 6;

    // カテゴリーボタンのイベントリスナー
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            displayedPosts = 6;
            renderBlogList();
        });
    });

    // ブログ記事一覧を表示
    function renderBlogList() {
        const filteredPosts = currentCategory === 'all' 
            ? blogPosts 
            : blogPosts.filter(post => post.category === currentCategory);
        
        // 記事を日付順に降順ソート（新しい記事が上に）
        const sortedPosts = filteredPosts.sort((a, b) => {
            // 日付文字列をより確実に解析
            const parseJapaneseDate = (dateStr) => {
                const match = dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
                if (match) {
                    return new Date(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
                }
                return new Date(0); // フォールバック
            };
            
            const dateA = parseJapaneseDate(a.date);
            const dateB = parseJapaneseDate(b.date);
            return dateB - dateA; // 降順（新しい記事が上）
        });
        
        const postsToShow = sortedPosts.slice(0, displayedPosts);
        
        blogGrid.innerHTML = postsToShow.map(post => `
            <article class="blog-card" onclick="window.location.href='blog/article-${post.id}.html'">
                <img src="${getImagePath(post.image)}" alt="${post.title}" class="blog-card-image" 
                     onerror="console.log('画像読み込みエラー:', this.src); this.style.display='none';">
                <div class="blog-card-content">
                    <div class="blog-card-meta">
                        <span class="blog-card-date">${post.date}</span>
                        <span class="blog-card-category">${post.categoryLabel}</span>
                    </div>
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                    <a href="blog/article-${post.id}.html" class="blog-card-link">
                        続きを読む →
                    </a>
                </div>
            </article>
        `).join('');

        // もっと見るボタンの表示/非表示
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (sortedPosts.length > displayedPosts) {
            loadMoreBtn.style.display = 'inline-block';
        } else {
            loadMoreBtn.style.display = 'none';
        }
    }

    // もっと見るボタン
    document.getElementById('loadMoreBtn').addEventListener('click', () => {
        displayedPosts += 6;
        renderBlogList();
    });

    // 初期表示
    renderBlogList();
}

// 記事詳細ページの処理
if (isArticlePage) {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    const post = blogPosts.find(p => p.id === postId);

    if (post) {
        // タイトルと記事情報を設定
        document.title = `${post.title} | ブログ | 尾形社会保険労務士事務所`;
        document.getElementById('articleTitle').textContent = post.title;
        document.getElementById('articleDate').textContent = post.date;
        document.getElementById('articleCategory').textContent = post.categoryLabel;
        document.getElementById('articleCategoryBadge').textContent = post.categoryLabel;
        
        // SEOメタタグを動的に設定
        const currentUrl = window.location.href;
        document.querySelector('meta[name="description"]').setAttribute('content', post.excerpt);
        document.querySelector('meta[property="og:title"]').setAttribute('content', `${post.title} | 尾形社会保険労務士事務所`);
        document.querySelector('meta[property="og:description"]').setAttribute('content', post.excerpt);
        document.querySelector('meta[property="og:url"]').setAttribute('content', currentUrl);
        document.querySelector('meta[property="og:image"]').setAttribute('content', `https://ogata-offices.com/${post.image}`);
        document.querySelector('meta[name="twitter:title"]').setAttribute('content', `${post.title} | 尾形社会保険労務士事務所`);
        document.querySelector('meta[name="twitter:description"]').setAttribute('content', post.excerpt);
        document.querySelector('meta[name="twitter:image"]').setAttribute('content', `https://ogata-offices.com/${post.image}`);
        document.querySelector('link[rel="canonical"]').setAttribute('href', currentUrl);
        
        // 記事画像をヘッダーに追加
        const articleHeader = document.querySelector('.article-header');
        const heroImage = document.createElement('div');
        heroImage.className = 'article-hero-image';
        heroImage.innerHTML = `<img src="${getImagePath(post.image)}" alt="${post.title}" 
                                    onerror="console.log('記事画像読み込みエラー:', this.src); this.style.display='none';" />`;
        articleHeader.appendChild(heroImage);
        
        // 記事内容を設定し、CTAセクションを自動追加
        const articleContent = document.getElementById('articleContent');
        articleContent.innerHTML = post.content;
        
        // CTAセクションを自動追加
        const ctaSection = document.createElement('div');
        ctaSection.innerHTML = `
            <div style="background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); color: #fff; padding: 30px; border-radius: 10px; text-align: center; margin: 40px 0;">
                <h3 style="color: #fff; margin-bottom: 15px;">AI活用で業務効率化を実現しませんか？</h3>
                <p style="margin-bottom: 20px; line-height: 1.6;">
                    労務管理業務の効率化から、AIツールの導入支援まで。<br>
                    御社の業務課題を当事務所が解決します。
                </p>
                <a href="index.html#contact" style="background: #fff; color: #4a5568; padding: 12px 30px; border-radius: 25px; text-decoration: none; font-weight: bold; display: inline-block; border: 2px solid #fff;">無料相談はこちら</a>
            </div>
        `;
        articleContent.appendChild(ctaSection);

        // シェアボタンの設定
        const shareUrl = encodeURIComponent(window.location.href);
        const shareTitle = encodeURIComponent(post.title);
        
        document.getElementById('shareTwitter').href = 
            `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`;
        document.getElementById('shareFacebook').href = 
            `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`;
        document.getElementById('shareLine').href = 
            `https://line.me/R/msg/text/?${shareTitle}%0A${shareUrl}`;

        // 関連記事を表示（同じカテゴリーの他の記事）
        const relatedPosts = blogPosts
            .filter(p => p.category === post.category && p.id !== post.id)
            .slice(0, 3);
        
        const relatedGrid = document.getElementById('relatedArticles');
        relatedGrid.innerHTML = relatedPosts.map(p => `
            <article class="blog-card" onclick="window.location.href='blog/article-${p.id}.html'">
                <img src="${getImagePath(p.image)}" alt="${p.title}" class="blog-card-image" 
                     onerror="console.log('関連記事画像読み込みエラー:', this.src); this.style.display='none';">
                <div class="blog-card-content">
                    <div class="blog-card-meta">
                        <span class="blog-card-date">${p.date}</span>
                        <span class="blog-card-category">${p.categoryLabel}</span>
                    </div>
                    <h3 class="blog-card-title">${p.title}</h3>
                    <a href="blog/article-${p.id}.html" class="blog-card-link">
                        続きを読む →
                    </a>
                </div>
            </article>
        `).join('');
    } else {
        // 記事が見つからない場合
        document.getElementById('articleContent').innerHTML = 
            '<p>記事が見つかりませんでした。<a href="blog.html">ブログ一覧に戻る</a></p>';
    }
}