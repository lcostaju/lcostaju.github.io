
import QuemSomos from './Componentes/QuemSomos/QuemSomos'
import conteudo from './Componentes/QuemSomos/TxtQuemSomos'
import Menu from './Menu/Menu'
import SobreNos from './Componentes/SobreNos/SobreNos';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Menu/>

      <Routes>
        <Route path="/" element={
          <QuemSomos titulo={conteudo.titulo} texto={conteudo.texto} caminhoImg={conteudo.img} />
        }/>
        <Route path="/sobre" element={<SobreNos/>}/>
    

      </Routes>
    </BrowserRouter>
      
  )
}

export default App
