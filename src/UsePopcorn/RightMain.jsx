import React from 'react'

const RightMain = ({children}) => {
  return (
    <div className="w-[500px] rounded-lg bg-[#333333] overflow-hidden overflow-y-auto scrollbar-thin scrollbar-track-[#555555] scrollbar-thumb-[#444444]">
      {children}
    </div>
  )
}

export default RightMain