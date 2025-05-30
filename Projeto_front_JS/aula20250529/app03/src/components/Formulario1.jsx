import { useState } from "react";


function Formulario1() {
    const [nome, setNome] = useState("");
    return (
        <>
            <h2>Formulário 1</h2>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={(e)=>setNome(e.target.value)} />
            </form>
            <p>{nome}</p>
            <hr />
        </>

    );
}

export default Formulario1;