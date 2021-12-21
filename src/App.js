import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Inicio from './components/Paginas/Inicio'
import Productos from './components/Paginas/Productos';
import Servicios from './components/Paginas/Servicios';
import Noticias from './components/Paginas/Noticias';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      </Router>
        
      
    </div>
  );
}

export default App;
