import React from 'react';
import { Link } from 'react-router-dom';
import '../hojas-de-estilo/main.scss';

function MenuDesplegable(){
    return(
        <div className={`menuDesplegable`}>
            <Link className="menuDesplegable__opcion" to={"404.html"}>Pagina 404</Link>
            <Link className="menuDesplegable__opcion" to={"/Lista"}>Listado</Link>
            <Link className="menuDesplegable__opcion" to={"/Contacto"}>Contacto</Link>
            <Link className="menuDesplegable__opcion" to={"/Login"}>Login</Link>
        </div>
    );
}

export default MenuDesplegable;