const genreSelect = document.getElementById("genre");

const recommendBtn = document.getElementById("recommendBtn");

const moviesContainer = document.getElementById("moviesContainer");


recommendBtn.addEventListener("click", () => {

    const selectedGenre = genreSelect.value;

    moviesContainer.innerHTML = "";

    if(selectedGenre === ""){

        moviesContainer.innerHTML = `
            <p style="text-align:center;">
                Please select a genre
            </p>
        `;

        return;
    }


    const filteredMovies = movies.filter(movie =>
        movie.genre === selectedGenre
    );


    if(filteredMovies.length === 0){

        moviesContainer.innerHTML = `
            <p style="text-align:center;">
                No movies found
            </p>
        `;

        return;
    }


    filteredMovies.forEach(movie => {

        moviesContainer.innerHTML += `

        <div class="movie-card">

            <img src="${movie.image}">

            <div class="movie-info">

                <h2>${movie.title}</h2>

                <p class="genre">
                    🎭 ${movie.genre}
                </p>

                <p class="rating">
                    ⭐ ${movie.rating}
                </p>

            </div>

        </div>

        `;

    });

});