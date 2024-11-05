var texto = prompt("Informe um texto");
var arrText = texto.split(" ");
var prPlvra = arrText[0];
var ulPlvra = arrText[arrText.length-1];
var junc = prPlvra.concat(" ",ulPlvra);

document.write(`${junc}`);