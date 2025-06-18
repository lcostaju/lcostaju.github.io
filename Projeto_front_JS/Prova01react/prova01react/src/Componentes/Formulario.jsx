import { useState } from "react";

function Formulario() {

    const [texto, setTexto] = useState("");

    function enviar(){
        if(!texto.trim())
            alert("Email em branco. Favor informá-lo")
        else
            alert("Email informado. OK!")

    }
    return ( 
        <form action="">
            <label htmlFor="">Email</label>
            <input type="email" onChange={(e)=>setTexto(e.target.value)}/>
            <input type="button" value="Enviar" onClick={enviar}/>
            <p>{texto}</p>
        </form>
     );
}

export default Formulario;