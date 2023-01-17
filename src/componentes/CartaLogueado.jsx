import React, {useState, useEffect} from "react";
import '../hojas-de-estilo/main.scss';
import HeaderLogueado from "./HeaderLogueado";
import { useLocation } from "react-router-dom";

function CartaLogueado(){

    const [poke, setPoke] = useState([]);
    const urlBase = 'https://pokeapi.co/api/v2/pokemon/';
    let valores = useLocation()
    let nombre = valores.state.valor.toLowerCase()

    const ObtenerDatos = async () => {
        const Datos = await fetch(`${urlBase}${nombre}`);
        const pokemon = await Datos.json();
        if (pokemon.name === "ditto"){
            const array = {name: pokemon.name, tipo:pokemon.types[0].type.name, delante: pokemon.sprites.front_default, detras: pokemon.sprites.back_default, 
                ataque1:pokemon.moves[0].move.name,
                abilidad1:pokemon.abilities[0].ability.name, abilidad2:pokemon.abilities[1].ability.name}
            setPoke(array)
        }
        else{
            const array = {name: pokemon.name, tipo:pokemon.types[0].type.name, delante: pokemon.sprites.front_default, detras: pokemon.sprites.back_default, 
                ataque1:pokemon.moves[0].move.name, ataque2:pokemon.moves[1].move.name, ataque3:pokemon.moves[2].move.name, ataque4:pokemon.moves[3].move.name,
                abilidad1:pokemon.abilities[0].ability.name, abilidad2:pokemon.abilities[1].ability.name}
            
            setPoke(array)
        }
    }

    useEffect(() => {
        ObtenerDatos();
    }, []);

    return(
        <>
            <HeaderLogueado />
            <main className="PrincipalCarta">
                <div className="PrincipalCarta__fuera">
                    <div className="PrincipalCarta__fuera__dentro">
                        <p>{poke.name}</p>
                        <p>{poke.tipo}</p>
                        <div className="PrincipalCarta__fuera__dentro__imagen">
                            <img src={poke.delante} alt='pokemon'/>
                            <img src={poke.detras} alt='pokemon'/>
                        </div>
                        <ul className="PrincipalCarta__fuera__dentro__ataques">
                            <li>{poke.ataque1}</li>
                            <li>{poke.ataque2}</li>
                            <li>{poke.ataque3}</li>
                            <li>{poke.ataque4}</li>
                        </ul>
                        <p>{poke.abilidad1}</p> <p>{poke.abilidad2}</p>
                    </div>
                </div>
                <img className="PrincipalCarta__Imagen" src={require("../images/Pokeball.png")} />
            </main>
        </>
    );
}

export default CartaLogueado