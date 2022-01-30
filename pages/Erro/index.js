import './erro.css';
import { Link } from 'react-router-dom'

export default function Erro(){
    return(
        <div className="not-found">Pagina Erro!
        
        <h1>404</h1>
        <h2>pagina não encontrada</h2>
        <Link to="/">Veja Todos os filmes</Link>
        
        </div>
    )
}