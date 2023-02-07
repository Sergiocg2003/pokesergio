import React from "react";
import { Link } from "react-router-dom";
import HeaderLogueado from "./HeaderLogueado";

function Perfil(){

    function cambiarColor(e){
        e.target.style.color = 'blue';
    }

    function original(e){
        e.target.style.color = 'black'
    }

    let usuarioLogueado = localStorage.getItem("usuario")
    let correo = localStorage.getItem("correo")
    return(
        <>
            <HeaderLogueado />
            <main className="PrincipalUsuario">
                <section className="PrincipalUsuario__seccion">
                    <section className="PrincipalUsuario__seccion__grupo">
                    <p className="PrincipalUsuario__seccion__grupo__Campo">Usuario:</p>
                    <p className="PrincipalUsuario__seccion__grupo__Info" onMouseOver={cambiarColor} onMouseLeave={original}>{usuarioLogueado}</p>
                    <p className="PrincipalUsuario__seccion__grupo__Campo">Contraseña:</p>
                    <p className="PrincipalUsuario__seccion__grupo__Info" onMouseOver={cambiarColor} onMouseLeave={original}>********</p>
                    <p className="PrincipalUsuario__seccion__grupo__Campo">Correo:</p>
                    <p className="PrincipalUsuario__seccion__grupo__Info" onMouseOver={cambiarColor} onMouseLeave={original}>{correo}</p>
                    </section>
                    <table className="PrincipalUsuario__seccion__listado">
                    <tr>
                        <td className="PrincipalUsuario__seccion__listado__Campo">Foto:</td>
                    </tr>
                    <tr>
                        <td className="PrincipalUsuario__seccion__listado__Info"><img src={require("../images/perfil.png")}/></td>
                    </tr>
                    </table>
                </section>
                <Link className="PrincipalUsuario__Boton" to={"/"}>Cerrar Sesion</Link>
                <br/>
                <Link className="PrincipalUsuario__Boton" to={"/Modificar"}>Editar Perfil</Link>
                <img className="PrincipalUsuario__Imagen" src={require("../images/Pokeball.png")} />
            </main>
        </>
    );
}

export default Perfil