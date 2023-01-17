import React, { useState } from 'react';
import '../hojas-de-estilo/main.scss';
import { Link } from 'react-router-dom';
import menuDesplegable from './MenuDesplegable'

function HeaderBasico(){
  
  const [aparece, setAparece] = useState(false)

  function apareceMenu(){

  }
  
    return(
      <header className="main">
        <div className="main__logos">
          <Link to={"/"}><img src={require("../images/Pokeball.png")}/></Link>
          <Link to={"/"}><img className="nombre" src={require("../images/logo.png")} /></Link>
        </div>
        <ul className="main__navegacion">
          <li className="main__navegacion__opcion"><Link to={"/Lista"}>Listado</Link></li>
          <li className="main__navegacion__opcion"><Link to={"/Contacto"}>Contacto</Link></li>
          <li className="main__navegacion__opcion"><Link to={"/Login"}>Log in</Link></li>
        </ul>
        <img src={require("../images/menu.png")} className="menu" id="botonHamburguesa" onClick={apareceMenu()}/>
        
      </header>
    );
}

export default HeaderBasico;