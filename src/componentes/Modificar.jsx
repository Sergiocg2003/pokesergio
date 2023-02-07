import React, {useState} from "react";
import HeaderLogueado from "./HeaderLogueado";
import { useNavigate } from "react-router-dom";


function Modificar(){

    const navegar = useNavigate();

    const [valores, setValores] = useState({
        usuario: "",
        errorUsuario: false
    });

    function handleSubmit(event){
        
        event.preventDefault();

        if(!valores.errorUsuario){
            const usuarioLogueado = valores.usuario;
            localStorage.setItem("usuario", usuarioLogueado)
            navegar("/Perfil");
        }
        else{
            alert("Tu nuevo usuario no cumple los requisitos de longitud (min 3 y max 12 caracteres)");
        }
    }

    function handleChange(event){
        // console.log(event.target.name);
        // console.log(event.target.value);

        setValores({...valores, [event.target.name] : event.target.value})
    }

    function handleFalloUsuario(){
        let usuarioValido = false;
        const expReg = /^[A-Za-z0-9]{3,12}$/g

        console.log(valores.usuario)

        if(expReg.test(valores.usuario)){
            usuarioValido = true;
        }
        
        const errorUsuario = !usuarioValido;
        setValores((prevState) => ({...prevState, errorUsuario}));
    }

    return(
        <>
            <HeaderLogueado/>
            <main className="registroycontacto">
                <form className="registroycontacto__formulario" onSubmit={handleSubmit}>
                    <p className="registroycontacto__formulario__texto">Usuario:</p>
                    <input className="registroycontacto__formulario__rellenable" type="text" name="usuario" placeholder="Usuario min 3 caracteres" onChange={handleChange} onBlur={handleFalloUsuario} required/>
                    <button type="submit" className="registroycontacto__formulario__boton">Iniciar Sesión</button>
                </form>
                <img className="registroycontacto__Imagen" src={require("../images/Pokeball.png")} />
            </main>
        </>
    );
}

export default Modificar