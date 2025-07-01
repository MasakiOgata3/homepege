// ブログ記事の個別HTMLページを生成するスクリプト
const fs = require('fs');
const path = require('path');

// blog.jsから記事データをコピー
const blogPosts = [
    {
        id: 1,
        title: "プログラミング初心者がClaude Codeでホームページ制作に成功した体験談（このホームページを作った時の実話です）",
        excerpt: "プログラミング初心者の私が、AIの力を借りてホームページとブログシステムを作り上げることができました。その実体験を包み隠さずお話しします。",
        category: "tips",
        categoryLabel: "活用・成功事例",
        date: "2025年6月30日",
        dateISO: "2025-06-30",
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
                <img src="../generated-images/ai-collaboration.png" alt="AIとの協働" style="width: 90%; max-width: 600px; height: auto;">
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
        dateISO: "2025-06-28",
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
                <li>プレゼン資料を急いで作成する必要がある時</li>
                <li>専門的な内容を分かりやすく説明したい時</li>
                <li>複雑な法令や制度について調べたい時</li>
                <li>最新の情報を包括的に収集したい時</li>
            </ul>
            
            <h3>使い方のコツ</h3>
            <ul>
                <li>質問は具体的に、背景情報も含めて伝える</li>
                <li>必要に応じて追加質問で深掘りする</li>
                <li>得られた情報は必ず裏付けを取る</li>
                <li>スライド作成では、目的と対象者を明確にする</li>
            </ul>
            
            <h2>ジェンスパークの優位性</h2>
            <h3>他のAIツールとの違い</h3>
            <p>多くのAIツールを試してきましたが、ジェンスパークには以下の特徴があります：</p>
            <ul>
                <li>回答の正確性が高い（特に専門的な内容）</li>
                <li>情報源を明示してくれる</li>
                <li>スライド作成機能が実用的</li>
                <li>日本語の理解力が優れている</li>
            </ul>
            
            <h3>料金について</h3>
            <p>ジェンスパークは基本的に無料で利用できます。無料でもかなり高度な機能を使えるので、まずは試してみることをお勧めします。</p>
            
            <h2>注意点・留意事項</h2>
            <p>便利なツールですが、以下の点には注意が必要です：</p>
            <ul>
                <li>生成された情報は必ず検証する</li>
                <li>最新情報については別途確認が必要</li>
                <li>専門的な判断は自己責任で行う</li>
                <li>顧客情報などの機密情報は入力しない</li>
            </ul>
            
            <h2>まとめ：業務効率化の強力なパートナー</h2>
            <p>ジェンスパークは、単なる検索ツールを超えた、業務効率化の強力なパートナーです。特にスライド作成機能と専門的な調べものでの精度の高さは、日々の業務で大きな助けになります。</p>
            
            <p>AI活用というと難しく感じるかもしれませんが、ジェンスパークは直感的に使えるツールです。まずは無料で試してみて、その実力を体感してみてください。</p>
            
            <p>社労士として、このようなAIツールを活用することで、より付加価値の高いサービスを提供できるようになります。効率化で生まれた時間を、クライアントとのコミュニケーションや専門性を活かした業務に充てることができるのです。</p>
            
            <p style="text-align: center; margin: 30px 0;">
                <a href="https://www.genspark.ai/" target="_blank" style="display: inline-block; padding: 12px 30px; background: #007bff; color: white; text-decoration: none; border-radius: 5px;">→ ジェンスパークを試してみる</a>
            </p>
        `
    }
];

// HTMLテンプレート
function generateBlogHTML(post) {
    // 画像パスの調整（blogフォルダから見た相対パス）
    const adjustedImage = post.image.replace('./generated-images/', '../generated-images/');
    
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "image": `https://ogata-offices.com${adjustedImage.replace('..', '')}`,
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
    <meta property="og:image" content="https://ogata-offices.com${adjustedImage.replace('..', '')}">
    <meta property="og:site_name" content="尾形社会保険労務士事務所">
    <meta property="article:published_time" content="${post.dateISO}">
    <meta property="article:author" content="尾形雅基">
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${post.title} | 尾形社会保険労務士事務所">
    <meta name="twitter:description" content="${post.excerpt}">
    <meta name="twitter:image" content="https://ogata-offices.com${adjustedImage.replace('..', '')}">
    
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
        // 関連記事の表示（現在の記事と異なるもの）
        const currentId = ${post.id};
        const relatedPosts = ${JSON.stringify(blogPosts.filter(p => p.id !== post.id))};
        const relatedGrid = document.getElementById('relatedArticles');
        
        relatedGrid.innerHTML = relatedPosts.map(p => \`
            <article class="blog-card" onclick="window.location.href='article-\${p.id}.html'">
                <img src="${adjustedImage}" alt="\${p.title}" class="blog-card-image">
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