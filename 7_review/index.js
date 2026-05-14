console.log("Hello, World!");

const movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
  },
  {
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genre: "Fantasy",
    year: 2003,
    rating: 9.6,
  },
];

//filtrar por genero y mostrar solo la plicula de crimen
function filterByGenre(genre) {
  const filteredMovies = movies.filter((movie) => movie.genre === genre);

  console.log(`${genre} Movies:`);

  filteredMovies.forEach((movie) => console.log(movie.title));

  return filteredMovies;
}

// Ejemplos
filterByGenre("Crime");
filterByGenre("Drama");
filterByGenre("Action");

///ordenar por puntuacion de mayor a menor
function sortMoviesByRating() {
  const sortedMovies = movies.sort((a, b) => b.rating - a.rating);

  console.log("\nMovies sorted by rating:");

  sortedMovies.forEach((movie) =>
    console.log(`${movie.title}: ${movie.rating}`),
  );

  return sortedMovies;
}

//DOM
const ordenarButton = document.querySelector("#ordenar-button");
const peliculasContainer = document.querySelector("#peliculaTemplate");
const peliculasList = document.querySelector("#peliculas");

function renderList(arr) {
  arr.forEach((movie) => {
    const clone = peliculasContainer.content.cloneNode(true);
    clone.querySelector(".title").textContent = movie.title;
    clone.querySelector(".genre").textContent = movie.genre;
    clone.querySelector(".year").textContent = movie.year;
    clone.querySelector(".rating").textContent = movie.rating;

    peliculasList.appendChild(clone);
  });
}

renderList(movies);

///muestra las peliculas ordenadas por puntuacion al hacer click en el boton
ordenarButton.addEventListener("click", () => {
  const sorted = sortMoviesByRating();
  peliculasList.innerHTML = "";
  renderList(sorted);
});
