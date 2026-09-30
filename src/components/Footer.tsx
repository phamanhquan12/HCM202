import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div className="footer-intro">
          <Link className="footer-brand" to="/">Hành Trình Tư Tưởng</Link>
          <p>HCM202 · Tư tưởng Hồ Chí Minh</p>
        </div>
        <nav aria-label="Khám phá"><strong>Khám phá</strong><Link to="/timeline">Hành trình</Link><Link to="/archive">Tư liệu</Link><Link to="/quiz">Trắc nghiệm</Link></nav>
        <nav aria-label="Học tập"><strong>Học tập</strong><Link to="/flashcards">Flashcards</Link><Link to="/about">Về dự án</Link></nav>
        <div className="footer-source"><strong>Học thuật</strong><p>Giáo trình Tư tưởng Hồ Chí Minh,<br />NXB Chính trị quốc gia Sự thật, 2021.</p></div>
      </div>
      <div className="footer-bottom section-shell"><span>Sản phẩm học tập môn HCM202</span><span>FPT University · 2026</span></div>
    </footer>
  )
}
