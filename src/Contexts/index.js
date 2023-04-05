import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../Services/api';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const navigate = useNavigate();

    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0)
    const [pokeIndex, setPokeIndex] = useState();

    useEffect(() => {
        async function loadApi() {
            setLoading(true)
            const offset = page * 6;
            const response = await api.get(`pokemon?limit=6&offset=${offset}`)

            const PokemonInfo = response.data.results;


            setPokeIndex(offset)
            setPokeData(PokemonInfo);
            setLoading(false)
        }

        loadApi();
    }, [page])


    function handleNextClick() {
        setPage(page + 1);
        setPokeData([])
    }

    function handlePrevClick() {
        if (page > 0) {
            setPage(page - 1);
        }
        setPokeData([])
    }

    function handlePage() {
        navigate('/')
        setPage(0)
    }


    const handlePokemonDetails = async (event, searchTerm) => {
        event.preventDefault();

        if(!searchTerm){
            return;
        }

        try{
            const response = await api.get(`pokemon/${searchTerm}`);
            const pokemon = response.data;
            navigate(`/details/${pokemon.id}`)
        } catch(error) {
            console.log(error);
        }
        
    }


    function handlePrevPage() {
        navigate('/')
        setPage(0);
    }



    return (
        <AuthContext.Provider
            value={{
                handlePage,
                pokeData,
                loading,
                setLoading,
                handleNextClick,
                handlePrevClick,
                pokeIndex,
                handlePokemonDetails,
                handlePrevPage,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}