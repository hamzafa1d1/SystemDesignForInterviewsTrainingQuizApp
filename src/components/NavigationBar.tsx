import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
]

export function NavigationBar() {
  return (
    <nav className="layout-shell flex items-center justify-between py-6">
      <NavLink
        to="/"
        className="group flex items-center gap-4 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-mint/60"
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
            className="relative h-12 w-12 rounded-2xl border border-white/10 object-cover shadow-[0_20px_40px_rgba(8,10,28,0.55)]"
          />
        </div>
        <div>
          <p className="font-display text-xl tracking-tight text-foam">System Design Coach</p>
          <p className="text-sm text-white/60">Micro-quizzes for deep understanding</p>
        </div>
      </NavLink>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-6 text-sm font-medium text-white/70 sm:flex">
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
        
        <a
          href="https://buymeacoffee.com/hamzafaidi"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#FFDD00] to-[#FFC800] px-4 py-2 text-sm font-semibold text-[#1a1a1a] shadow-[0_8px_30px_rgba(255,221,0,0.25)] transition-all duration-300 hover:shadow-[0_8px_40px_rgba(255,221,0,0.4)] hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          <svg className="h-5 w-5 relative z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
            <line x1="6" y1="1" x2="6" y2="4" />
            <line x1="10" y1="1" x2="10" y2="4" />
            <line x1="14" y1="1" x2="14" y2="4" />
          </svg>
          <span className="relative z-10">Support</span>
        </a>
      </div>
    </nav>
  )
}
