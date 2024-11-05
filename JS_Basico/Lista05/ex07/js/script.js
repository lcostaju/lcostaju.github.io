var text = prompt("Informe um texto:");
var letra = prompt("Informe uma letra:");
var arrText = text.split(" ");

for(var i in arrText){
    if(arrText[i].charAt(0) == letra)
        document.write(`<p>${arrText[i]}</p>`)
}