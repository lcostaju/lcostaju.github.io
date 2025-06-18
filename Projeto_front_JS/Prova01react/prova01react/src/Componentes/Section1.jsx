import Descricao from "./Descricao";
import Ilustracao from "./Ilustracao";
import style from "./Section1.module.css";

function Section1() {
    return (
        <section className={style.section1}>
            <div>
                <Descricao subTitulo="SERRA DA CANASTRA VIVA ESSA AVENTURA NAS ALTURAS" paragrafo="Supere limites, conecte-se com outras pessoas e viva experiências inesquecíveis na Serra da Canastra." />
                <input type="Button" value="Quero conhecer" />
            </div>
            <div>
                <Ilustracao texto="Equipe super profissional , passa total segurança e prazer em cada encontro ." imagem='img1.jpg'/>
            </div>
        </section>
    );
}

export default Section1;