import { useState } from 'react'
import Menu from './Componentes/Menu'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FaleConosco from './Componentes/FaleConosco';
import Main from './Componentes/Main';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element = {<Main/>}/>
      <Route path="/faleConosco" element = {<FaleConosco/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
