import { X } from "lucide-react"
import { useState } from "react"
import { getGeoLocation } from "../services/get-location"
import { useNavigate } from "react-router"

const LocationModal = ({onClose}) => {

    const navigate = useNavigate()

    const [city,setCity] = useState("")
    const [error, setError] = useState("")


    const goToPage = (location) =>{
        navigate("/weather", {state : {location}})
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const value = city.trim()
        if(!value){
          setError("Please enter a city name")
          return
        }
        // console.log(value)
        try{
          const location = await getGeoLocation(value)
          // console.log(result)
          if(!location){
            setError("Geocoding request failed!")
            return
          }
          goToPage(location)
        }catch(error){
          setError(error)
        }
    }

    const handleGeoLocations = () =>{
      if(!navigator.geolocation){
        setError("Geo locations not found!")
        return
      }
      navigator.geolocation.getCurrentPosition((positions)=>{
        const {latitude,longitude} = positions.coords
        // console.log({latitude,longitude})
        goToPage({name : "Your Locations", lat: latitude, lon:longitude})
      },(error)=>{
        setError(error.message)
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

      {
        error && <p className="text-red-600 text-md font-medium">{error}</p>
      }
      </div>
    </div>
  )
}

export default LocationModal