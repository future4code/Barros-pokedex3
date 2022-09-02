import React, { useState } from "react"
import { Header } from "../../Header/Header"
import { useContext } from "react"
import { PokeContext } from "../../../context/context"
import {Container} from './style'
import PokeCard from "../../PokeCard/PokeCard"



export function PokedexPage() {
    const [buttonCard] = useState("remove")
    const {pokedexList} = useContext(PokeContext)
    
    //Renderizar lista de pokemons adicionados à pokedex
    const renderData = pokedexList && pokedexList.map((pokemon, index) => {
        return <PokeCard key={index} pokemon={pokemon} index={index} buttonCard={buttonCard}/>
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