import React, { useContext } from 'react'
import Navbar from './navbar'
import Hero_sec from './hero_sec'
import { context1, customHook1 } from '../../context/prod_context'

const Landing = () => {

  const {name}=customHook1();

  const data={
    intro:"Welcome to Chaiwala!"
  }
  return (
    <div>
      {name}
      <Hero_sec myData={data}/>
    </div>
  )
}

export default Landing