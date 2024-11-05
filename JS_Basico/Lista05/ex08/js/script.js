var text = prompt("Digite um texto:");
var arrText = text.split(" ");
var letras = [];
var arrTextOrder = arrText.sort();

for (var i in arrTextOrder)
    letras.push(arrTextOrder[i].charAt(0));


const unicLetras = [...new Set(letras)];

for (var j in unicLetras) {
    document.write(`<p>Palavras iniciadas com a letra ${unicLetras[j]}</p>`)
    document.write(`<ul>`)
    for (var k in arrTextOrder) {
        if (unicLetras[j] == arrTextOrder[k].charAt(0))
            document.write(`<li>${arrTextOrder[k]}</li>`)
    }
    document.write("</ul>")
}