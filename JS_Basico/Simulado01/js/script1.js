window.addEventListener("DOMContentLoaded",function(){

    var txtNome = this.document.getElementById("txtNome");
    var txtIdade = this.document.getElementById("txtIdade");
    var selPassatempo = this.document.getElementById("selPassatempo");
    var btnVerOp = this.document.getElementById("btnVerOp");

    var objPerfil = {escolha:"",
        nome:""
    };

    btnVerOp.addEventListener("click",function(){
        if(txtNome.value == '' || txtIdade.value == '' || selPassatempo.value == '')
            alert("Todos os campos devem ser preenchidos")
        else if(txtIdade.value < 1 || txtIdade.value > 130){
            alert("A idade deve estar entre 1 e 130");
        }else{
            objPerfil.escolha = selPassatempo.value;
            objPerfil.nome = txtNome.value;
            localStorage.setItem("perfil",JSON.stringify(objPerfil));
            window.location.href ="aguarde.html";
        }
    });

});