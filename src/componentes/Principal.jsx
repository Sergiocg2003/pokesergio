import React, {useState} from 'react';
import '../hojas-de-estilo/main.scss';
import HeaderBasico from './HeaderBasico';
import { Link } from 'react-router-dom';

function Principal(){

    const [valor, setValor] = useState('');

    function handleChange(event){
        setValor(event.target.value)
        console.log(valor)
    }

    return(
        <div>
            <HeaderBasico />
            <main className="Principal">
                <h1 className="Principal__Titulo">Encuentra tu Pokemon</h1>
                <ul className="Principal__Buscador">
                    <li><input type="text" name='nombre' placeholder='Nombre de un pokemon' onChange={handleChange}/></li>
                    <li><Link to={"/Carta"} state={{valor}}><img src={require("../images/lupa.png")}/></Link></li>
                </ul>
                
                <img className="Principal__Imagen" src={require("../images/Pokeball.png")} />
            
            </main>
        </div>
        
    );
}

export default Principal;