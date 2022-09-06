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

export const ButtonsPage = styled.div`
    display: flex;
    margin-top: 1vw;
    gap: 10px;
    justify-content: center;
    align-items: center;

    button {
        color: white;
        width: 5vw;
        border-style: none;
        background-color: var(--dark-yellow);
        padding: 1px;
        border-radius: 20%;
        border: solid 0.1vw var(--light-yellow);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;

        :hover {
            cursor: pointer;
            transform: scale(1.2);
            transition: all 0.2s;
        }
    }
`