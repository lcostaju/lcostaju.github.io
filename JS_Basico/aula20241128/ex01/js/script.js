var txtUser = document.getElementById('txtUser');
var txtPwd = document.getElementById('txtPwd');
var btnCadastrar = document.getElementById('btnCadastrar');


//var users = [{ name: "lucio", password: '123' }, { name: "maria", password: '123' }, { name: "joao", password: '123' }];

function checkUser(username, users) {
    for (let i in users)
        if (users[i].name == username)
            return true;
    return false;
}

btnCadastrar.addEventListener('click', function () {

    var newUser = {
        username: txtUser.value,
        password: txtPwd.value
    };

    //1a situacao: cadastrar a chave do localStorage
    var users = localStorage.getItem('users');

    if (!users)
        localStorage.setItem('users', JSON.stringify([newUser]));
    else {

        if (!checkUser(newUser.username, JSON.parse(users))) {
            alert('Usuário já cadastrado');
        } else {
            users = JSON.parse(users);
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
        }
    }


});