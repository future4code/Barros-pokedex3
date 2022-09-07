import React, { useContext, useState} from "react"
import { Header } from "../../Header/Header"
import { useParams } from "react-router-dom";
import { baseUrl } from "../../../constants/constants";
import useRequestData from '../../../hooks/useRequestData'
import { Container, TypesContainer, Loading } from "./style";
import loading from '../../../img/loading.png'
import { GlobalContext } from '../../../context/GlobalContext'
import Swal from "sweetalert2";


export function DetailsPage() {

    const pathParams = useParams();
    const pokemon = pathParams.name
    const {pokedexList, setPokedexList} = useContext(GlobalContext)
    const [dataPokemons, errorPokemons, isLoadingPokemons] = useRequestData(`${baseUrl}/${pokemon}`)
    
    //Lista só com os nomes dos pokemons que estão na pokedéx
    let listOfNames = []
    for(let i = 0; i < pokedexList.length; i++) {
        listOfNames.push(pokedexList[i].name)
    }

    //Pegando os detalhes de cada pokemón
    let sum = []
    const listStats = dataPokemons && dataPokemons.stats.map((stat, index) => {
        sum.push(stat.base_stat)
        return (
            <li key={index}><strong><span>{stat.stat.name.toUpperCase()}:</span></strong> {stat.base_stat}</li>
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

    //Soma das stats
    const sumStats = sum.reduce((prev, num) => parseInt(prev) + parseInt(num), 0)

    //Adicionar ou remover pokémon da pokedéx
    const addOrRemove = () => {
        if(listOfNames.includes(pokemon)) {
            const remove = pokedexList.filter((item) => {
                return item.name !== pokemon
            })
            Swal.fire({
                title: 'Sucesso!',
                text:`Você removeu o ${pokemon.toUpperCase()} da sua pokedéx!`,
                icon: "success",
                confirmButtonColor: '#0075BE'
            })
            return setPokedexList(remove)
        } else {
            const pokedex = [...pokedexList, dataPokemons]
            Swal.fire({
                title: 'Sucesso!',
                text:`Você adicionou o ${pokemon.toUpperCase()} à sua pokedéx!`,
                icon: "success",
                confirmButtonColor: '#0075BE'
            })
            return setPokedexList(pokedex)
        }
    }

    return (
        <>
            <Header/>            
            {isLoadingPokemons && <Loading src={loading} alt={'Ícone de uma meia lua rodando'}/>}
            {!isLoadingPokemons && errorPokemons && <p>Ocorreu um erro: {errorPokemons}</p>}
            {!isLoadingPokemons && dataPokemons && (
                <>
                    <TypesContainer>
                        <button onClick={addOrRemove}>{listOfNames.includes(pokemon)? "Remover da pokedéx" : "Adicionar à pokedéx"}</button>
                        <h1>{dataPokemons.name.toUpperCase()}</h1>
                        <ul>{listTypes}</ul>
                    </TypesContainer>
                    <Container>
                        <picture>
                            <img src={dataPokemons.sprites.front_default} alt="De frente"/>
                            <img src={dataPokemons.sprites.back_default} alt="De costas"/>
                        </picture>
                        <div>
                            <h2>Stats</h2>
                            {!isLoadingPokemons && dataPokemons && (
                                <>
                                    <ul>{listStats}</ul>
                                    <hr/>
                                    <p><strong>SOMA:</strong> {sumStats}</p>
                                </>
                            )}
                        </div>    
                        <div>
                            <h2>Principais Ataques</h2>
                            {!isLoadingPokemons && dataPokemons && <ul>{listMoves}</ul>}
                        </div>
                    </Container>
                </>
            )}
        </>
    )
}