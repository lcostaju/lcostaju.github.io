const getCats = async () =>{
    try {
        //const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_QGdr9JKsnfP30cVrejjHjYk7Swi8Io8BQSmzWobmGM1v8681l3zQDwx0PLN6fLWq');

        const data = await response.json();
        //console.log(data[0].url);
        return data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export default getCats;