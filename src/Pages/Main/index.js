import './style.css';
import { useContext } from 'react';

import { AuthContext } from '../../Contexts';
import { FaSearch } from 'react-icons/fa';


export default function Main() {

  const { loading, pokeData, page, handleNextClick, handlePrevClick, pokeIndex } = useContext(AuthContext);

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
                <p>{pokeIndex + index + 1 < 10 ? `nº00${pokeIndex + index + 1}` : `nº0${pokeIndex + index + 1}`}</p>
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