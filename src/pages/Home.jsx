import React from "react";
import MovieCard from "../Components/MovieCard";
import { useState, useEffect } from "react";
import { getpopularMovies, searchMovies } from "../Services/api.js";
import "../Css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setmovies] = useState([]);
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getpopularMovies();
        setmovies(popularMovies);
      } catch (error) {
        console.log(error);
        setError("Failed to load movies..");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async(e) => {
    e.preventDefault();
    if(!searchQuery.trim())return 
     if(loading) return
    setLoading(true)
    try {
      const searchResults = await searchMovies(searchQuery)
      setmovies(searchResults)
      setError(null);
    } catch (error) {
      setError("failed to load movies",error)
      
    }finally{
      setLoading(false);
    }
   

  };

  return (
    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="search for movie,,"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
              ),
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
