import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
// import Navbar from './Pages/navbar';

import Error from './Pages/Error';
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/About">About </Link>
        <Link to="/Profile">Profile </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      
      </Routes>

      <footer>THIS IS FOOTER</footer>
    </Router>



  );
}

export default App;


// !Router is used to encompass all the different componenets in applications.
// !Routes is used to where you want to go in your router system.
