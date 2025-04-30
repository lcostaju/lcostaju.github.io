import getMovies from "./apiMovies.js";

window.addEventListener("DOMContentLoaded",()=>{
    showMovies();
});

const showMovies = async ()=>{
    const dataMoveis = await getMovies();
    console.log(dataMoveis);
}