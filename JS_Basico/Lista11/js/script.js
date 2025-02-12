window.addEventListener("DOMContentLoaded", function() {

   

function checkUser(username, users) {
    for (let i in users)
        if (users[i].username == username)
            return true;
    return false;
}

function checkPass(password, users) {
    for (let i in users)
        if (users[i].password == password)
            return true;
    return false;
}

var txtUser = document.getElementById("txtUser");
var txtPwd = document.getElementById("txtPwd");
var btnLogin = document.getElementById("btnLogin");


btnLogin.addEventListener("click", function() {
    var usersObj = JSON.parse(localStorage.getItem("users"));

    if(txtUser.value != "" && txtPwd.value != "") {
        if (checkUser(txtUser.value, usersObj) && checkPass(txtPwd.value, usersObj))
            window.location.href = "../Lista10/index.html";
        else
            alert("Usuário ou senha inválidos!");
        
        
    }
});
});