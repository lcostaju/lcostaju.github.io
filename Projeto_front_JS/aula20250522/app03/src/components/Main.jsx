import SecaoServicos from "./SecaoServicos";
import SecaoCursos from "./SecaoCursos";
function Main({nome}){
    return(
        <main>
        <p>{nome}</p>
        <SecaoServicos/>
        <SecaoCursos/>
        </main>
        
    )
}

export default Main;