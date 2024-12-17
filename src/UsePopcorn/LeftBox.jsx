import React from 'react'
import LeftBoxCard from './LeftBoxCard'

function LeftBox({movies, handleSelectedId}) {
  return (
    <div className='scrollbar-thin scrollbar-track-[#555555] scrollbar-thumb-[#444444] w-[500px] rounded-lg bg-[#333333] overflow-y-auto overflow-x-hidden'>
      {
        movies.map((movie, index) => {
          return <LeftBoxCard key={index} handleSelectedId={handleSelectedId} movie={movie}/>
        })
      }
        
    </div> 
  )
}

export default LeftBox