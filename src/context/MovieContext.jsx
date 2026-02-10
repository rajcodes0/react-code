import {  useState, useContext, useEffect } from "react";

import { MovieContext } from "./MovieContextA.jsx";

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) setFavourites(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const addtoFavourites = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };
  const removeFavourites = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };
  const isFavourites = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value = {
    favourites,
    addtoFavourites,
    removeFavourites,
    isFavourites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
