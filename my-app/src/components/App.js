// import logo from '../logo.svg';
import '../App.css';
import Navbar from "./Navbar.js";
import background from "../img/Nathan_Profile.jpg"
import Lecture from './Lecture.js'
import Home from './Home.js'

import {Nav} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>
          <Route path="lecture" element={<Lecture/>}/>

          <Route path="home" element={<Home/>}/>
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
      </div>
      <footer>My information</footer>
    </div>
  );
}

export default App;
