import React, { useContext } from "react"
import { Header } from "../../Header/Header"
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../constants/constants";
import useRequestData from '../../../hooks/useRequestData'
import { DetailsContainer, ImagesContainer, MovesContainer, PokemonTitle, StatsContainer, TypesAndMovesContainer, TypesContainer, Loading } from "./style";
import loading from '../../../img/loading.png'
import { PokeContext } from '../../../context/context'


export function DetailsPage() {

    const pathParams = useParams();
    const pokemon = pathParams.name
    const {pokedexList, setPokedexList} = useContext(PokeContext)    
    const [dataPokemons, errorPokemons, isLoadingPokemons] = useRequestData(`${baseUrl}/${pokemon}`)
    
    const listStats = dataPokemons && dataPokemons.stats.map((stat, index) => {
        return (
            <li key={index}><span>{stat.stat.name.toUpperCase()}:</span> {stat.base_stat}</li>
        )
    })

    const listTypes = dataPokemons && dataPokemons.types.map((type, index) => {
        return (
            <li key={index}> <span> {type.type.name.toUpperCase()} </span></li>
        )
    })

    const listMoves = dataPokemons && dataPokemons.moves.map((move, index) => {
        return (
            <li key={index}> <span> {move.move.name.toUpperCase()} </span></li>
        )
    })

    //Adicionar ou remover pokémon da pokédex
    const addOrRemove=()=>{
        for(let i= 0; i < pokedexList.length; i++){
            if(pokedexList[i].name !== dataPokemons.name){
                const pokedex = [...pokedexList, dataPokemons]
                return setPokedexList(pokedex)
            } else {
                const remove = pokedexList.filter((item)=>{
                    return item.name !== dataPokemons.name
                })
                setPokedexList(remove)
            }
        }
    }


    return (
        <>
            <Header/>

            <button onClick={addOrRemove}>Adicionar/Remover da Pokédex</button>

            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}
            {!isLoadingPokemons && errorPokemons && <p>Ocorreu um erro: {errorPokemons}</p>}
            {!isLoadingPokemons && dataPokemons && <PokemonTitle>{dataPokemons.name.toUpperCase()}</PokemonTitle>}

            <DetailsContainer>
                <ImagesContainer>
                    {!isLoadingPokemons && dataPokemons && <img src={dataPokemons.sprites.front_default} alt="De frente"/>}
                    {!isLoadingPokemons && dataPokemons && <img src={dataPokemons.sprites.back_default} alt="De costas"/>}
                </ImagesContainer>
                <StatsContainer>
                    <p>Stats</p>
                    {!isLoadingPokemons && dataPokemons && <ul>{listStats}</ul>}
                </StatsContainer>
                <TypesAndMovesContainer>
                    <TypesContainer>
                        {!isLoadingPokemons && dataPokemons && <ul>{listTypes}</ul>}
                    </TypesContainer>
                    <MovesContainer>
                        <p>Principais Ataques</p>
                        {!isLoadingPokemons && dataPokemons && <ul>{listMoves}</ul>}
                    </MovesContainer>
                </TypesAndMovesContainer>
            </DetailsContainer>
        </>
    )
}