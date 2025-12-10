import { type ReactNode } from 'react'

interface PageShellProps {
  title?: string
  description?: string
  children: ReactNode
}

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <section className="glass-panel w-full py-10 px-6 sm:px-10">
      {(title || description) && (
        <header className="mb-8 space-y-2">
          {title && <p className="text-sm uppercase tracking-[0.3em] text-white/60">{title}</p>}
          {description && <p className="text-lg text-white/70 max-w-3xl">{description}</p>}
        </header>
      )}
      {children}
    </section>
  )
}
