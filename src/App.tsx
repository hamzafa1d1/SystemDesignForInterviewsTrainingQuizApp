import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/AppLayout'
import { AboutPage } from './pages/AboutPage'
import { ChapterPage } from './pages/ChapterPage'
import { DashboardPage } from './pages/DashboardPage'
import { LandingPage } from './pages/LandingPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ResultsPage } from './pages/ResultsPage'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/SystemDesignForInterviewsTrainingQuizApp" element={<LandingPage />} />
          <Route path="/SystemDesignForInterviewsTrainingQuizApp/chapter" element={<ChapterPage />} />
          <Route path="/SystemDesignForInterviewsTrainingQuizApp/chapter/:chapterId" element={<ChapterPage />} />
          <Route path="/SystemDesignForInterviewsTrainingQuizApp/results" element={<ResultsPage />} />
          <Route path="/SystemDesignForInterviewsTrainingQuizApp/dashboard" element={<DashboardPage />} />
          <Route path="/SystemDesignForInterviewsTrainingQuizApp/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
