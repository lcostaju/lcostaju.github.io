var sexo = document.getElementById("sexo");

sexo.addEventListener("change",function(){
    alert(sexo.options[sexo.selectedIndex].text);
});