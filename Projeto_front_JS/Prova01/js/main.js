import { getMovies, getGenres } from "./apiMovies.js";

window.addEventListener("DOMContentLoaded", () => {
    showMovies();
});

const showMovies = async () => {
    const cardContainer = document.getElementById("cardContainer");
    const dataMovies = await getMovies();
    const dataGenres = await getGenres();

    let moviesInfo = [];

    dataMovies.results.forEach(element => {
        let auxObj = {};

        auxObj.title = element.title;
        auxObj.poster = `https://image.tmdb.org/t/p/w200${element.poster_path}`;
        auxObj.genres = element.genre_ids.map(id => {
            const genre = dataGenres.genres.find(g => g.id === id);
            return genre ? genre.name : null;
        });
        auxObj.overview = element.overview;
        auxObj.avaliacao = element.vote_average;
        auxObj.date = formatarData(element.release_date);
        auxObj.id = element.id;

        moviesInfo.push(auxObj);

    });

    let movies = moviesInfo.slice(0, 10);

    // Aqui você pode usar os dados para renderizar os elementos na página
    movies.forEach(movie => {
        const card = document.createElement("div");
        //Insere Titulo
        const title = document.createElement("p");
        title.innerHTML = movie.title;
        card.appendChild(title);
        //Insere imagem
        const img = document.createElement("img");
        img.src = movie.poster;
        img.alt = movie.title;
        card.appendChild(img);

        //Insere Generos
        const genres = document.createElement("p");
        genres.innerHTML = `Genêros: ${movie.genres.join(", ")}`;
        card.appendChild(genres);
        //Insere data de lançamento
        const releaseDate = document.createElement("p");
        releaseDate.innerHTML = `Data de lançamento: ${movie.date}`;
        card.appendChild(releaseDate);
        //Insere Avaliação
        const rating = document.createElement("p");
        rating.innerHTML = `Avaliação: ${movie.avaliacao.toFixed(2)}/10`;
        card.appendChild(rating);
        card.className = "movieCard";

        cardContainer.appendChild(card);

    });
}

const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    const opcoes = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
};


