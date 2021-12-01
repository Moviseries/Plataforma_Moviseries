import './App.css';
import NavBar from './components/NavBar';
import Carousell from './components/Carousell';
import Estrenos  from './components/Estrenos';
import Movie from './services/service_movie';
import Serie from './services/service_serie';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Carousell/>
      <hr />
      <Estrenos />
      <Movie />
      <Serie />
    </div>
  );
}

export default App;
