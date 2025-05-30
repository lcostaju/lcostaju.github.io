import { useState } from "react";

function Formulario2() {
    const[nome,setNome ] = useState("Informe acima um nome válido");
    const[email,setEmail] = useState("Inform acima um email válido");
    return (
        <>
            <h2>Formulario2</h2>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={(e)=>setNome(e.target.value)}/>
                <label htmlFor="">Email:</label>
                <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
            </form>
            <p>Nome:{nome} </p>
            <p>Email:{email}</p>
            <hr />
        </>
    );
}

export default Formulario2;