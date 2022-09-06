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
    const [page, setPage] = useState(1)
    
    //Renderizar os pokemóns que não estão na pokedéx
    const pokemons = () => {
        if (pokedexList.length > 0) {
            let filter = dataPokemons.results.filter(pokemon => pokemon.name !== pokedexList[0].name)
            for (let i = 1; i < pokedexList.length; i++) {
                filter = filter.filter(pokemon => pokemon.name !== pokedexList[i].name)
            }
            return filter.map((pokemon, index)=>{
                return <PokeCard key={index} pokemon={pokemon} buttonCard={buttonCard}/>
            })
        } else {
            return dataPokemons && dataPokemons.results.map((pokemon, index)=>{
                return <PokeCard key={index} pokemon={pokemon} buttonCard={buttonCard}/>
            })
        }
    }

    const totalOffset = dataPokemons && (Number(dataPokemons.count) - 21)

    const NextPage = () => {
        setOffset(offset + 21)
        setPage(Number(page) + 1)
    }

    const PreviousPage = () => {
        setOffset(offset - 21)
        setPage(Number(page) - 1)
    }

    const ChoosePage = (e) => {
        e.preventDefault()
        setPage(page)
        setOffset((page - 1) * 21)
    }

    let Buttons
    if (offset === 0) {
        Buttons = <ButtonsPage>
            <form onSubmit={ChoosePage}>
                <input type="number" value={page} onChange={(e) => setPage(e.target.value)} max={55}/>
            </form>
                <button onClick={NextPage}>Próximo</button>
                </ButtonsPage>
    } else if (offset > 0 && offset < totalOffset) {
        Buttons = <ButtonsPage>
            <button onClick={PreviousPage}>Anterior</button>
            <form onSubmit={ChoosePage}>
                <input type="number" value={page} onChange={(e) => setPage(e.target.value)} max={55}/>
            </form>
            <button onClick={NextPage}>Próximo</button>
        </ButtonsPage>
    } else {
        Buttons = <ButtonsPage>
            <button onClick={PreviousPage}>Anterior</button>
            <form onSubmit={ChoosePage}>
                <input type="number" value={page} onChange={(e) => setPage(e.target.value)} max={55}/>
            </form>
        </ButtonsPage>
    }

    return (
        <>
            <Header/>

            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}

            <CardsContainer>
                {!isLoadingPokemons && dataPokemons && pokemons()}
            </CardsContainer>           

            {!isLoadingPokemons && dataPokemons && <>{Buttons}</>}

            {!isLoadingPokemons && errorPokemons && <p>Erro: {errorPokemons}</p>}
        </>
    )
}