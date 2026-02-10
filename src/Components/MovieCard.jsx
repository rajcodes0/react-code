import React from "react";
import "../Css/MovieCard.css";
import { useMovieContext } from "../context/MovieContext";
import Favourites from '../pages/Favourites';

function MovieCard({ movie }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const {isFavourites,addtoFavourites,removeFavourites}= useMovieContext()

  const Favourites = isFavourites(movie.id)
  function onFavouriteClick(e) {
    e.preventDefault();
    if(favourite,removeFavourites) =

   
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${movie.poster_path}`
              : "/placeholder.png"
          }
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className={`favorite-btn` ${favourite ? "active" : ""} onClick={onFavouriteClick}>
            ❤️
          </button>
        </div>
      </div>

      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
