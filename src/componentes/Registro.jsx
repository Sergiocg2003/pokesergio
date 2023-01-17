import React, { useState } from "react";
import HeaderLogin from './HeaderLogin';
import '../hojas-de-estilo/main.scss';
import { Link,useNavigate } from "react-router-dom";

function Registro(){

    const navegar = useNavigate();

    const [valores, setValores] = useState({
        correo: "",
        usuario: "",
        contraseña: "",
        errorCorreo: false,
        errorUsuario: false,
        errorContraseña: false
    });

    function handleSubmit(event){
        
        event.preventDefault();
        if(!valores.errorCorreo){
            const correo = valores.correo;
            localStorage.setItem("correo", correo)
            if(!valores.errorUsuario){
                const usuarioLogueado = valores.usuario;
                localStorage.setItem("usuario", usuarioLogueado)
                if(!valores.errorContraseña){
                    alert(`Bienvenido ${valores.usuario}`);
                    navegar("/Logueado");
                }
                else{
                    alert("Tu contraseña no cumple los requisitos de longitud (min 8 y max 15 caracteres) o contiene caracteres que no son validos. Caracteres validos: (letras y numeros).");
                }
            }
            else{
                alert("Tu usuario no cumple los requisitos de longitud (min 3 y max 12 caracteres).");
            }
        }
        else{
            alert("No tienes un correo valido.")
        }
    }

    function handleChange(event){
        // console.log(event.target.name);
        // console.log(event.target.value);

        setValores({...valores, [event.target.name] : event.target.value})
    }

    function handleFalloCorreo(){
        let correoValido = false;
        const expReg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/g

        //console.log(valores.correo)

        if(expReg.test(valores.correo)){
            correoValido = true;
        }
        
        const errorCorreo = !correoValido;
        setValores((prevState) => ({...prevState, errorCorreo}));
    }

    function handleFalloUsuario(){
        let usuarioValido = false;
        const expReg = /^[A-Za-z0-9]{3,12}$/g

        //console.log(valores.usuario)

        if(expReg.test(valores.usuario)){
            usuarioValido = true;
        }
        
        const errorUsuario = !usuarioValido;
        setValores((prevState) => ({...prevState, errorUsuario}));
    }

    function handleFalloContraseña(){
        let contraseñaValida = false;
        const expReg = /^[A-Za-z0-9]{8,15}$/g

        //console.log(valores.contraseña)

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
                    <p className="registroycontacto__formulario__texto">Correo:</p>
                    <input className="registroycontacto__formulario__rellenable" type="email" name="correo" placeholder="Correo" onChange={handleChange} onBlur={handleFalloCorreo} required/>
                    <p className="registroycontacto__formulario__texto">Usuario:</p>
                    <input className="registroycontacto__formulario__rellenable" type="text" name="usuario" placeholder="Usuario min 3 caracteres" onChange={handleChange} onBlur={handleFalloUsuario} required/>
                    <p className="registroycontacto__formulario__texto">Contraseña:</p>
                    <input className="registroycontacto__formulario__rellenable" type="password" name="contraseña" placeholder="Contraseña min 8 caracteres" onChange={handleChange} onBlur={handleFalloContraseña} required/>
                    <button type="submit" className="registroycontacto__formulario__boton">Enviar</button>
                </form>

                <p className="registroycontacto__opcion">Si ya tienes una cuenta,<Link to={"/Login"}> Inicia Sesión</Link></p>

                <img className="registroycontacto__Imagen" src={require("../images/Pokeball.png")} />
            </main>
        </>
    );
}

export default Registro