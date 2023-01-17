import React from 'react';
import '../hojas-de-estilo/main.scss';
import { Link } from 'react-router-dom';

function HeaderLogin(){
    return(
      <header className="main">
        <div className="main__logos">
          <Link to={"/"}><img src={require("../images/Pokeball.png")}/></Link>
          <Link to={"/"}><img className="nombre" src={require("../images/logo.png")} /></Link>
        </div>
      </header>
    );
}

export default HeaderLogin;