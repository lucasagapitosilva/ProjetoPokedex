import './style.css';
import { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../Contexts';
import { FaSearch } from 'react-icons/fa';


export default function Main() {

  const navigate = useNavigate();

  const { loading, pokeData, handleNextClick, handlePrevClick, pokeIndex, handlePokemonDetails } = useContext(AuthContext);

  const [searchTerm, setSearchTerm] = useState('');

/*   const btnsRef = useRef(null);

  useEffect(() => {
    if (btnsRef.current) {
      btnsRef.current.scrollIntoView({ behavior: 'smooth'});
    }
  }, [pokeData]) */

  if (loading) {
    return <p className='loading'>Loading...</p>
  }

  function handleDetails(event, id) {
    event.preventDefault();
    navigate(`/details/${id}`);
  }


  function handleSearchPokemon(event) {
    event.preventDefault();
    handlePokemonDetails(event, searchTerm);
  }


  return (
    <div className='container-geral'>
      <div className='container-search'>
        <div>
          <form onSubmit={handleSearchPokemon}>
            <button type='submit'><FaSearch size={25} /></button>
            <input
              type='text'
              placeholder='search'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className='container'>

        <div className='container-cards'>
          {pokeData.map((pokemon, index) => {
            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/')[6]}.svg`;

            return (
              <div key={pokemon.id || index} className='card' onClick={(event) => handleDetails(event, index + pokeIndex + 1)}>
                <p>{pokeIndex + index + 1 < 10 ? `nº00${pokeIndex + index + 1}` : `nº0${pokeIndex + index + 1}`}</p>
                <img src={url} alt={pokemon.name} />
                <span>{pokemon.name}</span>
              </div>
            )
          })}
        </div>

      </div>

      <div className='btns'>
        {pokeIndex <= 0 ? (
          <button type="submit" onClick={handleNextClick}>
            Avançar
          </button>
        ) : (
          <>
            <button type="submit" onClick={handlePrevClick}>
              Voltar
            </button>
            <button type="submit" onClick={handleNextClick}>
              Avançar
            </button>
          </>
        )}
      </div>
      <span className='dev'>Desenvolvedor - Lucas Agapito</span>
    </div>
  );
}