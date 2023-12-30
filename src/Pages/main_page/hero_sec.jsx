import React from 'react'

const Hero_sec = ({myData}) => {
  const {intro}=myData;
  return (
    <div className='flex'>

      <div className='p-16 pt-32'>
        <h1 class="text-3xl font-bold text-gray-700 pb-2">{intro}</h1>
        <p className='w-full  '>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, natus porro similique laudantium obcaecati nostrum dolore veritatis consequuntur ex unde asperiores esse? Hic eum dolores officia iure, illo veritatis est ipsa, necessitatibus enim rem maiores! Voluptates, eum temporibus. Adipisci, dolores.
        </p>
      </div>

      <img src="https://www.shutterstock.com/image-vector/indian-tea-maker-vector-cartoon-600nw-2170773599.jpg" alt="Loading" className='w-1/2 h-1/2' />
    </div>
  )
}

export default Hero_sec