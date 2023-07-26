import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <h2>{movie.title}</h2>
            <p>Time: {movie.time} minutes</p>
            <div>
              <ul>
                {movie.genres.map((genre, genreIndex) => (
                  <li key={genreIndex}>{genre}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
