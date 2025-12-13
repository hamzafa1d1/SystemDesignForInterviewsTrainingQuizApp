import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

export function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="layout-shell py-6">
      <div className="flex items-center justify-between">
        <NavLink
          to="/"
          className="group flex items-center gap-2 sm:gap-4 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-mint/60"
          aria-label="Go to home"
        >
          <div className="relative">
            <span
              className="absolute inset-0 rounded-2xl bg-mint/40 opacity-70 blur-lg transition duration-300 group-hover:opacity-100"
              aria-hidden="true"
            />
            <img
              src={logo}
              alt="System Design Coach logo"
              className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-2xl border border-white/10 object-cover shadow-[0_20px_40px_rgba(8,10,28,0.55)]"
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-xl tracking-tight text-foam">System Design Coach</p>
            <p className="text-sm text-white/60">Micro-quizzes for deep understanding</p>
          </div>
          <div className="sm:hidden">
            <p className="font-display text-base tracking-tight text-foam">System Design</p>
          </div>
        </NavLink>

        <div className="flex items-center gap-3 sm:gap-4">
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-white/70">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors duration-200 ${isActive ? 'text-mint' : 'hover:text-foam'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          
          {/* Support button - visible on all screens */}
          <a
            href="https://buymeacoffee.com/hamzafaidi"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-1.5 sm:gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FFDD00] to-[#FFC800] px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#1a1a1a] shadow-[0_8px_30px_rgba(255,221,0,0.25)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,221,0,0.4)] hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <svg className="h-4 w-4 sm:h-5 sm:w-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
              <line x1="6" y1="1" x2="6" y2="4" />
              <line x1="10" y1="1" x2="10" y2="4" />
              <line x1="14" y1="1" x2="14" y2="4" />
            </svg>
            <span className="relative z-10 hidden xs:inline">Support</span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white/70 hover:text-mint hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mint/60"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive 
                      ? 'text-mint bg-mint/10' 
                      : 'text-white/70 hover:text-foam hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
