import Apresentacao from "../Apresentacao";
import Boxes from "./Boxes/Boxes";
import style from './SecaoInformacao.module.css';

export default function SecaoInformacao() {
    return (
        <section className={style.secaoInformacao}>
            <Apresentacao titulo="Acesso a Informação" paragrafo="Veja dados de transparência e governança"/>
            <Boxes/>
        </section>
    )
}