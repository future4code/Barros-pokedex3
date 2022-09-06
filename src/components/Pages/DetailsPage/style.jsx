import styled from "styled-components";


export const Container = styled.section `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15vw;
    picture {
        display: flex;
        flex-direction: column;
        gap: 1vh;
    }
    div {
        :nth-child(1) {
            p:nth-child(1) {
                text-align: center;
            }
        }
        :nth-child(3) {
            height: 60vh;
            overflow-y: scroll;
            ::-webkit-scrollbar-track {
                background-color: #ebe9e9;
            }
            ::-webkit-scrollbar {
                width: .4vw;
                background: #ebe9e9;
            }
            ::-webkit-scrollbar-thumb {
                background: var(--dark-yellow);
            }
        }
    }
`

export const TypesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    margin: 5vh 0;
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        li {
            border: 1px solid lightgray;
            padding: .5vh;
        }
    }
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