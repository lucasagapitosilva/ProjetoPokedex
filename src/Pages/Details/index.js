import './style.css';
import { FaArrowLeft, FaSearch } from 'react-icons/fa';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { AuthContext } from '../../Contexts';
import api from '../../Services/api';

export default function Details() {

  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [avatarPokemon, setAvatarPokemon] = useState();

  const { handlePokemonDetails, handlePrevPage, loading, setLoading } = useContext(AuthContext);


  useEffect(() => {
    async function loadApi(){
      setLoading(true);
      const response = await api.get(`/pokemon/${id}`)

      const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

      setPokemon(response.data);
      setAvatarPokemon(url)
      setLoading(false);
    }

    loadApi();
  },[id])


  if(!pokemon){
    return <p>Pokémon não encontrado!</p>
  }

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className='container-geral'>
      <div className='container-topo'>
        <div className='logoArrow' onClick={handlePrevPage}>
          <FaArrowLeft size={25} color='#5E3B9D'/>
        </div>
        <div className='container-search-details'>
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
      </div>

      <div className='container'>

        <div className='container-cards-details'>
          <img src={avatarPokemon}/>

          <div className='info-poke'>
            <article className='info-article'>
              <p>{pokemon.id < 10 ? `nº00${pokemon.id}` : `nº0${pokemon.id}`}</p>
              <span>{pokemon.types[0].type.name}</span>
            </article>

            <article className='info-article2'>
              <h2>{pokemon.name}</h2>
              <p>The Overwhelming power that fills its entire body causes it to turn black and creates intense blue flames.</p>
            </article>
          </div>
        </div>

      </div>

      
      <span className='dev'>Desenvolvedor - Lucas Agapito</span>
    </div>
  );
}