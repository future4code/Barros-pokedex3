import React, {useContext, useEffect} from "react";
import { PokeContext } from "../../context/context";
import { Card, ButtonsCard } from "./style";
import {useNavigate} from 'react-router-dom'
import useRequestData from "../../hooks/useRequestData";
import { baseUrl } from "../../constants/constants";


const PokeCard=({pokemon, buttonCard})=>{
    const [dataPokemon, isLoading] = useRequestData(`${baseUrl}/${pokemon.name}`)
    const {pokedexList, setPokedexList} = useContext(PokeContext)
    const navigate = useNavigate()


    useEffect(() => {
        localStorage.setItem("pokedex", JSON.stringify(pokedexList))
    }, [pokedexList])


    //Adicionar pokemon à lista da pokédex
    const addPokemon = (poke) => {
        const includes = pokedexList.filter(item => item.name === poke.name)

        if(pokedexList.length === 0 || includes.length===0) {
            setPokedexList([...pokedexList, poke])
        } else {
            alert(`Você já adicionou o ${poke.name} à sua pokédex.`) 
        }
    }

    //Remover pokemon da lista da pokédex
    const RemovePokemon = (poke) => {
        const confirmation = confirm(`Você tem cerceza que deseja remover o ${poke.name} da sua pokédex?`)
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
                {buttonCard==="remove" && <button onClick={()=>{RemovePokemon(pokemon)}}>Remover da Pokédex</button>}
            </ButtonsCard>
        </Card>
    )
}

export default PokeCard;