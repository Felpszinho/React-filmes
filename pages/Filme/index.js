import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './filme-info.css';
import api from '../../services/api';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router';
export default function Filme() {


    const { id } = useParams();
    const [filme, setFilme] = useState([]);
    const [loadiing, setLoading] = useState(true);
    const navigate = useNavigate;

    useEffect(() => {


        async function loadFilmes() {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0) {
                navigate.replace('/');
                return;
            }
            setFilme(response.data);
            setLoading(false);
        }
        loadFilmes();

        return () => {

            console.log('componete desmontado')
        }
    }, [navigate, id]);




  


    if (loadiing) {

        return (
            <div className='filme-info'>
                <h1>Carregando seu Filme...</h1>
            </div>
        )
    }


    function salvaFilme() {
        const minhalista = localStorage.getItem('filmes');
        let filmeSalvos = JSON.parse(minhalista) || [];
        const hasFilme = filmeSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)
        if (hasFilme) {
            toast.error('Voce ja posui esse filme salvo');
            return;
        }
        filmeSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmeSalvos));
        toast.success('Filme salvo com sucesso');
    }
    return (
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />


            <h3>Sinopse</h3>
            {filme.sinopse}
            <div>
                <button onClick={salvaFilme}>Salvar</button>
                <button>
                    <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome}`}>Trailer</a>
                </button>

            </div>
        </div>
    )
}