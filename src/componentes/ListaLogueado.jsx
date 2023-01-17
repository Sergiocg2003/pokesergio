import React, {useEffect, useState} from "react";
import '../hojas-de-estilo/main.scss';
import { useNavigate } from "react-router-dom";
import HeaderLogueado from "./HeaderLogueado";


function ListaLogueado(){
    
    const navegar = useNavigate();
    const [poke, setPoke] = useState([]);
    const [tipoSeleccionado, setTipoSeleccionado] = useState({
        grass:false,
        normal:false,
        fighting:false,
        flying:false,
        poison:false,
        ground:false,
        rock:false,
        bug:false,
        ghost:false,
        steel:false,
        fire:false,
        water:false,
        electric:false,
        psychic:false,
        ice:false,
        dragon:false,
        dark:false,
        fairy:false,
        unknow:false,
        shadow:false
    });
    const [pokeFiltrados, setPokeFiltrados] = useState([]);
    const urlBase = 'https://pokeapi.co/api/v2/';

    
    const ObtenerDatos = async () => {
        const Datos = await fetch(`${urlBase}pokemon?offset=0&limit=100000`);
        const pokemons = await Datos.json();
        //console.log(pokemons)
        const Info = pokemons.results.map(async(pokemon) =>{
            const Datos = await fetch(pokemon.url);
            const pokemons = await Datos.json();
            return pokemons
        })

        const resultado = await Promise.all(Info)
        //console.log(resultado)
        setPoke(resultado)
    }

    const handleCheckbox = e => {

        setTipoSeleccionado({
            ...tipoSeleccionado, [e.target.name]: e.target.checked
        })

        if(e.target.checked){
            const resultadoFiltrado = ObtenerDatos.filter(poke = poke.map((item) => {item.types.map(tipo => tipo.type.name).includes(e.target.name)}));
            setPokeFiltrados(resultadoFiltrado)
        }

    }

    useEffect(() => {
        ObtenerDatos();
    }, []);

    function handleClic(e){
        navegar("/Carta");
    }
   
    return (
        <>
            <HeaderLogueado />

            <div className="PrincipalListado">
                <div className="PrincipalListado__filtros">
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="fire" id="fire"/>
                        <label htmlFor="fire">Fuego</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="water" id="water"/>
                        <label htmlFor="water">Agua</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="grass" id="grass"/>
                        <label htmlFor="grass">Planta</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="bug" id="bug"/>
                        <label htmlFor="bug">Bicho</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="fairy" id="fairy"/>
                        <label htmlFor="fairy">Hada</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="poison" id="poison"/>
                        <label htmlFor="poison">Veneno</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="flying" id="flying"/>
                        <label htmlFor="flying">Volador</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="normal" id="normal"/>
                        <label htmlFor="normal">Normal</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="ground" id="ground"/>
                        <label htmlFor="ground">Tierra</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="electric" id="electric"/>
                        <label htmlFor="electric">Electrico</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="fighting" id="fighting"/>
                        <label htmlFor="fighting">Lucha</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="psychic" id="psychic"/>
                        <label htmlFor="psychic">Psiquico</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="rock" id="rock"/>
                        <label htmlFor="rock">Roca</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="steel" id="steel"/>
                        <label htmlFor="steel">Acero</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="ice" id="ice"/>
                        <label htmlFor="ice">Hielo</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="dragon" id="dragon"/>
                        <label htmlFor="dragon">Dragon</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="ghost" id="ghost"/>
                        <label htmlFor="ghost">Fantasma</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="dark" id="dark"/>
                        <label htmlFor="dark">Sinestro</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="unknow" id="unknow"/>
                        <label htmlFor="unknow">Unknow</label>
                    </div>
                    <div className="PrincipalListado__filtros__tipo">
                        <input type="checkbox" onChange={handleCheckbox} name="shadow" id="shadow"/>
                        <label htmlFor="shadow">Shadow</label>
                    </div>
                </div>

                <div className='PrincipalListado__contenedor'>
        
                {
                    poke.map((item) => {
                        return(
                            <div className='PrincipalListado__contenedor__carta' id={item.id} key={item.id} onClick={handleClic}>
                                <img className="PrincipalListado__contenedor__carta__foto" src={item.sprites.front_default} alt='pokemon' />
                                <h5 className='PrincipalListado__contenedor__carta__nombre'>{item.name}</h5>
                                {
                                    item.types.map(type => (
                                        <h6 className='PrincipalListado__contenedor__carta__tipo'>type: {type.type.name}</h6>
                                    ))
                                }
                                
                            </div>
                        )
                    })
                }
        
                </div>
                <img className="Principal__Imagen" src={require("../images/Pokeball.png")} />
            </div>
        </>
    );  
}

export default ListaLogueado