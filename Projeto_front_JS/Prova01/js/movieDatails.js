import { getMovieDatails } from "./apiMovies.js";

window.addEventListener("DOMContentLoaded", async () => {
    const urlId = new URLSearchParams(window.location.search);
    const filmeId = urlId.get('id');
    showMovie(filmeId);
});


const showMovie = async (id) => {
    const movieContainer = document.getElementById("movieContainer");
    const titleMovie = document.getElementById("titleMovie");
    const dataMovie = await getMovieDatails(id);
    // console.log(dataMovie);

    //Titulo
    titleMovie.innerHTML = `${dataMovie.title} (${dataMovie.release_date.slice(0,4)}) `;

    //Imagem
    const imgMovie = document.createElement("div");
    imgMovie.className = "imgMovie";
    movieContainer.appendChild(imgMovie);

    var bannerFilme = document.createElement("img");
    var url = "https://image.tmdb.org/t/p/w300";
    bannerFilme.setAttribute("src", `${url}${dataMovie.poster_path}`);

    imgMovie.appendChild(bannerFilme);

    //Div detalhes do filme
    const divMovie = document.createElement("div");
    divMovie.className = "divMovie";
    //background
    divMovie.style.backgroundImage = `url(${url}${dataMovie.backdrop_path})`;
    divMovie.style.backgroundSize = "cover";
    divMovie.style.backgroundPosition = "center"; 
    //
    movieContainer.appendChild(divMovie);
    //Titulo original
    const titleOriginal = document.createElement("h3");
    titleOriginal.innerHTML = "Titulo original:";
    divMovie.appendChild(titleOriginal);

    const originalTitle = document.createElement("p");
    originalTitle.innerHTML = `${dataMovie.original_title}`;
    divMovie.appendChild(originalTitle);
    //Generos
    const titleGenre = document.createElement("h3");
    titleGenre.innerHTML = "Gêneros:";
    divMovie.appendChild(titleGenre);
    const genres = document.createElement("p");
    genres.innerHTML = `${dataMovie.genres.map(genre => genre.name).join(", ")}`;
    divMovie.appendChild(genres);

    //Data de lançamento
    const titleData = document.createElement("h3");
    titleData.innerHTML = "Data de lançamento:";
    divMovie.appendChild(titleData);

    const dateRealese = document.createElement("p");
    dateRealese.innerHTML = `${formatarData(dataMovie.release_date)}`;
    divMovie.appendChild(dateRealese);
    //Idiomas do filme
    const titleIdiomas = document.createElement("h3");
    titleIdiomas.innerHTML = "Idiomas no filme:";
    divMovie.appendChild(titleIdiomas);

    const languagesmovie = document.createElement("p")
    languagesmovie.innerHTML = dataMovie.spoken_languages.map(idioma => idioma.english_name).join(",");
    divMovie.appendChild(languagesmovie);

    //Avaliação dos usuários
    const titleAva = document.createElement("h3");
    titleAva.innerHTML = "Avaliação dos usuários:";
    divMovie.appendChild(titleAva);

    const avaliacaoUser = document.createElement("p");
    avaliacaoUser.innerHTML = `${dataMovie.vote_average.toFixed(2)}/10`;
    if(dataMovie.vote_average > 7)
        avaliacaoUser.style.color = "green";
    else if(dataMovie.vote_average >5 && dataMovie.vote_average < 7 )
        avaliacaoUser.style.color = "yellow";
    else
    avaliacaoUser.style.color = "red";
    
    divMovie.appendChild(avaliacaoUser);

    //tagline
    const tagline = document.createElement("p");
    tagline.className = "tagline";
    tagline.innerHTML = dataMovie.tagline?`"${dataMovie.tagline}"`:"";
    divMovie.appendChild(tagline);

    //sinopse
    const titleSinopse = document.createElement("h3");
    titleSinopse.innerHTML = "Sinopse:";
    divMovie.appendChild(titleSinopse);
    const sinopse = document.createElement("p");
    sinopse.innerHTML = dataMovie.overview;
    divMovie.appendChild(sinopse);

    console.log(dataMovie.videos.results);
    //trailer
    const trailer = document.createElement("iframe");
    trailer.id = "movieTrailer";
    

    //
    // const emptytrailer = document.createElement("p");
    //     emptytrailer.innerHTML = "Não foi encontrado trailer para esse filme";
    //     divMovie.appendChild(emptytrailer);
    //

    
    
    if (dataMovie.videos && dataMovie.videos.results && dataMovie.videos.results.length > 0) {
        
        const trailerKey = dataMovie.videos.results[0].key;
        trailer.setAttribute("src", `https://www.youtube.com/embed/${trailerKey}`);
        document.getElementById("trailerMovie").appendChild(trailer);
    } else {
        // alert("teste");
        const emptytrailer = document.createElement("p");
        emptytrailer.innerHTML = "Não foi encontrado trailer para esse filme";
        document.getElementById("trailerMovie").appendChild(emptytrailer);

        const imgNotFound = document.createElement("img");
        imgNotFound.setAttribute("src","img/not_found.jpg");
        document.getElementById("trailerMovie").appendChild(imgNotFound);
    }

    






}

const formatarData = (dataISO) => {
    const data = new Date(dataISO);
    const opcoes = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Intl.DateTimeFormat('pt-BR', opcoes).format(data);
};