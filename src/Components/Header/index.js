import './style.css';
import { useContext } from 'react';

import { SiPokemon } from 'react-icons/si';
import { AuthContext } from '../../Contexts';

export default function Header() {

  const { handlePage } = useContext(AuthContext);

 return (
   <header>
    <SiPokemon size={80} color="#FFF" className='logo' onClick={handlePage}/>
    <div className='topo'>
      <h1 onClick={handlePage}>Pokédex</h1>
    </div>
   </header>
 );
}