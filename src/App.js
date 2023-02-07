import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer';
import Principal from './componentes/Principal';
import Lista from './componentes/Lista';
import Login from './componentes/Login';
import Registro from './componentes/Registro';
import Logueado from './componentes/Logueado';
import Carta from './componentes/Carta';
import Contacto from './componentes/Contacto';
import CartaLogueado from './componentes/CartaLogueado';
import ContactoLogueado from './componentes/ContactoLogueado';
import Perfil from './componentes/Perfil';
import ListaLogueado from './componentes/ListaLogueado';
import Modificar from './componentes/Modificar';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Principal />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Registro' element={<Registro />} />
        <Route path='/Lista' element={<Lista />} />
        <Route path='/Carta/' element={<Carta />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='/Logueado' element={<Logueado />} />
        <Route path='/CartaLogueado' element={<CartaLogueado />} />
        <Route path='/ListaLogueado' element={<ListaLogueado />} />
        <Route path='/ContactoLogueado' element={<ContactoLogueado />} />
        <Route path='/Perfil' element={<Perfil />} />
        <Route path='/Modificar' element={<Modificar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
