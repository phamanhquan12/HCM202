import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-shell">
        <div>
          <Link className="footer-brand" to="/">Hành Trình Tư Tưởng</Link>
          <p>Sản phẩm học tập HCM202.</p>
        </div>
        <p className="footer-source">
          Nguồn nội dung: Giáo trình Tư tưởng Hồ Chí Minh,<br />
          NXB Chính trị quốc gia Sự thật, 2021.
        </p>
      </div>
    </footer>
  )
}
