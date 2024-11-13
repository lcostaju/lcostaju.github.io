function addVote(elemnt){
    var voto = parseInt(document.getElementById(elemnt).textContent);;
    voto++;
    document.getElementById(elemnt).innerHTML = voto;

}

document.getElementById("cd1").addEventListener("mouseover",function(){
    document.getElementById("cd1").style.backgroundColor = "green";
});

document.getElementById("cd2").addEventListener("mouseover",function(){
    document.getElementById("cd2").style.backgroundColor = "green";
});

document.getElementById("cd3").addEventListener("mouseover",function(){
    document.getElementById("cd3").style.backgroundColor = "green";
});

document.getElementById("cd4").addEventListener("mouseover",function(){
    document.getElementById("cd4").style.backgroundColor = "green";
});


document.getElementById("cd1").addEventListener("mouseleave",function(){
    document.getElementById("cd1").style.backgroundColor = "rgb(109, 210, 109)";
});

document.getElementById("cd2").addEventListener("mouseleave",function(){
    document.getElementById("cd2").style.backgroundColor = "rgb(109, 210, 109)";
});

document.getElementById("cd3").addEventListener("mouseleave",function(){
    document.getElementById("cd3").style.backgroundColor = "rgb(109, 210, 109)";
});

document.getElementById("cd4").addEventListener("mouseleave",function(){
    document.getElementById("cd4").style.backgroundColor = "rgb(109, 210, 109)";
});

document.getElementById("cd1").addEventListener("click",function(){
    addVote("vt1");
});

document.getElementById("cd2").addEventListener("click",function(){
    addVote("vt2");
});
document.getElementById("cd3").addEventListener("click",function(){
    addVote("vt3");
});
document.getElementById("cd4").addEventListener("click",function(){
    addVote("vt4");
});