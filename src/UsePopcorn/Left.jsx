import React from 'react'
import LeftBox from './LeftBox'

const Left = ({children}) => {
  return (
    <div className='scrollbar-thin scrollbar-track-[#555555] scrollbar-thumb-[#444444] w-[500px] rounded-lg bg-[#333333] overflow-y-auto overflow-x-hidden'>
        {children}
    </div>
  )
}

export default Left