import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/main.scss';

function HeaderLogueado(){
  let usuarioLogueado = localStorage.getItem("usuario")
    return(
        <header className="mainRegistrado">
        <div className="mainRegistrado__logos">
          <Link to={"/Logueado"}><img src={require("../images/Pokeball.png")}/></Link>
          <Link to={"/Logueado"}><img className="nombre" src={require("../images/logo.png")} /></Link>
        </div>
        <ul className="mainRegistrado__navegacion">
          <li className="mainRegistrado__navegacion__opcion"><Link to={"/ListaLogueado"}>Listado</Link></li>
          <li className="mainRegistrado__navegacion__opcion"><Link to={"/ContactoLogueado"}>Contacto</Link></li>
          <li className="mainRegistrado__navegacion__opcion"><Link to={"/Perfil"}>{usuarioLogueado}</Link></li>
          <li className="mainRegistrado__navegacion__opcion1"><Link to={"/Perfil"}><img src={require("../images/perfil.png")}/></Link></li>
        </ul>
        <img src={require("../images/menu.png")} className="menu" id="botonHamburguesa"/>
      </header>
    );
}

export default HeaderLogueado;