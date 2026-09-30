import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

type NavMenuProps = {
  label: string
  active: boolean
  onNavigate: () => void
  links: { to: string; label: string; description: string }[]
}

function NavMenu({ label, active, links, onNavigate }: NavMenuProps) {
  return (
    <details className={active ? 'nav-menu active' : 'nav-menu'}>
      <summary>{label}<span aria-hidden="true">⌄</span></summary>
      <div>
        {links.map((link) => <Link to={link.to} key={link.to} onClick={onNavigate}><strong>{link.label}</strong><small>{link.description}</small></Link>)}
      </div>
    </details>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" to="/" onClick={close}>
          <span className="brand-mark" aria-hidden="true">H</span>
          <span><strong>Hành Trình Tư Tưởng</strong><small>HCM202 · Học để hiểu</small></span>
        </Link>

        <button className="menu-toggle" type="button" aria-label={open ? 'Đóng menu' : 'Mở menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen((value) => !value)}><span /><span /><span /></button>

        <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Điều hướng chính">
          <NavLink to="/" end onClick={close}>Trang chủ</NavLink>
          <NavMenu label="Khám phá" active={pathname === '/timeline' || pathname === '/archive'} onNavigate={close} links={[
            { to: '/timeline', label: 'Hành trình lịch sử', description: 'Năm giai đoạn hình thành' },
            { to: '/archive', label: 'Phòng tư liệu', description: 'Ảnh, văn kiện và phim' },
          ]} />
          <NavLink to="/ideas" onClick={close}>Hệ tư tưởng</NavLink>
          <NavMenu label="Chuyên đề" active={pathname === '/ideas' && Boolean(hash)} onNavigate={close} links={[
            { to: '/ideas#giac-noi-xam', label: '“Giặc ở bên trong”', description: 'Tham ô, lãng phí, quan liêu' },
            { to: '/ideas#ban-do-tong-ket', label: 'Bản đồ tư tưởng', description: 'Kết nối toàn bộ khái niệm' },
          ]} />
          <NavMenu label="Học tập" active={pathname === '/flashcards' || pathname === '/quiz'} onNavigate={close} links={[
            { to: '/flashcards', label: 'Flashcards', description: '72 thẻ ghi nhớ' },
            { to: '/quiz', label: 'Trắc nghiệm', description: '150 câu có giải thích' },
          ]} />
          <NavLink to="/about" onClick={close}>Về dự án</NavLink>
        </nav>
      </div>
    </header>
  )
}
