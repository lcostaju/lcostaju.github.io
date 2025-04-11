const reqAjax = () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        let response = JSON.parse(this.responseText);
        console.log(`Nome:${response.nome}, Idade:${response.idade} `);
    };
    xhttp.open("GET", "https://raw.githubusercontent.com/lcostaju/lcostaju.github.io/main/Projeto_front_JS/Lista03_a/dados.json");
    xhttp.send();
};

export default reqAjax;