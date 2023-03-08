import React, {useState} from 'react';
import '../hojas-de-estilo/main.scss';
import HeaderLogueado from './HeaderLogueado';
import { Link } from 'react-router-dom';

function Logueado(){

    const [valor, setValor] = useState('');

    //Funcion para ir actualizando lo que escribimos en el input
    function handleChange(event){
        setValor(event.target.value)
    }

    return(
        <div>
            <HeaderLogueado />
            <main className="Principal">
                <h1 className="Principal__Titulo">Encuentra tu Pokemon</h1>
                <ul className="Principal__Buscador">
                    <li><input type="text" name='nombre' placeholder='Nombre de un pokemon' onChange={handleChange}/></li>
                    <li><Link to={"/CartaLogueado"} state={{valor}}><img src={require("../images/lupa.png")}/></Link></li>
                </ul>
                
                <img className="Principal__Imagen" src={require("../images/Pokeball.png")} />
            
            </main>
        </div>
        
    );
}

export default Logueado;