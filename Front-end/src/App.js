import './App.css';
import NavBar from './components/NavBar';
import Estrenos  from './components/pages/Estrenos';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Movies from './components/pages/Movies';
import Series from './components/pages/Series'
import Gender from './components/pages/Genders'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Estrenos/>}/>
          <Route exact path="/Movies" element={<Movies/>}/>
          <Route exact path="/Series" element={<Series/>}/>
          <Route exact path="/Gender" element={<Gender/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
        </Routes>

      </Router>
      <hr />
    </div>
  );
}

export default App;
