import Apresentacao from "./Apresentacao";
import CardIftm from "./CardIftm";
function SecaoServicos(){
    return(
        <section>
        <Apresentacao titulo="Titulo1" subtitulo="subtitulo1"/>
        <CardIftm texto="Texto da box"/>
        <CardIftm texto="Cursos superiores"/>

        </section>
    );
}

export default SecaoServicos;