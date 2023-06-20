import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import './App.css';
import NavBar from './components/Nav/NavBar/NavBar';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Eventos from './pages/Eventos';
import Contenido from './pages/Contenido';
import Servicios from './pages/Servicios';
import Faq from './pages/Faq';
import Contacto from './pages/Contacto';
import Socios from './pages/Socios';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/eventos' element={<Eventos />}/>
        <Route path='/contenido' element={<Contenido />}/>
        <Route path='/servicios' element={<Servicios />}/>
        <Route path='/faq' element={<Faq />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/socios' element={<Socios />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
