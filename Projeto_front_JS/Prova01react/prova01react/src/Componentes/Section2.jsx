import Descricao from "./Descricao";
import Formulario from "./Formulario";
import Ilustracao from "./Ilustracao";
import style from "./Section2.module.css";

function Section2() {
    return ( 
        <section className={style.section2}>
            <div>
                <Ilustracao texto="Preencha os dados e venha viver uma experiência só sua." imagem='img2.jpeg'/>
            </div>
            <div>
                <Descricao subTitulo="Essa aventura começa com um passo – e um formulário." paragrafo="Usamos equipamentos certificados e guias especializados."/>
                <Formulario/>
            </div>
        </section>
     );
}

export default Section2;