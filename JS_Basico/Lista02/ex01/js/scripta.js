var diaSemana = new Date().getDay();
var diaStr = '';
switch (diaSemana) {
    case 0:
        diaSemana = 'domingo';
        break;
    case 1:
        diaSemana = 'segunda - feira';
        break;
    case 2:
        diaSemana = 'terça - feira';
        break;
    case 3:
        diaSemana = 'quarta - feira';
        break;
    case 4:
        diaSemana = 'quinta - feira';
        break;
    case 5:
        diaSemana = 'sexta - feira'; 
        break;              
    default:
        diaSemana = 'sabado';
        break;
}

document.write(`Hoje é ${diaSemana}`);

