import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router';
// import Home from './Home';
import Home from './home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      
      <ul className='navbar'>
        <li className='home'></li>
        <li className='about'><Link to={"/about"}>About</Link></li>
        <li className='services'></li>
        <li className='products'></li>
      </ul>

      <div className="pages">
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
