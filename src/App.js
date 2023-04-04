import { BrowserRouter } from "react-router-dom";

import Header from './Components/Header';
import Rotes from './Rotes/Rotes';
import AuthProvider from "./Contexts";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Rotes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
