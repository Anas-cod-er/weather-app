import React, { useState } from 'react'
import LocationModal from '../components/LocationModal'

function Home() {
  const [click,setClick] = useState(false)
  return (
    <div >
      <div className='text-center'>
              <h1 className='text-6xl text-blue-400 font-extrabold'>Weather <span className='text-blue-300'>app</span></h1>
      <p className='py-4 text-md text-gray-400'>Check your city Weather in here </p>
      </div>
      <div className='flex justify-center items-center'>
        <button type="button"
        onClick={()=>setClick(true)}
        className='text-lg font-medium hover:scale-105 transition-all delay-100 bg-blue-500 px-5 py-2 rounded-2xl text-gray-300'>
          Check your weather</button>
      </div>
      {
        click && <LocationModal onClose={()=>setClick(false)}/>
      }
    </div>
  )
}

export default Home