import { useState } from "react";

function Formulario3(){
    const [nome, setNome] = useState("");
    const [nomeOut, setNomeOut] = useState("");

    function mostrarValor(){
        setNomeOut(nome);
    }
        return (
            <>
                <h2>Formulário 3</h2>
                <form action="">
                    <label htmlFor="">Nome:</label>
                    <input type="text" onChange={(e)=>setNome(e.target.value)} />
                    <input type="button" value="Mostrar" onClick={mostrarValor} />
                </form>
                <p>{nomeOut}</p>
                <hr />
            </>
    
        );
}


export default Formulario3;