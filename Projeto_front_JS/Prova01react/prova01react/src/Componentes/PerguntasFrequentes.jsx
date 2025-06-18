import { useEffect, useState } from "react";
import style from "./Perguntas.module.css";

function PerguntasFrequentes() {

    const [faqs,setFaqs] = useState(null);

    useEffect(
        ()=>{
            fetch('https://wilton-filho.github.io/PFJS-GitHub/React/projeto/json/faqprova.json')
            .then(response => response.json())
            .then(dados => setFaqs(dados.faqs))
        },[]
    )

    function showFaqs(){
        return(
            <div>
                {faqs.map(faq =><div> <p>{faq.pergunta}</p> <p>{faq.resposta}</p> </div>)}
            </div>
        )
    }

    return ( 
        <section className={style.section}>
            <h2>Perguntas Frequentes</h2>
            {
                faqs && showFaqs()
            }
        </section>
     );
}

export default PerguntasFrequentes;