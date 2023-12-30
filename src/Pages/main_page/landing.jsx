import React from 'react'
import Navbar from './navbar'
import Hero_sec from './hero_sec'

const Landing = () => {
  const data={
    intro:"Welcome to Chaiwala!"
  }
  return (
    <div>
      <Hero_sec myData={data}/>
    </div>
  )
}

export default Landing