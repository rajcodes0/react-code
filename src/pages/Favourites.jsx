import React from "react";
import "../Css/Favorites.css"
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../Components/MovieCard";

function Favourites() {
const {favourites} = useMovieContext();
if(favourites){
  return  <div className="favorites">
    <h2>Your Favourites</h2>
    <div className="movies-grid">
          {favourites.map(
            (movie) =>
             (
                <MovieCard movie={movie} key={movie.id} />
              ),
          )}
        </div>
  </div>
}



  return (
    <div className="favorites-empty">
      <h2>No Favourites movies yet</h2>
      <p>start adding Movies to get favouites</p>
    </div>
  );
}

export default Favourites;
