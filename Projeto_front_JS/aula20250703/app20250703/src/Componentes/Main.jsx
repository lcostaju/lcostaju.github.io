import SecaoAutoridade from "./SecaoAutoridade";
import SecaoChamada from "./SecaoChamada";
import SecaoConversao from "./SecaoConversao";
import SecaoDescricao from "./SecaoDescricao";
import SecaoFAQ from "./SecaoFAQ";
import SecaoProvaSocial from "./SecaoProvaSocial";

function Main() {
    return ( 
        <main>
            <SecaoChamada/>
            <SecaoDescricao/>
            <SecaoAutoridade/>
            <SecaoProvaSocial/>
            <SecaoConversao/>
            <SecaoFAQ/>
        </main>
     );
}

export default Main;