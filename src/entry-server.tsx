import ReactDOMServer from 'react-dom/server'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { ChapterPage } from './pages/ChapterPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

const routes = [
  {
    path: '/',
    element: <AppLayout><HomePage /></AppLayout>,
  },
  {
    path: '/chapter',
    element: <AppLayout><ChapterPage /></AppLayout>,
  },
  {
    path: '/chapter/:chapterId',
    element: <AppLayout><ChapterPage /></AppLayout>,
  },
  {
    path: '/about',
    element: <AppLayout><AboutPage /></AppLayout>,
  },
  {
    path: '*',
    element: <AppLayout><NotFoundPage /></AppLayout>,
  },
]

export function render(url: string) {
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
    initialIndex: 0,
  })

  const html = ReactDOMServer.renderToString(
    <RouterProvider router={router} />,
  )
  
  return [html, '']
}
