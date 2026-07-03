const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-btn");
const movieContainer = document.getElementById("movie-container");
const moviePoster = document.getElementById("movie-poster");
const movieDetails = document.getElementById("movie-details");
const similarMovieList = document.getElementById("similar-movie-list");

const apiKey = "d1396cd0";

searchButton.addEventListener("click", () => {

    const movieName = searchInput.value.trim();

    if (!movieName) {
        alert("Please enter a movie name.");
        return;
    }

    searchMovie(movieName);

});

async function searchMovie(movieName) {

    try {

        const url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        displayMovie(data);


    } catch (error) {

        console.error("Something went wrong:", error);

    }

}



function displayMovie(data){
const poster =
    data.Poster !== "N/A"
        ? data.Poster
        : "https://via.placeholder.com/300x450?text=No+Image";

moviePoster.innerHTML = `
    <img src="${poster}" alt="${data.Title}">
`;


movieDetails.innerHTML = `
    <h2>${data.Title}</h2>

    <p>⭐ <strong>IMDb:</strong> ${data.imdbRating}/10</p>

    <p>📅 <strong>Year:</strong> ${data.Year}</p>

    <p>🎭 <strong>Genre:</strong> ${data.Genre}</p>

    <p>⏱ <strong>Runtime:</strong> ${data.Runtime}</p>

    <p>🎬 <strong>Director:</strong> ${data.Director}</p>

    <p>👨‍🎤 <strong>Actors:</strong> ${data.Actors}</p>

    <p>🌍 <strong>Country:</strong> ${data.Country}</p>
`;
}