import { useState } from "react";

function Formulario4() {

    // const [nome, setNome] = useState("Informe acima um nome válido");
    // const [email, setEmail] = useState("Inform acima um email válido");
    const [form, setForm] = useState(
        {
            nome: "",
            email: ""
        }
    )

    const [formOut, setFormOut] = useState(null)

    function updateForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function mostrar() {
        const {nome,email} = form;

        if(!nome.trim()){
            alert("Nome vazio")
            return;
        }

        if(!email.trim()){
            alert("Email vazio")
            return;
        }

        setFormOut({ ...form })
    }
    return (
        <>
            <h2>Formulario4</h2>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" onChange={(e) => updateForm(e)} />
                <label htmlFor="">Email:</label>
                <input type="email" name="email" onChange={(e) => updateForm(e)} />

                <input type="button" value="Mostrar" onClick={mostrar} />
            </form>
            {
                formOut && (
                    <>
                        <p>Nome:{formOut.nome} </p>
                        <p>Email:{formOut.email}</p>
                    </>
                )
            }

            <hr />
        </>
    );
}

export default Formulario4;