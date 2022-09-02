import React, {useState} from 'react'
import {Router} from './routes/Router'
import { PokeContext } from './context/context'
import { GlobalStyle, Container } from './GlobalStyle'


function App() {
  const [pokedexList, setPokedexList] = useState(() => {
    const list = JSON.parse(localStorage.getItem("pokedex"))
    return list || []
})

  return (
    <Container>
      <PokeContext.Provider value={{pokedexList, setPokedexList}}>
        <GlobalStyle/>
        <Router/>
      </PokeContext.Provider>
    </Container>
  )
}

export default App;
