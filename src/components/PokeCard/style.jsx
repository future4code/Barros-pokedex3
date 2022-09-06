import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    width: 13vw;
    height: 25vh;
    text-align: center;

    p{
        font-weight: bold;
        font-size: 0.8vw;
    }

    img{
        margin-bottom: 1vw;
        width: 5vw;
    }

    @media screen and (max-width: 525px){
        width: 40vw;
        height: 30vh;

        img{
            min-width: 23vw;
            max-width: 28vw;
        }
    }

    @media screen and (min-width: 526px) and (max-width: 800px){
        width: 40vw;
        height: 30vh;

        img{
            min-width: 16vw;
            max-width: 20vw;
        }
    }

    @media screen and (min-width: 801px){
            
    }
`

export const ButtonsCard = styled.div`
    display: flex;
    gap: 1.3vw;
    margin-top: 1vw;
`