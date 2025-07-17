import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Header from './components/Header'
import Login from './components/Login/Login'
import Calculadora from './components/Calculadora/Calculadora'
import Conversor from './components/Conversor/Conversor'

function App() {
  return(
<BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/calculadora" element = {<Calculadora/>}/>
      <Route path="/conversor" element = {<Conversor/>}/>
    </Routes>
    </BrowserRouter>  )
}

export default App
