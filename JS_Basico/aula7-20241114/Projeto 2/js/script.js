var txtNome = document.getElementById("txtNome");
var txtSobrenome = document.getElementById("txtSobrenome");
var btnExibe = document.getElementById("btnExibe");
var txtNomCompleto = document.getElementById("txtNomCompleto");

btnExibe.addEventListener("click",function(){;
    txtNomCompleto.value = `${txtNome.value} ${txtSobrenome.value}`;
})