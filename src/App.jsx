import React from 'react'
import {Router} from './routes/Router'
import { PokeContext } from './context/context'
import { GlobalStyle } from './GlobalStyle'
import {baseUrl} from "../src/constants/constants"
import useRequestData from "../src/hooks/useRequestData"

function App() {

  const [dataPokemons, errorPokemons, isLoadingPokemons] = useRequestData(`${baseUrl}`)

  return (
    <div>
      <PokeContext.Provider value={{dataPokemons, errorPokemons, isLoadingPokemons}}>
        <GlobalStyle/>
        <Router/>
      </PokeContext.Provider>
    </div>
  )
}

export default App;
