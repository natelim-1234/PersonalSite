import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
import favicon from '../../../public/img/favicon.svg'
import resumePdf from '../../../public/img/Nathan_Limono_Resume_UX_2026.pdf'

const NAV_ITEMS = [
  { label: 'Home', to: '/home' },
  { label: 'Resume', href: resumePdf },
  { label: 'About', to: '/about' },
]

function HamburgerIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}
    >
      <div className="nav-inner">
        <NavLink to="/home" className="nav-brand" onClick={closeMenu}>
          <img className="nav-logo" src={favicon} alt="" aria-hidden="true" />
          Nathan&nbsp;Limono
        </NavLink>

        <div className="nav-actions">
          <nav className="nav-links" aria-label="Primary">
            {NAV_ITEMS.map((item) =>
              item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </nav>

          <button
            type="button"
            className="nav-hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <nav
        className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
        aria-label="Primary mobile"
      >
        {NAV_ITEMS.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-item"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ) : (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                `nav-mobile-item${isActive ? ' active' : ''}`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          )
        )}
        <div className="nav-mobile-footer">
          {/* <a
            href="mailto:natelimono@gmail.com"
            className="btn solid"
            onClick={closeMenu}
          >
            Let's talk
          </a> */}
        </div>
      </nav>
    </header>
  )
}

export default Nav
