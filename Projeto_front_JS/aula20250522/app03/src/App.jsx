import HelloWorld from './components/HelloWorld';
import Apresentacao from './components/Apresentacao';
import CardIftm from './components/CardIftm';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
 return (
   <>
   {/* <Apresentacao titulo="titulo1" subtitulo="subtitulo1"/>
   <Apresentacao titulo="titulo2" subtitulo="subtitulo2"/>
   <CardIftm texto="Eleições do conselho superior"/>
   <CardIftm texto="Estude no IFTM"/>
   <CardIftm texto="Editais"/> */}
   <Header nome="Sou o header da pagina"/>
   <Main nome="Sou o main da pagina"/>
   <Footer nome="Sou o footer da pagina"/>

   </>
    
    
 );
}

export default App
