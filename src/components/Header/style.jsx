import styled from "styled-components";

export const HeaderSection = styled.header `
    height: 10vh;
    background-color: var(--light-blue);
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2vw;
    padding-right: 8vw;
    margin-bottom: 1.5vw;
    div {
        display: flex;
        align-items: center;
        gap: 1vw;
        img {
            width: 8%;
            margin-left: 4vw;
            @media screen and (max-width: 525px){
                width: 15%;
                margin-left: 4vw;
            }

            @media screen and (min-width: 526px) and (max-width: 800px){
                width: 10%;
                margin-left: 4vw;
            }
            @media screen and (min-width: 801px){
                width: 9%;
            }
        }
        h1 {
            font-size: 26px;
            color: white;
            @media screen and (max-width: 525px){
                font-size: 5vw;
            }
            @media screen and (min-width: 526px) and (max-width: 800px){
                font-size: 4vw;
            }
            @media screen and (min-width: 801px){
                font-size: 1.5vw;
            }
        }
    }
    nav {
        display: flex;
        gap: 2vw;
        a {
            color: white;
            text-decoration: none;
            :hover {
                color: var(--light-yellow);
            }
            @media screen and (max-width: 525px){
                font-size: 4vw;
            }

            @media screen and (min-width: 526px) and (max-width: 800px){
                font-size: 3vw;
            }
            @media screen and (min-width: 801px){
                font-size: 1vw;
            }
        }
    }

`