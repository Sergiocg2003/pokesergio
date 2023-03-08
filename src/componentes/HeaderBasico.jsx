import React, { useState } from 'react';
import '../hojas-de-estilo/main.scss';
import { Link } from 'react-router-dom';
import menuDesplegable from './MenuDesplegable'

function HeaderBasico(){
  
  const [aparece, setAparece] = useState(false)
  const [isActive, setActive] = useState(false);

  function apareceMenu(){

  }

  // Funcion para hacer el movimiento de la pokeball
  const handleToogle = () => {
    setActive(!isActive);
  }

  // Declarar cuando se hace el movimiento de la pokeball
  const moverPokeball = setTimeout(handleToogle, 5000);

  if(isActive){
    clearTimeout(moverPokeball);
  }
  
    return(
      <header className="main">
        <div className="main__logos">
          <Link to={"/"}><img src={require("../images/Pokeball.png")} className={isActive ? "main__logos__pokeball" : "main__logos__lado"}/></Link>
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