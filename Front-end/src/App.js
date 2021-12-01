import './App.css';
import NavBar from './components/NavBar';
import Carousell from './components/Carousell';
import Estrenos  from './components/Estrenos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Carousell/>
      <Estrenos />
    </div>
  );
}

export default App;
