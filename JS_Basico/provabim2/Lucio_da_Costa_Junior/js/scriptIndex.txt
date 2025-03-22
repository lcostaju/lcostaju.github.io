window.addEventListener("DOMContentLoaded", function () {
    var txtNome = this.document.getElementById("txtNome");
    var txtSobrenome = this.document.getElementById("txtSobrenome");
    var txtSenha = this.document.getElementById("txtSenha");
    var selSexo = this.document.getElementById("selSexo");
    var btnEnviar = this.document.getElementById("btnEnviar");

    btnEnviar.addEventListener("click", function () {

        if (txtNome.value == "" || txtSobrenome.value == ""){
            alert("Favor informar o NOME e SOBRENOME");
            return;
        }
            

        var padraoSenha = /^(REC|RECUPERAÇÃO)-Jsbásico:\(1\)[2-5]{2}$/;;
        //REC-Jsbásico:(1)23
        if(!padraoSenha.test(txtSenha.value)){
            alert("Senha fora do padrão");
            return;
        }
        var nomeCompleto = `${txtNome.value} ${txtSobrenome.value}`;
        localStorage.setItem("nomeCompleto",nomeCompleto);
        window.location.href = selSexo.value+".html"; 


    });
});