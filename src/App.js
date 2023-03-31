import { BrowserRouter } from "react-router-dom";

import Header from './Components/Header';
import Rotes from './Rotes/Rotes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotes />
    </BrowserRouter>
  );
}

export default App;
