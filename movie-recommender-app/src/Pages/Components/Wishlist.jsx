import React from "react";

const Wishlist = ({ movies }) => {
  return (
    <div>
      <h2>My Wishlist</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;