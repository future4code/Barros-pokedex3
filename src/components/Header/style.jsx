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
        }
        h1 {
            font-size: 26px;
            color: white;
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
        }
    }
`