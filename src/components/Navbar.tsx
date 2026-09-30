import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Trang chủ' },
  { to: '/timeline', label: 'Hành trình' },
  { to: '/archive', label: 'Tư liệu' },
  { to: '/flashcards', label: 'Ghi nhớ' },
  { to: '/quiz', label: 'Trắc nghiệm' },
  { to: '/about', label: 'Về dự án' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">H</span>
          <span>
            <strong>Hành Trình Tư Tưởng</strong>
            <small>HCM202 · Học để hiểu</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Điều hướng chính">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
