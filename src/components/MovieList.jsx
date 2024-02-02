import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./styles/MovieList.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <div key={movie.imdbId} className="movie-card">
          <img src={movie.Poster} alt={movie.Title} className="movie-img" />
          <div className="movie-info">
            <div className="movie-title">{movie.Title}</div>
            <div className="movie-details">
              <FontAwesomeIcon icon={faStar} color="#f39c12" />
              {movie["IMDB Score"]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
