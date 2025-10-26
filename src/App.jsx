import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
import Watchlist from "./Watchlist";

const API_URL = "http://www.omdbapi.com?apikey=b169cf0";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showWatchlist, setShowWatchlist] = useState(false);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <button
        onClick={() => setShowWatchlist(!showWatchlist)}
        style={{
          marginBottom: "20px",
          padding: "10px 15px",
          borderRadius: "10px",
          backgroundColor: "#1f2123",
          color: "#f9d3b4",
          border: "1px solid #444",
          cursor: "pointer",
        }}
      >
        {showWatchlist ? "🔍 Back to Search" : "🎬 Go to Watchlist"}
      </button>

      {showWatchlist ? (
        <Watchlist />
      ) : (
        <>
          <div className="search">
            <input
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
              src={SearchIcon}
              alt="search"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>

          {movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="empty">
              <h2>No Movies Found</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
