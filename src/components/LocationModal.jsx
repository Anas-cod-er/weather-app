import { X } from "lucide-react"
import { useState } from "react"

const LocationModal = ({onClose}) => {

    const [city,setCity] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault()
        const value = city.trim()
        console.log(value)
    }

    const handleGeoLocations = () =>{
      navigator.geolocation.getCurrentPosition((positions)=>{
        const {latitude,longitude} = positions.coords
        console.log({latitude,longitude})
      },(error)=>{
        console.log(error)
      },{
        timeout: 10000
      }
    )
    }


  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-900/70">
        <div className='h-[380px] w-md bg-gray-100 shadow-2xl mt-10 p-5'>
        <div className="flex justify-between">
            <h2 className='text-xl font-medium '>
            Where are you today?
        </h2>
        <button 
        onClick={onClose}
        className="w-10 h-10 rounded-full p-2 bg-gray-400 cursor-pointer"><X /></button>
        </div>
        <div className="pt-8">
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Enter City name"
                type="text" 
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                className="w-full border p-1 rounded-2xl"/>
                <div className='f'>
        <button type="submit"
        className='text-lg w-full mt-5 font-medium hover:scale-105 transition-all delay-100 bg-blue-500 px-5 py-2 rounded-2xl text-gray-300'>
        Get weather</button>
      </div>
            </form>
        </div>
        <div className="py-1 text-center">Or</div>
        <div className=''>
        <button type="submit"
        onClick={handleGeoLocations}
        className='text-lg w-full font-medium hover:scale-105 transition-all delay-100 bg-blue-500 px-5 py-2 rounded-2xl text-gray-300'>
        Get Your location</button>
      </div>
      </div>
    </div>
  )
}

export default LocationModal