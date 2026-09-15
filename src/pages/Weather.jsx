import { useLocation } from "react-router"
import { getWeather } from "../services/get-weather"


const Weather = () => {
    const vlaue = useLocation()
    const place = vlaue.state.location
    const fetchWeather = async () =>{
        try{
            const result = await getWeather(place)
            console.log(result)
        }catch(error){
            console.log(error)
        }
    }

    fetchWeather()
    return (
    <div>This is weather details page</div>
  )
}

export default Weather