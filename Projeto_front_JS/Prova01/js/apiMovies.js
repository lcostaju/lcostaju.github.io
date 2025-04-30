

const getMovies = async () => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2I0NWZmOTMxNjUwZDRiNmU0NTY3ODY5OWM0MGQ0OSIsIm5iZiI6MTc0NjA1Mjc4Ny4zNjgsInN1YiI6IjY4MTJhNmIzNDg1Yjc2NmVkZGE0OTAwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GQ-DtlWH7og8YO5U0GeQjBeXknz3YEkk7jSDwtAzclE'
        }
      };
      
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      const data = await response.json();
      //console.log(data.results)
        // .then(res => res.json())
        // .then(res => console.log(res))
        // .catch(err => console.error(err));
        return data;
}

export default getMovies;