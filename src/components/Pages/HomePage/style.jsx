import styled from "styled-components";

export const CardsContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 1vw;
    flex-wrap: wrap;
`

export const Loading = styled.img `
    display: block;
    margin: 12vh auto;
    @keyframes rotate {
        from {transform: rotate(0)}
        to {transform: rotate(360deg)}
    }
    
    animation: rotate 1s infinite;
    
    @media screen and (min-width: 1000px) {
        width: 5%;
    }
    @media screen and (min-width: 320px) and (max-width: 1000px) {
        width: 15%;
    }
`