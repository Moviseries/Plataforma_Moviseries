import './App.css';
import NavBar from './components/NavBar';
import Estrenos  from './components/pages/Estrenos';
import Login from './services/service_getUser';
import Register from './components/pages/Register';
import Movies from './components/pages/Movies';
import Series from './components/pages/Series'
import Gender from './components/pages/Genders'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Administrar from './components/pages/Administrar'

function App() {

  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route exact path="/Administrar/:id" element={<Administrar/>}/>
          <Route exact path="/Home" element={<Estrenos/>}/>
          <Route exact path="/Home/:id" element={<Estrenos/>}/>
          <Route exact path="/" element={<Estrenos/>}/>
          <Route exact path="/Movies" element={<Movies/>}/>
          <Route exact path="/Series" element={<Series/>}/>
          <Route exact path="/Genders/:id/:name" element={<Gender/>}/>
          <Route exact path="/Login" element={<Login login={login}/>}/>
          <Route exact path="/Register" element={<Register/>}/>
        </Routes>

      </Router>
      <hr />
    </div>
  );
}

export default App;
