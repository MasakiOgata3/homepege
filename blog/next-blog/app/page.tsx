import Link from 'next/link';

const posts = [
  {
    id: 1,
    title: "AIが変える経営の未来：今すぐ始められる業務革新",
    excerpt: "AI技術の急速な発展により、企業経営のあり方が根本的に変化しています。",
    category: "AI・テクノロジー",
    date: "2025年1月18日",
    image: "/generated-images/ai-business-transformation-wide.png"
  },
  {
    id: 6,
    title: "キレイなスライドも、調べ物も！GenSparkが業務効率化にオススメな理由",
    excerpt: "最新のAI検索エンジンGenSparkの機能と活用方法を詳しく解説します。",
    category: "AI・テクノロジー", 
    date: "2025年1月18日",
    image: "/generated-images/ai-collaboration.png"
  },
  {
    id: 7,
    title: "J.Y. Park（パク・ジニョン）から学ぶ成功の秘訣：創造性とリーダーシップの融合",
    excerpt: "韓国エンターテインメント界の巨匠から学ぶビジネス成功の原則を探ります。",
    category: "ビジネス・経営",
    date: "2025年1月18日", 
    image: "/generated-images/male-success-achievement.png"
  }
];

export default function BlogHome() {
  return (
    <div>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <Link href="/">
              <h2>OGATA OFFICES</h2>
            </Link>
          </div>
          <ul className="nav-menu">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="blog-header">
        <div className="container">
          <h1>Blog</h1>
          <p>ビジネス、テクノロジー、そして人生についての考察</p>
        </div>
      </section>

      {/* Blog List */}
      <section className="blog-list">
        <div className="container">
          <div className="blog-grid">
            {posts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-image" style={{backgroundImage: `url(${post.image})`}}></div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-category">{post.category}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <Link href={`/posts/2025/01/article-${post.id}`} className="blog-card-link">
                    続きを読む →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
