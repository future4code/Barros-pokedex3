import React, {useContext, useEffect} from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Card, ButtonsCard } from "./style";
import {useNavigate} from 'react-router-dom'
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/constants";


const PokeCard=({pokemon, buttonCard})=>{
    let [dataPokemon, error, isLoading, reload, setReload] = useRequestData(`${baseUrl}/${pokemon.name}`)
    const {pokedexList, setPokedexList} = useContext(GlobalContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        localStorage.setItem("pokedex", JSON.stringify(pokedexList))
    }, [pokedexList])

    //Adicionar pokemon à lista da pokedex
    const addPokemon = (poke) => {
        setReload(!reload)
        setPokedexList([...pokedexList, poke])
    }

    //Remover pokemon da lista da pokedex
    const removePokemon = (poke) => {
        setReload(!reload)
        const confirmation = confirm(`Você tem cerceza que deseja remover o ${poke.name.toUpperCase()} da sua pokedéx?`)
        if(confirmation) {
            const list = pokedexList.filter(item => {
                return item.name !== poke.name
            })
            setPokedexList(list)
        }
    }

    return(
        <Card>   
            {!isLoading && dataPokemon && <img src={dataPokemon.sprites.front_default} alt={`Imagem do pokemon ${pokemon.name}`}/>}
            <p>{pokemon.name.toUpperCase()}</p>
            <ButtonsCard>
                <button onClick={()=>{navigate(`/detalhes/${pokemon.name}`)}}>Detalhes do Pokémon</button>
                {buttonCard==="add" && <button onClick={()=>{addPokemon(pokemon)}}>Adicionar à Pokédex</button>}
                {buttonCard==="remove" && <button onClick={()=>{removePokemon(pokemon)}}>Remover da Pokédex</button>}
            </ButtonsCard>
        </Card>
    )
}

export default PokeCard;