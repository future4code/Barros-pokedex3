import React from "react";
import { useContext } from "react";
import { PokeContext } from "../../../context/context";
import { Header } from "../../Header/Header"
import PokeCard from "../../PokeCard/PokeCard";
import { CardsContainer, Loading } from "./style";
import loading from '../../../img/loading.png'

export function HomePage() {

    const {dataPokemons, errorPokemons, isLoadingPokemons} = useContext(PokeContext)
    
    const pokemons = dataPokemons&&dataPokemons.map((pokemon, index)=>{
        return <PokeCard key={index} pokemon={pokemon} index={index}/>
    })

    return (
        <>
            <Header/>

            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}

            <CardsContainer>
                {!isLoadingPokemons&&dataPokemons&&pokemons}
            </CardsContainer>           

            {!isLoadingPokemons&&!dataPokemons&&errorPokemons}
        </>
    )
}