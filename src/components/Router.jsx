import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {HomePage} from './Pages/HomePage/HomePage'
import {PokedexPage} from './Pages/PokedexPage/PokedexPage'


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
                <Route path={"/pokedex"} element={<PokedexPage/>}/>
                <Route path={"/detalhes/:"} element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}