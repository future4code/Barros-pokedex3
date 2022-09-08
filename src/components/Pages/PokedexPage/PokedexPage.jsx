import React, { useState, useContext } from "react"
import { Header } from "../../Header/Header"
import { GlobalContext } from "../../../context/GlobalContext"
import {Container, BattleButton, Battle, Winner, ContainerPokedex} from './style'
import PokeCard from "../../PokeCard/PokeCard"
import Swal from "sweetalert2"
import useRequestData from "../../../hooks/useRequestData"
import { baseUrl } from "../../../constants/constants"

export function PokedexPage() {
    const [buttonCard] = useState("remove")
    const {pokedexList, setPokedexList} = useContext(GlobalContext)
    const [battle, setBattle] = useState(false)
    const [winner, setWinner] = useState("")
    const [showPokemonsBattle, setShowPokemonsBattle] = useState(false)
    const [pokemon1, setPokemon1] = useState("")
    const [pokemon2, setPokemon2] = useState("")
    const [dataPokemon1, error, isLoading, reload, setReload] = useRequestData(`${baseUrl}/${pokemon1}`)
    const [dataPokemon2] = useRequestData(`${baseUrl}/${pokemon2}`)

    
    //Renderizar lista de pokemons adicionados à pokedex
    const renderData = pokedexList && pokedexList.map((pokemon, index) => {
        return <PokeCard key={index} pokemon={pokemon} buttonCard={buttonCard}/>
    })

    //Quando usuário inicia ou termina a batalha
    const handleBattleStart = () => {
        setBattle(!battle)
        if (!battle) {
            Swal.fire('Selecione 2 pokémons para se enfrentar')
        } else {
            Swal.fire('Jogo encerrado!')
        }
    }

    //Lista da pokeked a ser renderizada no select
    const options = pokedexList && pokedexList.map((pokemon, index) => {
        return <option key={index} value={pokemon.name}>{pokemon.name.toUpperCase()}</option>
    })

    //Limpar pokédex    
    const clearPokedex = () => {
        setReload(!reload)
        Swal.fire({
            text:'Tem certeza que deseja limpar sua Pokédex?',
            confirmButtonColor: '#0075BE',
            showDenyButton: true,
            denyButtonText: "Cancelar"
        })
        .then((result) => {
            if(result.isConfirmed) {
                setPokedexList([])
                Swal.fire('Pokédex limpa!')
            } else if(result.isDenied) {
                Swal.fire('Pokémons mantidos na sua Pokédex!')
            }
        })
    }
    
    //Quando usuário compara dois pokemóns
    const handleBattles = (e) => {
        e.preventDefault()
        let statsPokemon1 = []
        let statsPokemon2 = []

        for(let i=0; i < dataPokemon1.stats.length; i++) {
            statsPokemon1.push(dataPokemon1.stats[i].base_stat)
        }
        for(let i=0; i < dataPokemon2.stats.length; i++) {
            statsPokemon2.push(dataPokemon2.stats[i].base_stat)
        }

        const sumPokemon1 = statsPokemon1.reduce((prev, num) => parseInt(prev) + parseInt(num), 0)
        const sumPokemon2 = statsPokemon2.reduce((prev, num) => parseInt(prev) + parseInt(num), 0)

        if(sumPokemon1 > sumPokemon2) {
            setWinner(pokemon1)
        } else if(sumPokemon1 < sumPokemon2) {
            setWinner(pokemon2)
        } else {
            setWinner("Empate!")
        }


        setShowPokemonsBattle(true)
    }
    
    return (
        <>
            <Header/>

            <ContainerPokedex>
            
            {pokedexList.length !== 0 &&<BattleButton onClick={handleBattleStart}>{battle? 'Encerrar batalha' : 'Iniciar batalha'}</BattleButton>}

            {battle && (
                <Battle onSubmit={handleBattles}>
                    <select name={'pokemon1'} value={pokemon1} onChange={(e) => setPokemon1(e.target.value)} required>
                        <option>Selecione</option>
                        {options}
                    </select>
                    <span>X</span>
                    <select name={'pokemon2'} value={pokemon2} onChange={(e) => setPokemon2(e.target.value)} required>
                        <option>Selecione</option>
                        {options}
                    </select>
                    <button>Iniciar partida</button>

                    {showPokemonsBattle && (
                        <Winner>
                            {winner!=="Empate!"?<h2>O pokemón {winner.toUpperCase()} ganhou a partida!</h2>:<h2>Empate!!</h2>}
                            {winner!=="Empate!"&&winner===pokemon1 && (
                                <img src={dataPokemon1.sprites.front_default} alt={`Foto do pokémon ${winner}`}/>
                                )}
                            {winner!=="Empate!"&&winner===pokemon2 && (
                                <img src={dataPokemon2.sprites.front_default} alt={`Foto do pokémon ${winner}`}/>
                            )}
                            <button onClick={() => location.reload()}>Voltar</button>
                        </Winner>
                    )}
                </Battle>
            )}
           
            {pokedexList.length === 0 && <p>Não há pokemóns em sua pokedéx.</p>}

            <Container>
                {pokedexList && renderData}
            </Container>

            {pokedexList.length !== 0 && <button onClick={clearPokedex}>Limpar Pokédex</button>}            
            
            </ContainerPokedex>
        </>
    )
}