import React from "react"
import { Link } from "react-router-dom"
import {HeaderSection} from './style'
import logo from '../../img/logo.png'


export function Header() {
    return (
        <HeaderSection>
            <div>
                <img src={logo} alt={'Logo da Pokedex'}/>
                <h1>Pokedéx</h1>
            </div>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/pokedex"}>Pokedex</Link>
            </nav>
            
        </HeaderSection>
    )
}