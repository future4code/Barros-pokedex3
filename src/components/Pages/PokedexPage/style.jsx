import styled from "styled-components";


export const Container = styled.section `
    display: flex;
    justify-content: center;
    gap: 1vw;
    flex-wrap: wrap;
`

export const Battle = styled.form `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    margin: 2vh 0;
    select {
        padding: 1vh 1vw;
    }
`

export const BattleButton = styled.button `
    display: block;
    margin: 0 auto 4vh auto;
    
`

export const Winner = styled.section `
    background-color: var(--light-blue);
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100vw;
    h2 {
        color: white;
        text-align: center;
        margin-top: 17vh;
    }
    img {
        width: 10%;
        display: block;
        margin: 2vh auto 0 auto;
        @keyframes animationPokemon {
            0% {transform: translateY(1.5vw)}
            50% {transform: translateY(-1.5vh)}
            100% {transform: translateY(1.5vw)}
        }
        animation: animationPokemon 4s infinite;
    }
    button {
        padding: 1vh 1vw;
        display: block;
        margin: 5vh auto;
    }
`