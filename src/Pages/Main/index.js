import './style.css';

import { FaSearch } from 'react-icons/fa';

export default function Main() {
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
          <div className='card'>
            <p>nº001</p>
            <img />
            <span>Charizard</span>
          </div>
        </div>

        <span>Desenvolvedor - Lucas Agapito</span>
      </div>
    </div>
  );
}