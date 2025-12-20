import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { ChapterPage } from './pages/ChapterPage'
import { HomePage } from './pages/HomePage'
import { SystemDesignPage } from './pages/SystemDesignPage'
import { TerraformPage } from './pages/TerraformPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/system-design" element={<SystemDesignPage />} />
          <Route path="/terraform" element={<TerraformPage />} />
          <Route path="/chapter" element={<ChapterPage />} />
          <Route path="/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
