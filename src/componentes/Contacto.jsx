import React, { useState } from "react";
import HeaderBasico from './HeaderBasico';
import '../hojas-de-estilo/main.scss';
import { Link,useNavigate } from "react-router-dom";

function Contacto(){

    const navegar = useNavigate();

    const [valores, setValores] = useState({
        correo: "",
        telefono: "",
        usuario: "",
        errorCorreo: false,
        errorTelefono: false,
        errorUsuario: false
    });

    function handleSubmit(event){
        
        event.preventDefault();
        if(!valores.errorCorreo){
            if(!valores.errorUsuario){
                if(!valores.errorTelefono){
                    alert(`Gracias por su feedback ${valores.usuario}`);
                    navegar("/");
                }
                else{
                    alert("Tu numero de telefono no es valido");
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

    function handleFalloTelefono(){
        let telefonoValido = false;
        const expReg = /^[0-9]{9}$/g

        if(expReg.test(valores.telefono)){
            telefonoValido = true;
        }
        
        const errorTelefono = !telefonoValido;
        setValores((prevState) => ({...prevState, errorTelefono}));
    }

    return(
        <>
        <HeaderBasico />
            <main className="registroycontacto">
                <form className="registroycontacto__formulario" onSubmit={handleSubmit}>
                    <p className="registroycontacto__formulario__texto">Correo:</p>
                    <input className="registroycontacto__formulario__rellenable" type="email" name="correo" placeholder="Correo" onChange={handleChange} onBlur={handleFalloCorreo} required/>
                    <p className="registroycontacto__formulario__texto">Usuario:</p>
                    <input className="registroycontacto__formulario__rellenable" type="text" name="usuario" placeholder="Usuario min 3 caracteres" onChange={handleChange} onBlur={handleFalloUsuario} required/>
                    <p className="registroycontacto__formulario__texto">Numero de Telefono:</p>
                    <input className="registroycontacto__formulario__rellenable" type="tel" name="telefono" placeholder="XXXXXXXXX" onChange={handleChange} onBlur={handleFalloTelefono} required/>
                    <p className="registroycontacto__formulario__texto">Descripcion:</p>
                    <textarea className="registroycontacto__formulario__explicacion" required/>
                    <button type="submit" className="registroycontacto__formulario__boton">Enviar</button>
                </form>

                <img className="registroycontacto__Imagen" src={require("../images/Pokeball.png")} />
            </main>
        </>
    );
}

export default Contacto