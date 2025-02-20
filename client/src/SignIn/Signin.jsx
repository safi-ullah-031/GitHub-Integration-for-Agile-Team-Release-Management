import React from 'react';
import Githubbutton from './components/Githubbutton';

function Signin() {
  return (
    <>
     

<form action="" className='border-2 border-red-500 h-[100vh] flex justify-center items-center flex-col gap-8' >
<h1 className='text-[2.7rem]'>Sign In Using Github</h1>

<Githubbutton/>

</form>

 
    </>
  );
}

export default Signin;
