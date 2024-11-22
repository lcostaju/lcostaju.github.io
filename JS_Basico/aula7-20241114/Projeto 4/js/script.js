var txtPrimeiro = document.getElementById("txtPrimeiro");
var txtSegundo = document.getElementById("txtSegundo");
var txtResultado = document.getElementById("txtResultado");
var btnIgual = document.getElementById("btnIgual");
var selOp = document.getElementById("selOp");

btnIgual.addEventListener("click", function () {
    // switch (selOp.value) {
    //     case "+":
    //         txtResultado.value = parseFloat(txtPrimeiro.value) + parseFloat(txtSegundo.value);
    //         break;
    //     case "-":
    //         txtResultado.value = parseFloat(txtPrimeiro.value) - parseFloat(txtSegundo.value);
    //         break;
    //     case "*":
    //         txtResultado.value = parseFloat(txtPrimeiro.value) * parseFloat(txtSegundo.value);
    //         break;
    //     case "/":
    //         txtResultado.value = parseFloat(txtPrimeiro.value) / parseFloat(txtSegundo.value);
    //         break;        
    //     default:
    //         alert("Selecione uma operação");
    //         break;
    //}
    txtResultado.value = eval(txtPrimeiro.value + selOp.value + txtSegundo.value);
})