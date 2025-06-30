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

// AI活用ブログ記事データ
const blogPosts = [
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
            
            <h2>学習過程：コツを掴むまで</h2>
            <h3>最初難しかった部分</h3>
            <p>最初は質問の仕方がわからず、思うような結果が得られないこともありました：</p>
            <ul>
                <li>どの程度詳しく説明すれば良いのか分からない</li>
                <li>専門用語を使うべきか、普通の言葉で話すべきか迷う</li>
                <li>一度に複数の変更を頼むと混乱することがある</li>
            </ul>
            
            <h3>コツが分かってきた</h3>
            <p>慣れてくると、効果的な質問の仕方が分かってきました：</p>
            <ul>
                <li>具体的で明確な指示を出す</li>
                <li>一つずつ段階的に進める</li>
                <li>分からない時はスクリーンショットを撮って見せる</li>
                <li>「こんな感じにしたい」と具体例を示す</li>
            </ul>
            
            <div style="background: #fff3e0; padding: 15px; border-left: 4px solid #ff9800; margin: 20px 0;">
                <p><strong>効果的だった質問例：</strong><br>
                「ブログの画像が表示されません。スクリーンショットを添付しますので、確認してください」<br>
                「この青色がちょっと鮮やかすぎるので、もう少し渋めの色に変更してください」</p>
            </div>
            
            <h2>制作時間とプロセス</h2>
            <h3>ホームページ制作：約8時間</h3>
            <p>基本的なホームページの完成まで約8時間かかりました。この時間には以下が含まれます：</p>
            <ul>
                <li>基本構造の作成</li>
                <li>デザインの調整</li>
                <li>レスポンシブ対応</li>
                <li>細かい修正</li>
                <li>独自ドメインでの公開</li>
            </ul>
            
            <h3>ブログシステム：約2時間</h3>
            <p>ホームページ完成後、ブログ機能を追加しました：</p>
            <ul>
                <li>記事一覧ページの作成</li>
                <li>個別記事ページのテンプレート</li>
                <li>カテゴリー機能</li>
                <li>記事エディターツール</li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
                <img src="./generated-images/ai-collaboration.png" alt="AIとの協働" style="width: 90%; max-width: 600px; height: auto;">
            </div>
            
            <h2>完成した時の気持ち</h2>
            <p>すべてが完成した時、正直に言うと「すごいな」って本当に思いました。でも、自分がすごいんじゃなくて、このAIの技術力がすごいんだなと。</p>
            
            <p>プログラミングの知識がなくても、アイデアと適切な指示があれば、ここまでのものが作れるんだと実感しました。これまで「無理だ」と思っていたことが、実は可能だったんです。</p>
            
            <h2>この体験から学んだこと</h2>
            <h3>AIとの協働の可能性</h3>
            <p>AIは万能ではありませんが、適切に使えば強力なパートナーになります。重要なのは：</p>
            <ul>
                <li>明確なビジョンを持つこと</li>
                <li>段階的にアプローチすること</li>
                <li>AIの提案を理解しようと努めること</li>
                <li>完璧を求めず、改善を重ねること</li>
            </ul>
            
            <h3>技術への恐怖心の克服</h3>
            <p>「プログラミングは難しい」という先入観がありましたが、実際にはAIの助けがあれば、アイデアを形にすることは十分可能でした。</p>
            
            <h2>今後の展望</h2>
            <p>この成功体験を活かして、今後は自分の業務の効率化を考えたいという人たちに、AI活用の可能性をお伝えしていきたいと考えています。</p>
            
            <p>私の場合で言うと、特に以下の分野で支援していきたいと思います：</p>
            <ul>
                <li>業務自動化ツールの導入支援</li>
                <li>効率的な文書作成システムの構築</li>
                <li>顧客対応の質向上とスピードアップ</li>
                <li>データ分析による経営改善提案</li>
            </ul>
            
            <h2>まとめ</h2>
            <p>Claude Codeとの出会いは、私にとって大きな転換点でした。プログラミング初心者でも「できない」と思い込んでいたことが「できる」に変わった瞬間です。</p>
            
            <p>AI活用は特別な技術ではなく、適切な使い方を学べば誰でも活用できるツールです。大切なのは「やってみる」という一歩を踏み出すことだと思います。</p>
            
            <p>もし同じように「AIを活用したいけど、何から始めればいいかわからない」という方がいらっしゃいましたら、ぜひお気軽にご相談ください。一緒に新しい可能性を探っていきましょう。</p>
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
            
            <h3>スライド作成のメリット</h3>
            <ul>
                <li>デザインセンスがなくても美しいスライドが作れる</li>
                <li>内容を整理して分かりやすく構成してくれる</li>
                <li>時間をかけずにプロフェッショナルな仕上がり</li>
                <li>様々なビジネスシーンで活用可能</li>
            </ul>
            
            <h3>実際の作成例</h3>
            <p>実際にジェンスパークでスライドを作成した事例をご紹介します。</p>
            
            <div style="background: #fff3e0; padding: 15px; border-left: 4px solid #ff9800; margin: 20px 0;">
                <p><strong>実際に使ったプロンプト：</strong></p>
                <p>「社労士×AI研究会（仮）」の概要として案内スライドを作成してください。<br>
                無料コミュニティの案内文なので営業色は控えめに誠実な感じにしてください</p>
                
                <p>・AIを使って社労士業務の効率化を研究するための社労士のためのグループです。<br>
                成功事例を共有することで、コミュニティ会員の業務効率化の向上を目指します。<br>
                ・社労士限定のコミュニティ<br>
                ・発言なしで見るだけでもOK。<br>
                ・AI初心者ももちろんOK。<br>
                ・定期的に無料勉強会も開催</p>
            </div>
            
            <p>このプロンプトから、プロフェッショナルで見栄えの良いスライドが自動生成されました。デザインも構成も非常に分かりやすく、そのまま使用できる品質でした。</p>
            
            <p style="text-align: center; margin: 20px 0;">
                <a href="https://www.genspark.ai/slides?project_id=71d6f089-9102-48eb-9678-91acd0d030b2" target="_blank" style="color: #007bff; text-decoration: underline;">→ 実際に生成されたスライドを見る</a>
            </p>
            
            <h2>魅力2：専門的な調べものでの高い精度</h2>
            <p>ジェンスパークは単なる検索ツールではありません。複雑で専門的な質問にも、驚くほど正確で詳細な回答を提供してくれます。</p>
            
            <h3>実際の体験例：ふるさと納税の限度額計算</h3>
            <p>先日、ふるさと納税の限度額計算について調べる機会がありました。特に気になったのが「退職所得が対象になるのか」という点です。</p>
            
            <div style="background: #fff3e0; padding: 15px; border-left: 4px solid #ff9800; margin: 20px 0;">
                <p><strong>質問例：</strong><br>
                「ふるさと納税の限度額計算で、退職所得は対象になりますか？計算方法も含めて詳しく教えてください。」</p>
            </div>
            
            <p>ジェンスパークは、退職所得の取り扱いについて非常に詳細かつ正確に回答してくれました。税制上の取り扱いから具体的な計算方法まで、まるで税理士に相談したかのような充実した内容でした。</p>
            
            <h3>社労士業務での活用</h3>
            <p>社労士としての業務でも、ジェンスパークは非常に頼りになります：</p>
            <ul>
                <li>労働法の複雑な解釈について詳細な説明</li>
                <li>最新の法改正情報の整理</li>
                <li>具体的な事例に対する対応方法の提案</li>
                <li>助成金申請の要件や手続きの説明</li>
            </ul>
            
            <p>もちろん、最終的な判断は専門家として自分で行いますが、初期の情報収集や確認作業において、ジェンスパークは非常に有用なパートナーです。</p>
            
            <h2>実際の使い方・活用場面</h2>
            <h3>こんな時に便利</h3>
            <ul>
                <li><strong>会議資料の作成</strong>：テーマを伝えるだけで構成の整ったスライドが完成</li>
                <li><strong>専門知識の確認</strong>：法律や制度の詳細な解釈を迅速に取得</li>
                <li><strong>調査業務</strong>：複雑な制度や手続きについて包括的な情報を収集</li>
                <li><strong>クライアント対応</strong>：相談内容の事前調査や論点整理</li>
                <li><strong>研修資料作成</strong>：教育用コンテンツの企画・構成</li>
            </ul>
            
            <h3>業務での具体的な活用シーン</h3>
            <p>例えば、クライアントから「働き方改革関連法について従業員向けに説明したい」という相談があった場合、ジェンスパークに「働き方改革関連法の従業員向け説明資料を作成してください」と依頼すれば、分かりやすいスライドを短時間で作成できます。</p>
            
            <p>また、「テレワーク導入時の労務管理で注意すべき点」について調べたい場合も、法的な要件から実務上の注意点まで、包括的で実用的な情報を得ることができます。</p>
            
            <h2>なぜジェンスパークがおすすめなのか</h2>
            
            <div style="text-align: center; margin: 30px 0;">
                <img src="./generated-images/success-achievement.png" alt="成功への道のり" style="width: 60%; max-width: 500px; height: auto;">
            </div>
            
            <h3>1. 圧倒的な回答精度</h3>
            <p>従来の検索エンジンでは得られない、詳細で正確な回答を提供してくれます。特に専門的な内容において、その差は歴然です。</p>
            
            <h3>2. 時間の大幅短縮</h3>
            <p>複数のサイトを巡回して情報を収集する必要がありません。一つの質問で必要な情報をまとめて取得できます。</p>
            
            <h3>3. 多機能性</h3>
            <p>調べものからスライド作成まで、一つのツールで幅広い業務をカバーできます。</p>
            
            <h3>4. 直感的な操作</h3>
            <p>複雑な設定や学習は不要。自然な言葉で質問するだけで、期待以上の結果が得られます。</p>
            
            <h2>どんな人におすすめか</h2>
            <p>ジェンスパークは以下のような方に特におすすめです：</p>
            <ul>
                <li><strong>士業の方</strong>：専門知識の確認や資料作成に最適</li>
                <li><strong>研修・教育担当者</strong>：分かりやすい教材作成をサポート</li>
                <li><strong>営業・企画職</strong>：プレゼン資料の作成が格段に楽になる</li>
                <li><strong>経営者・管理職</strong>：迅速な情報収集と意思決定を支援</li>
                <li><strong>調査・分析業務の方</strong>：効率的な情報収集が可能</li>
            </ul>
            
            <h2>まとめ</h2>
            <p>ジェンスパークは、単なる検索ツールの枠を超えた、本当に優秀なAIアシスタントです。スライド作成から専門的な調べものまで、幅広い業務で頼りになるパートナーとなってくれます。</p>
            
            <p>特に、情報の正確性と包括性は他のツールと比べても群を抜いています。社労士として複雑な制度や法律について調べることが多い私にとって、これほど信頼できるツールは他にありません。</p>
            
            <p>まだ使ったことがない方は、ぜひ一度試してみてください。きっとその実力に驚かれると思います。業務効率化を真剣に考えている方には、心からおすすめできるAIツールです。</p>
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
        
        const postsToShow = filteredPosts.slice(0, displayedPosts);
        
        blogGrid.innerHTML = postsToShow.map(post => `
            <article class="blog-card" onclick="window.location.href='blog-post.html?id=${post.id}'">
                <img src="${getImagePath(post.image)}" alt="${post.title}" class="blog-card-image" 
                     onerror="console.log('画像読み込みエラー:', this.src); this.style.display='none';">
                <div class="blog-card-content">
                    <div class="blog-card-meta">
                        <span class="blog-card-date">${post.date}</span>
                        <span class="blog-card-category">${post.categoryLabel}</span>
                    </div>
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                    <a href="blog-post.html?id=${post.id}" class="blog-card-link">
                        続きを読む →
                    </a>
                </div>
            </article>
        `).join('');

        // もっと見るボタンの表示/非表示
        const loadMoreBtn = document.getElementById('loadMoreBtn');
        if (filteredPosts.length > displayedPosts) {
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
            <article class="blog-card" onclick="window.location.href='blog-post.html?id=${p.id}'>"
                <img src="${getImagePath(p.image)}" alt="${p.title}" class="blog-card-image" 
                     onerror="console.log('関連記事画像読み込みエラー:', this.src); this.style.display='none';">
                <div class="blog-card-content">
                    <div class="blog-card-meta">
                        <span class="blog-card-date">${p.date}</span>
                        <span class="blog-card-category">${p.categoryLabel}</span>
                    </div>
                    <h3 class="blog-card-title">${p.title}</h3>
                    <a href="blog-post.html?id=${p.id}" class="blog-card-link">
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