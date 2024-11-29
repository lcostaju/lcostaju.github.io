//Mapeamento componentes pagina index.html
var txtUsuario = document.getElementById("txtUsuario");
var txtSenha = document.getElementById("txtSenha");
var btnEntrar = document.getElementById("btnEntrar");
var btnLimpar = document.getElementById("btnLimpar");




btnLimpar.addEventListener("click",function(){
    txtUsuario.value = "";
    txtSenha.value = "";
});

btnEntrar.addEventListener("click",function(){
    var usuario = txtUsuario.value;
    if(txtUsuario.value == "" || txtSenha.value == ""){
        alert("Informe usuário e senha")
    }else if(usuario.toLowerCase() == "visitante"){
        window.location.href = "visitante.html"
    }else{
        window.location.href = "construcao.html";
    }
});


