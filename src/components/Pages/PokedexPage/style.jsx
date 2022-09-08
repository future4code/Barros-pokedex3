import styled from "styled-components";


export const Container = styled.section `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media screen and (min-width: 525px) {
        gap: 1vw;
    }
    @media screen and (max-width: 525px) {
        gap: 5vw;
    }
`

export const Battle = styled.form `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5vw;
    margin: 2vh 0;
    padding: 3vh 0;
    background-color: whitesmoke;
    width: 100%;
    select {
        max-width: 15vw;
        min-width: 8vw;
        min-height: 4vh;
        max-height: 5vh;
        font-size: 0.8vw;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        border-style: dashed;
        border: solid 3px var(--light-blue);
        @media screen and (max-width: 525px){
            font-size: 2vw;
            min-width: 12vw;
            max-width: 20vw;
        }

        @media screen and (min-width: 526px) and (max-width: 800px){
            font-size: 1.8vw;
            min-width: 12vw;
            max-width: 20vw;
        }   
    }
    option {
        font-weight: bold;
    }
    span{
        font-size: 1.5vw;
    }
    img {
        width: 3%;
        cursor: pointer;
        :hover {
            opacity: .8;
        }
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
        display: block;
        margin: 2vh auto 0 auto;
        @media screen and (min-width: 1100px) {
            width: 6%;
        }
        @media screen and (min-width: 600px) and (max-width: 1100px) {
            width: 10%;
        }
        @media screen and (max-width: 600px) {
            width: 20%;
        }
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

export const ContainerPokedex= styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-top: 8vh;
    }
`
