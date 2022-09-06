import React, { useState, useContext } from "react"
import { Header } from "../../Header/Header"
import { GlobalContext } from "../../../context/GlobalContext"
import {Container} from './style'
import PokeCard from "../../PokeCard/PokeCard"


export function PokedexPage() {
    const [buttonCard] = useState("remove")
    const {pokedexList} = useContext(GlobalContext)
    
    //Renderizar lista de pokemons adicionados à pokedex
    const renderData = pokedexList && pokedexList.map((pokemon, index) => {
        return <PokeCard key={index} pokemon={pokemon} buttonCard={buttonCard}/>
    })
    
    return (
        <>
            <Header/>
            {pokedexList.length === 0 && <p>Não há pokemóns em sua pokedéx.</p>}

            <Container>
                {pokedexList && renderData}
            </Container>
        </>
    )
}