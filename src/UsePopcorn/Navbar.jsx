import React from "react";

function Navbar({movies, query, handleSearch, handleSubmit}) {
  return (
    <nav className="flex items-center justify-around py-4 bg-violet-600 mx-2 rounded-xl ">
      <div className="text-xl text-white">
        <span className="text-3xl">🍿</span>
        <span className="font-bold text-2xl">usePopcorn</span>
      </div>

      <form onSubmit={handleSubmit} method="get">
        <input onChange={handleSearch} value={query} className="text-gray-200 rounded-lg focus:outline-none placeholder-gray-300 px-2 py-2 w-96 bg-violet-500 focus:bg-violet-500" type="text" name="seachBar" id="seachBar" placeholder="Search any movie..."/>
      </form>

      <div>
        <p className="text-white">Found <b>{movies.length}</b> results</p>
      </div>
    </nav>
  );
}

export default Navbar;
