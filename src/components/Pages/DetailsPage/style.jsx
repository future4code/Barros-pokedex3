import styled from "styled-components";

export const PokemonTitle = styled.h1`
    text-align: center;
`

export const DetailsContainer = styled.div`
    width: 90vw;
    margin: 25px;
    display: flex;
    margin-left: 5vw;
    padding: 15px;
    justify-content: center;
`

export const ImagesContainer = styled.div`
    width: 30vw;
    display: flex;
    flex-direction: column;
    padding: 5px;
    gap: 25px;
    justify-items: center;
    align-items: center;
`

export const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: justify;
    font-size: 1.5rem;
    width: 30vw;

    p:nth-child(1) {
        text-align: center;
        font-weight: bold;
    }

    span {
        font-weight: bold;
    }

    ul {
        list-style: none;

        li {
            margin-bottom: 10px;
        }
    }
`

export const TypesAndMovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 30vw;
`

export const TypesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
        ul {
            list-style: none;
            display: flex;
            gap: 20px;
            justify-content: center;

            li {
                border: 1px solid lightgray;
            }
        }
`

export const MovesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    p:nth-child(1) {
        text-align: center;
        font-weight: bold;
    }

    ul {
        list-style: none;
    }
`