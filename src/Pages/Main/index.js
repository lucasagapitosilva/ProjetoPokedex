import './style.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../Contexts';
import { FaSearch } from 'react-icons/fa';


export default function Main() {

  const { loading, pokeData, handleNextClick, handlePrevClick, pokeIndex, handlePokemonDetails } = useContext(AuthContext);

  if (loading) {
    return <p className='loading'>Loading...</p>
  }

  return (
    <div className='container-geral'>
      <div className='container-search'>
        <div>
          <form onSubmit={handlePokemonDetails}>
            <button type='submit'><FaSearch size={25} /></button>
            <input
              type='text'
              placeholder='search'
            />
          </form>
        </div>
      </div>
      <div className='container'>

        <div className='container-cards'>
          {pokeData.map((pokemon, index) => {
            const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.url.split('/')[6]}.svg`;
            return (
              <div key={pokemon.id} className='card'>
                <Link to={`/details/${index + 1}`}>
                  <p>{pokeIndex + index + 1 < 10 ? `nº00${pokeIndex + index + 1}` : `nº0${pokeIndex + index + 1}`}</p>
                  <img src={url} alt={pokemon.name} />
                  <span>{pokemon.name}</span>
                </Link>
              </div>
            )
          })}
        </div>

      </div>

      <div className='btns'>
        {pokeIndex <= 0 ? (
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