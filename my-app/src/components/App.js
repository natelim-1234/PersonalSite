import '../App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import WorkPage from './WorkPage.js';
import AboutPage from './AboutPage.js';
import Footer from './Footer.js';
import Lecture from './Lecture.js';
import StyleGuide from './StyleGuide.js';
import EventRecommender from './EventRecommender.js';
import MicrosoftBuildDiscover from './MicrosoftBuildDiscover.js';
import DataServePortfolio from './DataManagementPortfolio.js';
import MAQWebsitePortfolio from './MAQWebsitePortfolio.js';
import MAQCollateralsPortfolio from './MAQCollateralsPortfolio.js';
import ScrollToTop from './ScrollToTop.js';

import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="home"                       element={<Home />} />
        <Route path="work"                       element={<WorkPage />} />
        <Route path="about"                      element={<AboutPage />} />
        <Route path="style"                      element={<StyleGuide />} />
        <Route path="portfolio"                  element={<Navigate to="/home" replace />} />
        <Route path="lecture"                    element={<Lecture />} />
        <Route path="/event-recommender"         element={<EventRecommender />} />
        <Route path="/microsoft-build-discover"  element={<MicrosoftBuildDiscover />} />
        <Route path="/data-serve-portfolio"      element={<DataServePortfolio />} />
        <Route path="/MAQ-website-portfolio"     element={<MAQWebsitePortfolio />} />
        <Route path="/MAQ-collaterals-portfolio" element={<MAQCollateralsPortfolio />} />
        <Route path="*"                          element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
