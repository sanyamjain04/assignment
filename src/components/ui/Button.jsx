import React from 'react'

const Button = ({children, className, type, onClick}) => {
  return (
    <button className={className + ' py-2 px-4 m-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md rounded-lg '} type={type} onClick={onClick} >{children}</button>
  )
}

export default Button