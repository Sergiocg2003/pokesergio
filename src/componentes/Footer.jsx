import React from 'react';
import '../hojas-de-estilo/main.scss';

// Funcion para realizar el footer de mi web
function Footer(){
    return(
        <footer className="piePagina">
        <ul>
          <li><span className="fa-brands fa-square-facebook"></span></li>
          <li><span className="fa-brands fa-instagram"></span></li>
          <li><span className="fa-brands fa-square-twitter"></span></li>
        </ul>
        <img src={require("../images/logo.png")}/>
        <ul>
          <li>Aviso Legal</li>
          <li>Politica de cookies</li>
        </ul>
      </footer>
    );
}

export default Footer;