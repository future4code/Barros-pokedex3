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
`

export const ButtonsCard = styled.div`
    display: flex;
    margin-top: 1vw;

    button{
        font-size: 0.6vw;
        color: white;
        width: 4vw;
        margin: 0 1vw;
        border-style: none;
        background-color: var(--dark-yellow);
        padding: 0.2vw;
        border-radius: 20%;
        border: solid 0.1vw var(--light-yellow);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;        
        :hover{
            opacity: .8;
        }
    }
`