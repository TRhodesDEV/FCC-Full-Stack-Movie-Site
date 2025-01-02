const API_KEY = process.env.TMDB_API_KEY;
const APILINK ='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + API_KEY + '&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "htpps://api.themoviedb.org/3/search/movie?&api_key=" + API_KEY + "&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK)
function returnMovies(url) {
    fetch(url).then(res => res.json())
    .then(function(data))
        console.log(data.results);
        data.results.forEach(element => {
            const div_card = document.createElement('div');
            const div_row = document.createElement('div');
            const div_column = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h3');
            const center = document.createElement('center');

            title.innerHTML = `${element.title}`;
            image.src = IMG_PATH + element.poster_path;


            div_card.appendChild()
        });         
}
