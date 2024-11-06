var num = prompt("Informe um nomero");
var intNum = parseInt(num);

document.write('<table>');
document.write('<thead><tr><th>Base decimal</th><th>Base binária</th><th>Base hexadecimal</th></tr></thead>')
document.write('<tbody>')
for(i=0 ; i<=num; i++){
    document.write(`<tr><td>${i}</td><td>${i.toString(2)}</td><td>${i.toString(16)}</td></tr>`)
}
document.write('</tbody>')
document.write('</table>');
