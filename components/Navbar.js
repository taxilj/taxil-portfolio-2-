'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <a href="/" className="logo">
        it's <span className="underline">me</span>
      </a>

      <button
        className="mobile-menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Open menu"
        aria-expanded={open}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <ul className={`nav-links ${open ? 'open' : ''}`}>
        <li>
          <a href="#experience" onClick={() => setOpen(false)}>
            <div className="nav-link-top">
              Experience <span className="arrow">↗</span>
            </div>
            <div className="nav-link-sub">My professional journey</div>
          </a>
        </li>
        <li>
          <a href="#work" onClick={() => setOpen(false)}>
            <div className="nav-link-top">
              My Projects <span className="arrow">↗</span>
            </div>
            <div className="nav-link-sub">Web, AI &amp; WordPress projects</div>
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            <div className="nav-link-top">
              Contact me <span className="arrow">↗</span>
            </div>
            <div className="nav-link-sub">takshilprajapati2004@gmail.com</div>
          </a>
        </li>
      </ul>
    </nav>
  )
}
