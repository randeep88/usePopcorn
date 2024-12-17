import React from "react";

function Watched({ watchedMovies, movieRating }) {
  let sumRuntime = 0;
  watchedMovies.map((elem) => (sumRuntime += elem.runtime));
  const avgRuntime = sumRuntime / watchedMovies.length;

  let sumUserRating = 0;
  watchedMovies.map((elem) => (sumUserRating += elem.movieRating));
  const avgUserRating = sumUserRating / watchedMovies.length;

  let sumIMDBRating = 0;
  watchedMovies.map((elem) => (sumIMDBRating += elem.imdbRating));
  const avgIMDBRating = sumIMDBRating / watchedMovies.length;

  // const avgRuntime = average(watchedMovies.map((movie) => movie.runtime))

  return (
    <div className="text-white py-3 bg-[#444444] shadow-lg rounded-md fixed w-[500px]">
      <div className="ps-11 mb-1 text-gray-300">
        <h3 className="font-bold text-lg">MOVIES YOU WATCHED</h3>
      </div>

      <div className="text-gray-300 flex items-center justify-center gap-10">
        <p>
          <span>👁️</span> {watchedMovies.length} movies
        </p>
        <p>
          <span>⭐</span> {avgIMDBRating.toFixed(1)}
        </p>
        <p>
          <span>🌟</span> {avgUserRating.toFixed(1)}
        </p>
        <p>
          <span>⏳</span> {+avgRuntime.toFixed(1)} min
        </p>
      </div>
    </div>
  );
}

export default Watched;
