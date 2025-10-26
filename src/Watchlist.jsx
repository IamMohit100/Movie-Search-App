  import React, { useContext } from "react";
import { WatchlistContext } from "./WatchlistContext";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <div className="app">
      <h1>My Watchlist 🎬</h1>
      {watchlist.length > 0 ? (
        <div className="container">
          {watchlist.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} showAddButton={false} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies in Watchlist</h2>
        </div>
      )}
    </div>
  );
};

export default Watchlist;
