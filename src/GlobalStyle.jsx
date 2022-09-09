import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `

    :root {
        --dark-blue: #0A285F;
        --light-blue: #0075BE;
        --dark-yellow: #D5A100;
        --light-yellow: #FFCC00;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Container = styled.main `
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    p, li {
        line-height: 3vh;

        @media screen and (max-width: 525px){
            font-size: 3.5vw;
            margin-bottom: 1vw;
        }

        @media screen and (min-width: 526px) and (max-width: 800px){
            font-size: 2.5vw;
            margin-bottom: 1vw;
        }

        @media screen and (min-width: 801px){
            font-size: 0.8vw;
            margin-bottom: 0.7vw;
        }
    }
    ul {
        list-style: none;
    }
    h1 {
        line-height: 5vh;

        @media screen and (max-width: 525px){
            font-size: 4.5vw;
        }

        @media screen and (min-width: 526px) and (max-width: 800px){
            font-size: 4vw;
        }

        @media screen and (min-width: 801px){
            font-size: 1.7vw;
        }
    }
    h2 {
        line-height: 7vh;

        @media screen and (max-width: 525px){
            font-size: 4vw;
        }

        @media screen and (min-width: 526px) and (max-width: 800px){
            font-size: 4vw;
        }

        @media screen and (min-width: 801px){
            font-size: 1.5vw;
        }
    }

    button {
        cursor: pointer;
        color: white;
        border-style: none;
        background-color: var(--dark-yellow);
        padding: .8vh .5vw;
        border-radius: 5px;
        border: solid 0.1vw var(--light-yellow);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
        :hover {
            opacity: .8;
        }

        @media screen and (max-width: 525px){
            font-size: 3vw;
            margin-top: 1vw;
        }

        @media screen and (min-width: 526px) and (max-width: 800px){
            font-size: 2vw;
            margin-bottom: 1.5vw;
            margin-top: 1vw;
        }

        @media screen and (min-width: 801px){
            font-size: 0.8vw;
            margin-bottom: 1.5vw;
            margin-top: 1vw;
        }
    }
`