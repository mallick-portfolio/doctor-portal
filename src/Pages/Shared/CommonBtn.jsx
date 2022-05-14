import React from 'react'

const CommonBtn = ({children}) => {
  return (
    <button className="btn bg-gradient-to-r text-white from-secondary to-primary border-0">{children}</button>
  )
}

export default CommonBtn
