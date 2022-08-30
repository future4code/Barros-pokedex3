import React from "react"
import { Link } from "react-router-dom"
import {HeaderSection} from './style'


export function Header() {
    return (
        <HeaderSection>
            <Link to={"/"}>Home</Link>
            <Link to={"/pokedex"}>Pokedex</Link>
        </HeaderSection>
    )
}