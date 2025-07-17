import { useState } from "react";
import '../../assets/styles/styles.css';

function Login() {
    const [senha,setSenha] = useState("");
    const [confSenha,setConfSenha] = useState("");

    function enviar(){
        if(!senha.trim() || !confSenha.trim()){
            alert("Senha e/ou confirmar senha esão em branco. Informeos para continuar.")
        }else if(senha.trim() != confSenha.trim()){
            alert("Senha e/ou confirmar senha são diferentes. Tente novamente!")
        }else{
            alert("Senha válida!");
        }
    }
    return ( 
        <form className="login">
            <p>Acesso ao sistema</p>
            <input type="password" placeholder="Senha" onChange={(e)=>setSenha(e.target.value)}/>
            <input type="password" placeholder="Confirmar Senha" onChange={(e)=>setConfSenha(e.target.value)}/>
            <button value="Entrar" onClick={enviar}>Entrar</button>
        </form>
     );
}

export default Login;