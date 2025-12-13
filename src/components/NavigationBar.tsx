import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

const links = [
  { to: '/', label: 'Landing' },
  { to: '/results', label: 'Results' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/about', label: 'About' },
]

export function NavigationBar() {
  return (
    <nav className="layout-shell flex items-center justify-between py-6">
      <div className="group flex items-center gap-4">
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
      </div>
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
    </nav>
  )
}
