var table = {
    "Head":[{"cod":"Código","disc":"Disciplina"}],
    "colums":[{"cod":"P2","disciplina":"Projeto Sistema Web MVC e SQL"},
    {"cod":"AP","disciplina":"Algoritmos e Programação"},
    {"cod":"POO1","disciplina":"Programação Orientada a Objetos 1"},
    {"cod":"FBD","disciplina":"Fundamentos de Banco de Dados"},
    {"cod":"JSB","disciplina":"JavaScript Básico"}
]};


document.write("<table>");
document.write("<tr>");
    document.write(`<th>${table.Head[0].cod}</th>`);
    document.write(`<th>${table.Head[0].disc}</th>`);
    document.write("</tr>");
for (i = 0; i < table.colums.length; i++) {
    document.write("<tr>");
    document.write(`<td>${table.colums[i].cod}</td>`);
    document.write(`<td>${table.colums[i].disciplina}</td>`);
    document.write("</tr>");
}

document.write("</table>")