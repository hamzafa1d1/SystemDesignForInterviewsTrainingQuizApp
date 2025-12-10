import { type ReactNode } from 'react'
import { NavigationBar } from './NavigationBar'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen text-foam">
      <NavigationBar />
      <main className="layout-shell space-y-10 pb-16">{children}</main>
    </div>
  )
}
