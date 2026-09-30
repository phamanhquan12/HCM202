import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { AboutPage } from './pages/AboutPage'
import { ArchivePage } from './pages/ArchivePage'
import { FlashcardsPage } from './pages/FlashcardsPage'
import { HomePage } from './pages/HomePage'
import { IdeasPage } from './pages/IdeasPage'
import { QuizPage } from './pages/QuizPage'
import { TimelinePage } from './pages/TimelinePage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const scrollToSection = () => document.getElementById(hash.slice(1))?.scrollIntoView()
      requestAnimationFrame(scrollToSection)
      const timer = window.setTimeout(scrollToSection, 150)
      document.fonts.ready.then(scrollToSection)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}
