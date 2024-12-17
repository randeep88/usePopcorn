import React from "react";
import deleteSVG from "../assets/delete.svg";

const WatchedMovies = ({ watchedMovies, handleDeleteWatched }) => {
  return (
    <div className="ps-2 mt-20 w-[500px] rounded-lg bg-[#333333]">
      {watchedMovies.map((watched, index) => (
        <div
          key={index}
          className="h-24 border-[#444444] border-b-[1px] px-2 flex items-center gap-2 text-white"
        >
          <div className="w-12 h-16 rounded overflow-hidden">
            <img className="w-full h-full" src={watched.poster} />
          </div>

          <div className="flex flex-col gap-2 ms-1 truncate max-w-md">
            <h3 className="text-lg font-[500] text-gray-300">
              {watched.title}
            </h3>
            <div className="flex w-96 justify-between ">
              <div className="flex gap-10">
                <p>
                <span>⭐</span> {watched.imdbRating}
              </p>
              <p>
                <span>🌟</span> {watched.movieRating}
              </p>
              <p>
                <span>⏳</span> {watched.runtime} min
              </p>
              </div>
              
              <img
                src={deleteSVG}
                onClick={() => handleDeleteWatched(watched.imdbID)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WatchedMovies;
