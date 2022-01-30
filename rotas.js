import { BrowserRouter as Router,
Routes,Route } from "react-router-dom";

import Home from './pages/Home';
import Header from "./components/Header";
import Filme from './pages/Filme';
import Favoritos from "./pages/Favoritos";
import Erro from "./pages/Erro";

const Rotas=()=> {

    return (
        <Router>
                  
                <Header/> 
            <Routes>

                <Route  path="/" element={<Home/>}  /> 
                <Route  path="/filme/:id" element={<Filme/>}/>
                <Route path="/favoritos" element={<Favoritos/>}/>
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </Router>


    );
}
export default Rotas;