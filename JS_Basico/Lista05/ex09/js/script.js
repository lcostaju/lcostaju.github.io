var text = prompt("Digite o texto:");
var revText = "";

for (var i = text.length-1;i>=0;i-- )
    revText += text.charAt(i);

revText == text?alert("o texto é palindromo"):alert("O texto não é palindromo")