import { useState } from "react";
import emailjs from "@emailjs/browser";

function Formulario5() {

    // const [nome, setNome] = useState("Informe acima um nome válido");
    // const [email, setEmail] = useState("Inform acima um email válido");

    const [msgEnvio, setMsgEnvio] = useState("");
    const [form, setForm] = useState(
        {
            nome: "",
            email: ""
        }
    )

    const [formOut, setFormOut] = useState(null)

    const templateParams = {
        from_name: form.nome,
        from_email: form.email,
        message: "Email do aplicativo"
    };

    function updateForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function mostrar() {
        const { nome, email } = form;

        if (!nome.trim()) {
            alert("Nome vazio")
            return;
        }

        if (!email.trim()) {
            alert("Email vazio")
            return;
        }

        // setFormOut({ ...form })

        emailjs
            .send("service_22jk38i","template_64o7lcv",templateParams,"5ehxXMiuqZ5LABU17")
            .then(
                function (response) {

                    setMsgEnvio("Email enviado com sucesso!");
                },
                function (error) {
                    setMsgEnvio("ERRO ao enviar email!");
                }
            );
        setMsgEnvio("Aguarde um instante! Enviando ...");
    }
    return (
        <>
            <h2>Formulario5</h2>
            <form action="">
                <label htmlFor="">Nome:</label>
                <input type="text" name="nome" onChange={(e) => updateForm(e)} />
                <label htmlFor="">Email:</label>
                <input type="email" name="email" onChange={(e) => updateForm(e)} />

                <input type="button" value="Mostrar" onClick={mostrar} />
            </form>
            <p>{msgEnvio}</p>

            <hr />
        </>
    );
}

export default Formulario5;