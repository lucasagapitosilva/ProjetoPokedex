import './style.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FaSearch } from 'react-icons/fa';
import api from '../../Services/api';


export default function Main() {

  const navigate = useNavigate();

  const [pokeData, setPokeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0)

  useEffect(() => {
    async function loadApi() {
      setLoading(true)
      const offset = page * 6;
      const response = await api.get(`pokemon?limit=6&offset=${offset}`)

      const PokemonInfo = response.data.results

      setPokeData(PokemonInfo);
      setLoading(false)
      console.log(PokemonInfo)

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

  function handleTitleClick(){
    navigate('/')
  }


  if (loading) {
    return <p className='loading'>Loading...</p>
  }


  return (
    <div className='container-geral'>
      <div className='container-search'>
        <div>
          <button type='submit'><FaSearch size={25} /></button>
          <input
            type='text'
            placeholder='search'
            value='search'
            onChange={() => { }}
          />
        </div>
      </div>
      <div className='container'>

        <div className='container-cards'>
          {pokeData.map((pokemon, index) => {
            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/')[6]}.svg`;
            return (
              <div key={pokemon.name} className='card'>
                <p>{page * 6 + index + 1 < 10 ? `nº00${page * 6 + index + 1}` : `nº0${page * 6 + index + 1}`}</p>
                <img src={url} alt={pokemon.name} />
                <span>{pokemon.name}</span>
              </div>
            )
          })}
        </div>

      </div>

      <div className='btns'>
        {page <= 0 ? (
          <button type="button" onClick={handleNextClick}>
            Avançar
          </button>
        ) : (
          <>
            <button type="button" onClick={handlePrevClick}>
              Voltar
            </button>
            <button type="button" onClick={handleNextClick}>
              Avançar
            </button>
          </>
        )}
      </div>
      <span className='dev'>Desenvolvedor - Lucas Agapito</span>
    </div>
  );
}