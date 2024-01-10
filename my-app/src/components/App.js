import logo from '../logo.svg';
import '../App.css';
import Navbar from "./Navbar.js";
import background from "../img/Nathan_Profile.jpg"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='Home-bg' alt='picture by Thom Milkovic'>
        <div className='Profile-container'>
          <div className='Introduction'>
            <div className='Introduction-bg'></div>
            <h1 className='Introduction-header'>Aspiring Data Scientist</h1>
            <p className='Introduction-text'>I'm a recent graduate of UW looking for job opportunities
            dfsfadsafdsafd sfafdsafdsafdsafdsafsa dfsdafsdafsdafdsafdsaf
            afdsafdsafdsafsdafs dafsdafdsafdsafdsaf dsafdsafsad</p>
          </div>
        </div>
        <header className="App-header">
          {
          <img className="Profile-pic" src={background}></img>
          /* <p>Hello</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
      <div className='Home-section-bg'>
        <h1>text</h1>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
        <p>text</p>
      </div>
      <footer>My information</footer>
    </div>
  );
}

export default App;
