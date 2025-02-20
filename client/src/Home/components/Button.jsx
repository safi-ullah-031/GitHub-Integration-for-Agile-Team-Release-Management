import React from 'react'
import "./button.css"
function Button({buttonname}) {
  return (
    <>
    
<button className='homebtn'>
  <span> 
   {buttonname}
  </span>
</button>
    </>
  )
}

export default Button