import React, { useState } from "react";
import HeaderLogin from './HeaderLogin';
import '../hojas-de-estilo/main.scss';
import { Link, useNavigate } from "react-router-dom";

function Login(){

    const navegar = useNavigate();

    const [valores, setValores] = useState({
        usuario: "",
        contraseña: "",
        errorUsuario: false,
        errorContraseña: false
    });

    //Funcion para enviar el formulario y comprobar que no haya errores
    function handleSubmit(event){
        
        event.preventDefault();

        if(!valores.errorUsuario){
            const usuarioLogueado = valores.usuario;
            localStorage.setItem("usuario", usuarioLogueado)
            if(!valores.errorContraseña){
                alert(`Bienvenido ${valores.usuario}`);
                navegar("/Logueado");
            }
            else{
                alert("Tu contraseña no cumple los requisitos de longitud (min 8 y max 15 caracteres) o no contiene todos los caracteres necesarios. Caracteres validos: (1 letra minuscula, 1 letra mayuscula, 1 numero y un caracter especial)");
            }
        }
        else{
            alert("Tu usuario no cumple los requisitos de longitud (min 3 y max 12 caracteres)");
        }
    }

    //Funcion para ir actualizando lo que escribimos en el input
    function handleChange(event){
        // console.log(event.target.name);
        // console.log(event.target.value);

        setValores({...valores, [event.target.name] : event.target.value})
    }

    //Funcion para comprobar que el usuario cumpla los requisitos
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

    //Funcion para comprobar que la contraseña cumpla los requisitos
    function handleFalloContraseña(){
        let contraseñaValida = false;
        const expReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$^&*()_-]).{8,18}$/

        console.log(valores.contraseña)
        if(expReg.test(valores.contraseña)){
            contraseñaValida = true;
        }
        
        const errorContraseña = !contraseñaValida;
        setValores((prevState) => ({...prevState, errorContraseña}));
    }


    return(
        <>
            <HeaderLogin />
            <main className="registroycontacto">
                <form className="registroycontacto__formulario" onSubmit={handleSubmit}>
                    <p className="registroycontacto__formulario__texto">Usuario:</p>
                    <input className="registroycontacto__formulario__rellenable" type="text" name="usuario" placeholder="Usuario min 3 caracteres" onChange={handleChange} onBlur={handleFalloUsuario} required/>
                    <p className="registroycontacto__formulario__texto">Contraseña:</p>
                    <input className="registroycontacto__formulario__rellenable" type="password" name="contraseña" placeholder="Contraseña min 8 caracteres" onChange={handleChange} onBlur={handleFalloContraseña} required/>
                    <button type="submit" className="registroycontacto__formulario__boton">Iniciar Sesión</button>
                </form>

                <p className="registroycontacto__opcion">Si todavía no tienes cuenta, <Link to={"/Registro"}>Registrate</Link></p>

                <img className="registroycontacto__Imagen" src={require("../images/Pokeball.png")} />
            </main>
        </>
    );
}

export default Login