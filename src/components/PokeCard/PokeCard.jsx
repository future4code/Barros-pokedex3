import React, {useContext, useEffect} from "react";
import { PokeContext } from "../../context/context";
import { Card, ButtonsCard } from "./style";
import {useNavigate} from 'react-router-dom'


const PokeCard=({pokemon, index, buttonCard})=>{
    const {pokedexList, setPokedexList} = useContext(PokeContext)
    const navigate = useNavigate()


    useEffect(() => {
        localStorage.setItem("pokedex", JSON.stringify(pokedexList))
    }, [pokedexList])


    //Adicionar pokemon à lista da pokedex
    const addPokemon = (poke) => {
        const includes = pokedexList.filter(item => item.name === poke.name)

        if(pokedexList.length === 0 || includes.length===0) {
            setPokedexList([...pokedexList, poke])
        } else {
            alert(`Você já adicionou o ${poke.name} à sua pokedex.`) 
        }
    }

    //Remover pokemon da lista da pokedex
    const RemovePokemon = (poke) => {
        const confirmation = confirm(`Você tem cerceza que deseja remover o ${poke.name} da sua pokedex?`)
        if(confirmation) {
            const list = pokedexList.filter(item => {
                return item.name !== poke.name
            })
            setPokedexList(list)
        }
    }

    return(
        <Card>            
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={`Imagem do pokemon ${pokemon.name}`}/>
            <p>{pokemon.name.toUpperCase()}</p>
            <ButtonsCard>
                <button onClick={()=>{navigate(`/detalhes/${pokemon.name}`)}}>Pokemon Details</button>
                {buttonCard==="add" && <button onClick={()=>{addPokemon(pokemon)}}>Adicionar à Pokedéx</button>}
                {buttonCard==="remove" && <button onClick={()=>{RemovePokemon(pokemon)}}>Remover da Pokedéx</button>}
            </ButtonsCard>
        </Card>
    )
}

export default PokeCard;