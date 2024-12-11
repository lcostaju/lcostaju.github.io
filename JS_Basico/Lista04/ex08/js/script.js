function gerRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vetLetrasMin() {
    var letras = [];
    for (let i = 0; i <= 25; i++) {
        letras[i] = String.fromCharCode(i + 97); // Letras minúsculas
    }
    return letras;
}

function vetLetrasMcla() {
    var letras = [];
    for (let i = 0; i <= 25; i++) {
        letras[i] = String.fromCharCode(i + 65); // Letras maiúsculas
    }
    return letras;
}

function vetNums() {
    var nums = [];
    for (let i = 0; i <= 9; i++) {
        nums[i] = String.fromCharCode(i + 48); // Números de 0 a 9
    }
    return nums;
}

function randChar() {
    var letrasMin = vetLetrasMin();
    var letrasMcla = vetLetrasMcla();
    var nums = vetNums();

    var poss = gerRandomNum(0, 2); // Escolhe entre 0, 1 e 2 para determinar o tipo de caractere

    switch (poss) {
        case 0:
            return letrasMin[gerRandomNum(0, 25)]; // Escolhe uma letra minúscula aleatória
        case 1:
            return letrasMcla[gerRandomNum(0, 25)]; // Escolhe uma letra maiúscula aleatória
        case 2:
            return nums[gerRandomNum(0, 9)]; // Escolhe um número aleatório
        default:
            return ''; // Caso não entre em nenhum caso (mas não deveria acontecer)
    }
}

var pss = ''; // Variável onde a senha será armazenada

for (j = 0; j < 8; j++)  // Gerar 8 caracteres
    pss += randChar(); // Adiciona um caractere aleatório por vez


console.log(pss); // Exibe a senha gerada
document.write(pss); // Exibe a senha gerada na página
