import { BrowserRouter } from 'react-router-dom';
import './index.css'
import './App.css';
import NavBar from './components/Nav/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
    </BrowserRouter>
  )
}

export default App;
