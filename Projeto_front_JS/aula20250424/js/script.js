import getCats from "./thecatapi.js";

window.addEventListener("DOMContentLoaded", () => {
    // const gatos = getCats();
    // console.log(gatos)
    const btnGatos = document.getElementById("btnGatos");
    btnGatos.addEventListener("click", showCats);

});

const showCats = async () => {
    showAlert("Processando. Aguarde...");
    const vetCats = await getCats();

    if (vetCats.length > 0) {
        //console.log(vetCats[0].url);
        const containerGatos = document.getElementById("containerGatos");
        vetCats.forEach(cat => {
            const img = document.createElement("img");
            const parag = document.createElement("p");
            parag.textContent = cat.breeds[0].temperament;
            img.className = "cat";
            img.alt = "gatinho";
            img.src = cat.url;
            containerGatos.appendChild(img);
            containerGatos.appendChild(parag);
        });

        showAlert("");
    } else {
        console.log("erro");
    }


}

const showAlert = (msg) => {
    document.getElementById("msg").innerHTML = msg;
}