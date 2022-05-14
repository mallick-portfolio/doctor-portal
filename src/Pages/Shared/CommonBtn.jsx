import React from 'react'

const CommonBtn = ({children}) => {
  return (
    <button class="btn bg-gradient-to-r from-secondary to-primary border-0">{children}</button>
  )
}

export default CommonBtn
