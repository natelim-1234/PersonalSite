import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import MicrosoftBuildDiscover from './pages/case-studies/microsoft-build-discover.jsx'
import EventRecommender from './pages/case-studies/event-recommender.jsx'
import MAQCollateralsPortfolio from './pages/case-studies/maq-collaterals-portfolio.jsx'
import Nav from './components/nav/nav.jsx'
import Footer from './components/footer/footer.jsx'
import ScrollToTop from './components/scroll-to-top/ScrollToTop.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies/microsoft-build-discover" element={<MicrosoftBuildDiscover/>}/>
        <Route path="/event-recommender" element={<EventRecommender/>}/>
        <Route path="/MAQ-collaterals-portfolio" element={<MAQCollateralsPortfolio/>}/>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
