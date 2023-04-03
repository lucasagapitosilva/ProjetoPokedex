import './style.css';
import { useNavigate } from 'react-router-dom';

import { SiPokemon } from 'react-icons/si';


export default function Header({ handleTitleClick }) {


 return (
   <header>
    <SiPokemon size={80} color="#FFF" className='logo'/>
    <div className='topo'>
      <h1 onClick={handleTitleClick}>Pokédex</h1>
    </div>
   </header>
 );
}