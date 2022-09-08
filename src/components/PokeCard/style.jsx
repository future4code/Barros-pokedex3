import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    text-align: center;
    p{
        font-weight: bold;
    }
    img{
        margin-bottom: 1vw;
        width: 5vw;
    }

    @media screen and (max-width: 525px){
        width: 42vw;
        height: 30vh;
        img{
            min-width: 23vw;
            max-width: 28vw;
        }
    }

    @media screen and (min-width: 650px) and (max-width: 800px){
        width: 30vw;
        height: 32vh;

        img{
            min-width: 16vw;
            max-width: 20vw;
        }
    }

    @media screen and (min-width: 526px) and (max-width: 650px){
        width: 30vw;
        height: 28vh;

        img{
            min-width: 16vw;
            max-width: 20vw;
        }
    }

    @media screen and (min-width: 801px) and (max-width: 1200px){
        min-width: 15vw;
        max-width: 30vw;
        min-height: 20vh;
        max-height: 32vh;

        img{
            min-width: 5vw;
        }  
    }
    @media screen and (min-width: 1200px) {
        min-width: 15vw;
        max-width: 30vw;
        min-height: 30vh;
        max-height: 40vh;

        img{
            min-width: 5vw;
        }  
    }
`

export const ButtonsCard = styled.div`
    display: flex;
    gap: 1.3vw;
    margin-top: 0.5vw;
`