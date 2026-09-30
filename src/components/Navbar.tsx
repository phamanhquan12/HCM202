import { useCallback, useEffect, useRef, useState } from 'react'
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
  const headerRef = useRef<HTMLElement>(null)
  const { pathname, hash } = useLocation()
  const close = useCallback(() => {
    setOpen(false)
    headerRef.current?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((menu) => {
      menu.open = false
    })
  }, [])

  useEffect(() => {
    const header = headerRef.current
    const dismissOutside = (event: PointerEvent) => {
      if (!header?.contains(event.target as Node)) close()
    }
    const dismissOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const menu = header?.querySelector<HTMLDetailsElement>('details[open]')
        menu?.querySelector('summary')?.focus()
        close()
      }
    }
    const openOneMenu = (event: Event) => {
      const selected = event.target
      if (!(selected instanceof HTMLDetailsElement) || !selected.open) return
      header?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((menu) => {
        if (menu !== selected) menu.open = false
      })
    }
    document.addEventListener('pointerdown', dismissOutside)
    document.addEventListener('keydown', dismissOnEscape)
    header?.addEventListener('toggle', openOneMenu, true)
    return () => {
      document.removeEventListener('pointerdown', dismissOutside)
      document.removeEventListener('keydown', dismissOnEscape)
      header?.removeEventListener('toggle', openOneMenu, true)
    }
  }, [close])

  useEffect(() => {
    headerRef.current?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((menu) => {
      menu.open = false
    })
  }, [pathname, hash])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="nav-shell">
        <Link className="brand" to="/" onClick={close}>
          <span className="brand-mark" aria-hidden="true">H</span>
          <span><strong>Hành Trình Tư Tưởng</strong><small>HCM202 · Học để hiểu</small></span>
        </Link>

        <button className="menu-toggle" type="button" aria-label={open ? 'Đóng menu' : 'Mở menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => open ? close() : setOpen(true)}><span /><span /><span /></button>

        <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Điều hướng chính">
          <NavLink to="/" end onClick={close}>Trang chủ</NavLink>
          <NavMenu label="Khám phá" active={pathname === '/timeline' || pathname === '/archive'} onNavigate={close} links={[
            { to: '/timeline', label: 'Hành trình lịch sử', description: 'Năm giai đoạn hình thành' },
            { to: '/archive', label: 'Phòng tư liệu', description: 'Ảnh, văn kiện và phim' },
          ]} />
          <NavLink to="/ideas" onClick={close}>Hệ tư tưởng</NavLink>
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
