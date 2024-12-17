import React from 'react'

const Err = ({message}) => {
  return (
    <div className='h-full flex items-center justify-center text-xl text-white'>
        <span>⛔</span>{message}
    </div>
  )
}

export default Err