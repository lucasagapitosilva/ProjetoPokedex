import './style.css';

import { SiPokemon } from 'react-icons/si';


export default function Header() {
 return (
   <header>
    <SiPokemon size={80} color="#FFF" className='logo'/>
    <div className='topo'>
      <h1>Pokédex</h1>
    </div>
   </header>
 );
}