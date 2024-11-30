var txtUser = document.getElementById('txtUser');
var txtPwd = document.getElementById('txtPwd');
var btnCadastrar = document.getElementById('btnCadastrar');



function checkUser(username, users) {
    for (let i in users)
        if (users[i].username == username)
            return true;
    return false;
}

btnCadastrar.addEventListener('click', function () {
    if(txtUser.value == "" || txtPwd.value == ""){
        alert('Preencha todos os campos');
        return;
    }

    if(txtPwd.value.length < 5){
        alert('Senha inválida. Informe uma senha contendo pelo menos 5 caracteres.');
        return;
    }

    var newUser = {
        username: txtUser.value,
        password: txtPwd.value
    };

    //1a situacao: cadastrar a chave do localStorage
    var users = localStorage.getItem('users');

    if (!users)
        localStorage.setItem('users', JSON.stringify([newUser]));
    else {

        if (checkUser(newUser.username, JSON.parse(users))) {
            alert('Usuário já existente. Tente outro.');
        } else {
            users = JSON.parse(users);
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Usuário cadastrado com sucesso');
            txtUser.value = '';
            txtPwd.value = '';
        }
    }


});