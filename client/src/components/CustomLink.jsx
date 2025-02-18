import React from 'react'
import "./CustomLink.css"
import { Link } from 'react-router-dom'
function CustomLink({linkname,linkpath}) {
  return (
    <>
    
    <Link className='button' to={linkpath}>
      <span> 
       {linkname}
      </span>
    </Link>
        </>
  )
}

export default CustomLink