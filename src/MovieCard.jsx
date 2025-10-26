import React, { useContext, useState } from "react";
import { WatchlistContext } from "./WatchlistContext";

const MovieCard = ({ movie, showAddButton = true }) => {
  const { addToWatchlist, removeFromWatchlist, watchlist } = useContext(WatchlistContext);

  // check if this movie is already in the watchlist
  const isInWatchlist = watchlist.some((m) => m.imdbID === movie.imdbID);

  const handleAdd = () => {
    if (!isInWatchlist) {
      addToWatchlist(movie);   v
    }
  };

  return (
    <div className="movie" key={movie.imdbID}>
      <div><p>{movie.Year}</p></div>
      <div>
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"}
          alt={movie.Title}
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>

        {showAddButton ? (
          <button
            onClick={handleAdd}
            className={`add-btn ${isInWatchlist ? "active" : ""}`}
          >
            {isInWatchlist ? "✅ Added" : "+ Add to Watchlist"}
          </button>
        ) : (
          <button
            onClick={() => removeFromWatchlist(movie.imdbID)}
            className="remove-btn"
          >
            ✖ Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
