import { Routes, Route } from 'react-router-dom';

import Main from '../Pages/Main';
import Details from '../Pages/Details';

export default function Rotes() {
    return (
        <Routes>
            <Route exact path='/' element={<Main />} />
            <Route exact path='/details/:id' element={<Details />} />
        </Routes>
    )
}