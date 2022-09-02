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
    font-family: 'Montserrat', sans-serif;
`