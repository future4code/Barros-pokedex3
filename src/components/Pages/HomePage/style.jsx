import styled from "styled-components";

export const CardsContainer = styled.section`
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

export const Loading = styled.img `
    display: block;
    margin: 25vh auto;
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
    margin-top: 3vh;
    padding-bottom: 3vh;
    gap: 10px;
    justify-content: center;
    align-items: center;

    form > input {
    width: 40px;
    padding: 3px;
    padding-right: 0;
    text-align: center;
    border: 1px solid var(--dark-yellow);
    }

    img {
        cursor: pointer;
        @media screen and (min-width: 1000px) {
            width: 2%;
        }
        @media screen and (min-width: 700px) and (max-width: 1000px) {
            width: 3%;
        }
        @media screen and (min-width: 500px) and (max-width: 700px) {
            width: 4%;
        }
        @media screen and (max-width: 500px) {
            width: 6%;
        }
        :hover {
            opacity: .8;
        }
    }
`