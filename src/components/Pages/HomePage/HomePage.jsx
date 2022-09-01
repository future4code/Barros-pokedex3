import React from "react";
import { useContext } from "react";
import { PokeContext } from "../../../context/context";
import { Header } from "../../Header/Header"
import PokeCard from "../../PokeCard/PokeCard";
import { CardsContainer } from "./style";

export function HomePage() {

    const {dataPokemons, errorPokemons, isLoadingPokemons} = useContext(PokeContext)
    
    const pokemons = dataPokemons&&dataPokemons.results.map((pokemon, index)=>{
        return <PokeCard key={index} pokemon={pokemon} index={index}/>
    })

    return (
        <>
            <Header/>

            {isLoadingPokemons&&"...Carregando"}

            <CardsContainer>
                {!isLoadingPokemons&&dataPokemons&&pokemons}
            </CardsContainer>           

            {!isLoadingPokemons&&!dataPokemons&&errorPokemons}
        </>
    )
}