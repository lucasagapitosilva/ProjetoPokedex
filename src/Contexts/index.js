import { useState, createContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../Services/api';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

    const navigate = useNavigate();

    function handlePage() {
        navigate('/')
        setPage(0)
    }


    const [pokeData, setPokeData] = useState(null);
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
            console.log(pokeIndex)
        }

        loadApi();
    }, [page])


    function handleNextClick() {
        setPage(page + 1);
    }

    function handlePrevClick() {
        if (page > 0) {
            setPage(page - 1);
        }
    }


    return (
        <AuthContext.Provider
            value={{
                handlePage,
                pokeData,
                loading,
                handleNextClick,
                handlePrevClick,
                pokeIndex,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}