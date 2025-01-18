import React, { useDeferredValue, useEffect } from "react";
import Navbar from "./Navbar";
import LeftBox from "./LeftBox";
import Mainbox from "./Mainbox";
import { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import Left from "./Left";
import Loader from "./Loader";
import Err from "./Err";
import MovieDetails from "./MovieDetails";
import RightMain from "./RightMain";
import WatchedMovies from "./WatchedMovies";

function PopcornMain() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [watchedMovies, setWatchedMovies] = useState(() => {
    const storedWatchedMovies = localStorage.getItem("watchedMovies");
    return JSON.parse(storedWatchedMovies);
  });
  console.log(localStorage)

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelectedId = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseDetails = () => {
    setSelectedId("");
  };

  const handleAddWatched = (movie) => {
    setWatchedMovies((watchedMovies) => [...watchedMovies, movie]);
    // localStorage.setItem("watchedMovies", JSON.stringify([...watchedMovies, movie]));
  };

  const handleDeleteWatched = (id) => {
    setWatchedMovies((watchedMovies) =>
      watchedMovies.filter((movie) => movie.imdbID !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
  }, [watchedMovies]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=8c960946`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        // console.log(data.Search);
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <div>
      <Navbar
        movies={movies}
        query={query}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      <Mainbox>
        <Left>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <LeftBox handleSelectedId={handleSelectedId} movies={movies} />
          )}
          {error && <Err message={error} />}
        </Left>

        <RightMain selectedId={selectedId} watchedMovies={watchedMovies}>
          {selectedId ? (
            <MovieDetails
              watchedMovies={watchedMovies}
              handleAddWatched={handleAddWatched}
              handleCloseDetails={handleCloseDetails}
              selectedId={selectedId}
            />
          ) : (
            <>
              <WatchedSummary watchedMovies={watchedMovies} />
              <WatchedMovies
                handleDeleteWatched={handleDeleteWatched}
                watchedMovies={watchedMovies}
              />
            </>
          )}
        </RightMain>
      </Mainbox>
    </div>
  );
}

export default PopcornMain;
import React, { useDeferredValue, useEffect } from "react";
import Navbar from "./Navbar";
import LeftBox from "./LeftBox";
import Mainbox from "./Mainbox";
import { useState } from "react";
import WatchedSummary from "./WatchedSummary";
import Left from "./Left";
import Loader from "./Loader";
import Err from "./Err";
import MovieDetails from "./MovieDetails";
import RightMain from "./RightMain";
import WatchedMovies from "./WatchedMovies";

function PopcornMain() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [watchedMovies, setWatchedMovies] = useState(() => {
    const storedWatchedMovies = localStorage.getItem("watchedMovies");
    return JSON.parse(storedWatchedMovies);
  });
  console.log(localStorage)

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelectedId = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseDetails = () => {
    setSelectedId("");
  };

  const handleAddWatched = (movie) => {
    setWatchedMovies((watchedMovies) => [...watchedMovies, movie]);
    // localStorage.setItem("watchedMovies", JSON.stringify([...watchedMovies, movie]));
  };

  const handleDeleteWatched = (id) => {
    setWatchedMovies((watchedMovies) =>
      watchedMovies.filter((movie) => movie.imdbID !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem("watchedMovies", JSON.stringify(watchedMovies));
  }, [watchedMovies]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?s=${query}&apikey=8c960946`
        );

        if (!res.ok)
          throw new Error("Something went wrong with fetching movies");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");
        // console.log(data.Search);
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();
  }, [query]);

  return (
    <div>
      <Navbar
        movies={movies}
        query={query}
        handleSearch={handleSearch}
        handleSubmit={handleSubmit}
      />
      <Mainbox>
        <Left>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <LeftBox handleSelectedId={handleSelectedId} movies={movies} />
          )}
          {error && <Err message={error} />}
        </Left>

        <RightMain selectedId={selectedId} watchedMovies={watchedMovies}>
          {selectedId ? (
            <MovieDetails
              watchedMovies={watchedMovies}
              handleAddWatched={handleAddWatched}
              handleCloseDetails={handleCloseDetails}
              selectedId={selectedId}
            />
          ) : (
            <>
              <WatchedSummary watchedMovies={watchedMovies} />
              <WatchedMovies
                handleDeleteWatched={handleDeleteWatched}
                watchedMovies={watchedMovies}
              />
            </>
          )}
        </RightMain>
      </Mainbox>
    </div>
  );
}

export default PopcornMain;
