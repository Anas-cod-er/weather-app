import { X } from "lucide-react"
import { useState } from "react"

const LocationModal = ({onClose}) => {

    const [city,setCity] = useState("")
    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(city)
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
        <div className="py-5">
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Enter City name"
                type="text" 
                value={city}
                onChange={(e)=>setCity(e.target.value)}
                className="w-full border p-1 rounded-2xl"/>
                <div className='flex justify-center items-center'>
        <button type="submit"
        className='text-lg font-medium hover:scale-105 transition-all delay-100 bg-blue-500 px-5 py-2 rounded-2xl text-gray-300'>
        Get weather</button>
      </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default LocationModal