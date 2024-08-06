import React from 'react'

const Button = (props) => {
    const {children, func}=props
  return (
    <button onClick={func} className='px-8 py-4 mx-auto rounded md border border-blue-500 border-solid blueShadow duration-200'>
       <p>{children}</p>
    </button>
  )
}

export default Button
