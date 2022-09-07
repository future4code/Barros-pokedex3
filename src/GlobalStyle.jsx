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
        font-size: 16px;
        line-height: 3vh;
    }
    ul {
        list-style: none;
    }
    h1 {
        font-size: 34px;
        line-height: 5vh;
    }
    h2 {
        font-size: 26px;
        line-height: 7vh;
    }
    button {
        cursor: pointer;
        color: white;
        border-style: none;
        background-color: var(--dark-yellow);
        padding: 1vh;
        border-radius: 20%;
        border: solid 0.1vw var(--light-yellow);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
        :hover {
            opacity: .8;
        }
    }
`