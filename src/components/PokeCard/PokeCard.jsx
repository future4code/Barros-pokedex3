import { Card, ButtonsCard } from "./style";

const PokeCard=({pokemon, index})=>{
    return(
            <Card>            
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}/>
                <p>{pokemon.name.toUpperCase()}</p>
                <ButtonsCard>
                    {/* <button onClick={()=>{navigate("/detalhes/${pokemon.name}"}}>Pokemon Details</button> */}
                    {/* <button onClick={()=>{addPokemon(pokemon)}}>Add</button> */}      
                </ButtonsCard>
            </Card>
    )
}

export default PokeCard;