import React, { useEffect, useState } from "react";
import leftArrow from "../assets/la.svg";
import StarRating from "./StarRating";
import Loader from "./Loader";

const MovieDetails = ({
  selectedId,
  handleCloseDetails,
  handleAddWatched,
  watchedMovies,
}) => {
  const [movie, setMovie] = useState({});

  const [loading, setLoading] = useState(true);
  const [movieRating, setMovieRating] = useState();

  const isWatched = watchedMovies.map((watched) => watched.imdbID).includes(selectedId)
  console.log(isWatched);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actor,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    const fetchMoviesDetail = async () => {
      setLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?i=${selectedId}&apikey=8c960946`
      );
      const data = await res.json();
      setMovie(data);
      setLoading(false);
    };
    fetchMoviesDetail();
  }, [selectedId]);

  const handleAdd = () => {
    const newMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ")[0]),
      movieRating,
    };

    handleAddWatched(newMovie);
    handleCloseDetails();
  };

  return (
    <div className="w-[500px] rounded-lg bg-[#333333] text-white">
      {loading ? (
        <div className="w-full h-[613px] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div>
          <div>
            <button
              onClick={handleCloseDetails}
              className="absolute top-24 shadow-md transition-all shadow-black ms-1 mt-2 w-8 h-8 flex items-center justify-center bg-gray-200 text-black font-bold text-xl rounded-full hover:bg-gray-300"
            >
              <img src={leftArrow} />
            </button>
          </div>
          <header>
            <div className="flex gap-10 text-gray-300 bg-[#444444]">
              <img src={poster} className="w-32" alt="poster unavailable" />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-3">{title}</h2>
                <p className="text mb-3">
                  {released} &bull; {runtime}
                </p>
                <p className="text mb-3">{genre}</p>
                <p className="text">
                  <span>⭐ </span>
                  {imdbRating} IMDB Rating
                </p>
              </div>
            </div>
            <div className="px-5 text-gray-300">
              <div className="flex justify-center my-6">
                {!isWatched ? (
                  <div className="border border-yellow-300 border-opacity-15 p-4 px-7 rounded-lg w-[420px]">
                    <StarRating handleExRating={setMovieRating} />
                    {movieRating > 0 ? (
                      <button
                        className="py-2 mt-4 w-full bg-violet-600 rounded-md"
                        onClick={handleAdd}
                      >
                        Add to List
                      </button>
                    ) : (
                      <button
                        className="py-2 mt-4 w-full bg-gray-500 rounded-md"
                      >
                        Select Rating First
                      </button>
                    )}
                  </div>
                ) : (
                  <div className="border text-center border-yellow-300 border-opacity-15 p-4 px-7 rounded-lg w-[420px]">
                   Already Added
                  </div>
                )}
              </div>
              <p>
                <em>{plot}</em>
              </p>
              <p className="my-2">Starring: {actor}</p>
              <p className="my-2">Directed by {director}</p>
            </div>
          </header>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
