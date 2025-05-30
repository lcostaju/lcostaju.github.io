import { useState } from "react";


function FormularioBonus() {
    const [nome, setNome] = useState("");
    const [nomeOut, setNomeOut] = useState("");

    const [email, setEmail] = useState("");
    const [emailOut, setEmailOut] = useState("");

    const [telefone, setTelefone] = useState("");
    const [telefoneOut, setTelefoneOut] = useState("");

    function mostrar(){
        setNomeOut(nome);
        setEmailOut(email);
        setTelefoneOut(telefone);
    }
    return (
        <>
            <h2>Formulario bônus</h2>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" onChange={(e) => setNome(e.target.value)} />
                <label htmlFor="">Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="">Telefone:</label>
                <input type="text" onChange={(e) => setTelefone(e.target.value)}/>
                <input type="button" value="Mostrar" onClick={mostrar}/>
            </form>
            <p>Nome:{nomeOut} </p>
            <p>Email:{emailOut}</p>
            <p>Telefone:{telefoneOut}</p>
            <hr />
        </>
    );
}

export default FormularioBonus;