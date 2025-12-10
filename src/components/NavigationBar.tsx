import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Landing' },
  { to: '/chapter', label: 'Chapter' },
  { to: '/results', label: 'Results' },
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/about', label: 'About' },
]

export function NavigationBar() {
  return (
    <nav className="layout-shell flex items-center justify-between py-6">
      <div>
        <p className="font-display text-xl tracking-tight text-foam">System Design Coach</p>
        <p className="text-sm text-white/60">Micro-quizzes for deep understanding</p>
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
