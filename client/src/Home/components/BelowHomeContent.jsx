import React from 'react'

function BelowHomeContent({content}) {
  return (
   <>
   <div className='text-white  h-[70%] w-[30%] flex justify-center items-center'>
    <p className=' h-[80%] w-[95%] text-left border-l-4 border-white pl-6 pt-3'>
        {content}
    </p>
   </div>
   
   </>
  )
}

export default BelowHomeContent