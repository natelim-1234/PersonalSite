import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import FaviconLogo from '../img/favicon.svg';

const NAV_ITEMS = [
  { label: 'Home',     to: '/home' },
  { label: 'Work',     to: '/work' },
  { label: 'About',    to: '/about' },
  { label: 'Teaching', to: '/lecture' },
];

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [dark, setDark]           = useState(
    () => document.documentElement.getAttribute('data-theme') === 'dark'
  );
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    try { localStorage.setItem('nl-theme', dark ? 'dark' : 'light'); } catch (_) {}
  }, [dark]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}>

      {/* Top bar */}
      <div className="nav-inner">
        <Link to="/home" className="nav-brand" onClick={closeMenu}>
          <img src={FaviconLogo} alt="" className="nav-logo" aria-hidden="true" />
          Nathan&nbsp;Limono
        </Link>

        <div className="nav-actions">
          {/* Desktop nav links */}
          <nav className="nav-links">
            {NAV_ITEMS.map(item => (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
            <a href="mailto:natelimono@gmail.com" className="cta">Let's talk</a>
          </nav>

          {/* Theme toggle (always visible) */}
          <button
            className="nav-theme"
            aria-label="Toggle dark mode"
            title="Toggle theme"
            onClick={() => setDark(d => !d)}
          >
            {dark ? <MoonIcon /> : <SunIcon />}
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="nav-hamburger"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(m => !m)}
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu (slides in below the top bar) */}
      <nav
        className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_ITEMS.map(item => (
          <NavLink
            key={item.label}
            to={item.to}
            className={({ isActive }) => `nav-mobile-item${isActive ? ' active' : ''}`}
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        ))}
        <div className="nav-mobile-footer">
          <a href="mailto:natelimono@gmail.com" className="btn solid" onClick={closeMenu}>
            Let's talk
          </a>
        </div>
      </nav>

    </header>
  );
}

export default Navbar;
