// import logo from '../logo.svg';
import '../App.css';
import Navbar from "./Navbar.js";
import background from "../img/Nathan_Profile.jpg"
import Lecture from './Lecture.js'
import Home from './Home.js'
import Footer from './Footer.js'
import DataServePortfolio from './DataManagementPortfolio.js';
import MAQWebsitePortfolio from './MAQWebsitePortfolio.js';
import MAQCollateralsPortfolio from './MAQCollateralsPortfolio.js'

import {Nav} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
      <ScrollToTop/>
        <Routes>
          <Route path="lecture" element={<Lecture/>}/>

          <Route path="home" element={<Home/>}/>
          <Route path="/data-serve-portfolio" element={<DataServePortfolio/>}/>
          <Route path="/MAQ-website-portfolio" element={<MAQWebsitePortfolio/>}/>
          <Route path="/MAQ-collaterals-portfolio" element={<MAQCollateralsPortfolio/>}/>
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
