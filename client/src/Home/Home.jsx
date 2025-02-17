import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <div>Home</div>
    <Link to={"/signup"}>Sign up</Link>
    </>
  )
}

export default Home