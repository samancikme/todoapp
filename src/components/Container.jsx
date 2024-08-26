import React from 'react'

const Container = ({children , className}) => {
  return (
    <div className={`font-montserrat flex justify-center items-center lg:w-[45%] z-10 md:w-[75%] sm:w-[80%] mm:w-[85%]  w-[95%] mx-auto   ${className}`}>
      {children}
    </div>
  )
}

export default Container