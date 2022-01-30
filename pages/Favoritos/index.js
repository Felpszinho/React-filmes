
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './favoritos.css';




export default function Favoritos(id) {



    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const minhalista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhalista) || []);
    }, []);



    function handleDelete(id) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== id)
        })
        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
        toast.success('filme excluido com sucesso');
    }
    return (

        <div id="meu-filmes ">
            <h1> Meus Filmes</h1>
            {filmes.length == 0 && <span>Voce nao possui nenhum filme salvo :(</span>}
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>

                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filmes/${item.id}`}>ver detalhes</Link>
                                <button onClick={() => handleDelete(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )


                })}
            </ul>
        </div>
    )
}