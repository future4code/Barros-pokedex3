import React, { useContext, useState } from "react";
import { Header } from "../../Header/Header"
import PokeCard from "../../PokeCard/PokeCard";
import { ButtonsPage, CardsContainer, Loading } from "./style";
import loading from '../../../img/loading.png'
import { GlobalContext } from "../../../context/GlobalContext";
import useRequestData from "../../../hooks/useRequestData";
import { baseUrl } from "../../../constants/constants";


export function HomePage() {
    const [offset, setOffset] = useState(0)
    const [dataPokemons, errorPokemons, isLoadingPokemons] = useRequestData(`${baseUrl}?limit=21&offset=${offset}`)
    const {pokedexList} = useContext(GlobalContext)
    const [buttonCard] = useState("add")
    
    //Renderizar os pokemóns que não estão na pokedéx
    const pokemons = () => {
        if (pokedexList.length > 0) {
            let filter = dataPokemons.results.filter(pokemon => pokemon.name !== pokedexList[0].name)
            for (let i = 1; i < pokedexList.length; i++) {
                filter = filter.filter(pokemon => pokemon.name !== pokedexList[i].name)
            }
            console.log(filter)
            return filter.map((pokemon, index)=>{
                return <PokeCard key={index} pokemon={pokemon} buttonCard={buttonCard}/>
            })
        } else {
            return dataPokemons && dataPokemons.results.map((pokemon, index)=>{
                return <PokeCard key={index} pokemon={pokemon} buttonCard={buttonCard}/>
            })
        }
    }

    return (
        <>
            <Header/>

            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}

            <CardsContainer>
                {!isLoadingPokemons && dataPokemons && pokemons()}
            </CardsContainer>           

            {!isLoadingPokemons && dataPokemons && (
                <ButtonsPage>
                    <button onClick={() => setOffset(offset - 21)}>Anterior</button>
                    <button onClick={() => setOffset(offset + 21)}>Próximo</button>
                </ButtonsPage>
            )}

            {!isLoadingPokemons && errorPokemons && <p>Erro: {errorPokemons}</p>}
        </>
    )
}