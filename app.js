(async function () {
    const response= await fetch("./data.json") ;
    const myMovies= await response.json(); 
    
    const myGenre = document.getElementById("genre");
    const myYear = document.getElementById("year");
    const myLanguage = document.getElementById("language");
    const myRating = document.getElementById("rating");

    function userSearch() {
        const genre = myGenre.value.toLowerCase();
        const year = myYear.value;
        const language = myLanguage.value.toLowerCase();
        const rating = myRating.value;
        const result = myMovies.filter(function (movie) {
            return (movie.genre.join(" ").toLowerCase().includes(genre) ||
            movie.release_date.toLowerCase().includes(year) ||
            movie.original_language.toLowerCase().includes(language) ||
            movie.vote_average > myRating);
        })
        console.log(result);
    }
    userSearch();
})();