import React from 'react'

const MyButton = ({text, children, className = "", onClick, ...props}) => {
  return (
    <button className={className} onClick={onClick} {...props}>
      {children || text}
    </button>
  )
}

export default MyButton