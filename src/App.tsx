import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MotionConfig, AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import ScrollProgress from './components/ScrollProgress'
import CursorSparkle from './components/CursorSparkle'
import PageLoader from './components/PageLoader'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {loading && <PageLoader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>
      <BrowserRouter>
        <ScrollProgress />
        <CursorSparkle />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}

export default App
