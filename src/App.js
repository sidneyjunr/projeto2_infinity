import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Contato} from "./pages/Contato";
import {Home} from "./pages/Home";
import {Cursos} from "./pages/Cursos";
import {Page404} from "./pages/Page404";
import {Menu} from "./pages/Menu";
import {Sucesso} from "./pages/Sucesso";
import {Detalhes} from "./pages/Detalhes";


function App() {
  return (
  <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path= "/" element = {<Home/>}/>
      <Route path= "cursos" element = {<Cursos/>}/>
      <Route path= "contato" element = {<Contato/>}/>
      <Route path= "*" element ={<Page404/>}/>
      <Route path= "sucesso" element ={<Sucesso/>}/>
      <Route path= "detalhes/:id" element ={<Detalhes/>}/>
    </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
