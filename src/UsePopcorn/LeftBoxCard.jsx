import React from 'react'

function LeftBoxCard({movie, handleSelectedId}) {
  return (
    <div onClick={()=>handleSelectedId(movie.imdbID)} className='h-24 border-[#444444] border-b-[1px] ps-4 flex items-center gap-2 text-white hover:bg-[#444444] transition-all'>
        <div className='w-12 h-16 rounded overflow-hidden'>
            <img className='w-full h-full' src={movie.Poster}/>
        </div>

        <div className='flex flex-col gap-2 truncate max-w-md'>
            <h3  className='text-lg font-[500] text-gray-300'>{movie.Title}</h3>
            <p className='text-sm text-gray-300'><span>🗓️</span>{movie.Year}</p>
        </div>
    </div>
  )
}

export default LeftBoxCard