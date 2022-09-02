import React, { useState } from "react";
import useRequestData from '../../../hooks/useRequestData'
import { baseUrl } from "../../../constants/constants";
import { Header } from "../../Header/Header"
import PokeCard from "../../PokeCard/PokeCard";
import { CardsContainer, Loading } from "./style";
import loading from '../../../img/loading.png'

export function HomePage() {
    const [buttonCard] = useState("add")
    const [dataPokemons, errorPokemons, isLoadingPokemons] = useRequestData(`${baseUrl}`)
    
    const pokemons = dataPokemons&&dataPokemons.results.map((pokemon, index)=>{
        return <PokeCard key={index} pokemon={pokemon} index={index} buttonCard={buttonCard}/>
    })

    return (
        <>
            <Header/>

            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}

            <CardsContainer>
                {!isLoadingPokemons&&dataPokemons&&pokemons}
            </CardsContainer>           

            {!isLoadingPokemons&&!dataPokemons&&<p>Erro: {errorPokemons}</p>}
        </>
    )
}