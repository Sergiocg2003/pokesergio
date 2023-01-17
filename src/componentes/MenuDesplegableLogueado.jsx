import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/main.scss';

function MenuDesplegableLogueado(){
    let usuarioLogueado = localStorage.getItem("usuario")
    return(
        <div className="menuDesplegable">
            <Link className="menuDesplegable__opcion" to={"/ListaLogueado"}>Listado</Link>
            <Link className="menuDesplegable__opcion" to={"/ContactoLogueado"}>Contacto</Link>
            <Link className="menuDesplegable__opcion" to={"/Perfil"}>{usuarioLogueado}</Link>
            <Link className="menuDesplegable__opcion1" to={"/Perfil"}><img src={require("../images/perfil.png")}/></Link>
        </div>
    );
}

export default MenuDesplegableLogueado;