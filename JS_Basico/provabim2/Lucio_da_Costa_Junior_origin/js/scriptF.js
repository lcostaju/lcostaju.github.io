window.addEventListener("DOMContentLoaded",function(){
    var container = this.document.getElementById("container");

    var nomeCompleto = this.localStorage.getItem("nomeCompleto");

    var labelNome = this.document.createElement("label");
    labelNome.innerHTML = "Nome completo:";

    container.appendChild(labelNome);

    var txtNome = this.document.createElement("input");
    txtNome.setAttribute("type","text");
    txtNome.value = nomeCompleto;

    container.appendChild(txtNome);

    var pNome = this.document.createElement("p");
    pNome.innerHTML = `${labelNome.innerHTML} ${nomeCompleto}`;

    container.appendChild(pNome);

    var pQtdChar = this.document.createElement("p");
    pQtdChar.innerHTML = `Quantidade de caracteres = ${nomeCompleto.length}`;

    container.appendChild(pQtdChar);

    var pFirst = this.document.createElement("p");
    pFirst.innerHTML = `Primeira palavra do texto = ${nomeCompleto.split(" ")[0]}`;

    container.appendChild(pFirst);

    var pLast = this.document.createElement("p");
    pLast.innerHTML = `Última palavra do texto = ${nomeCompleto.split(" ")[nomeCompleto.split(" ").length - 1]}`;

    container.appendChild(pLast);

    var pQtdPlvrs = this.document.createElement("p");
    pQtdPlvrs.innerHTML = `Quantidade de palavras contidas no texto = ${nomeCompleto.split(" ").length}`;

    container.appendChild(pQtdPlvrs);

    
});