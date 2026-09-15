import { useLocation } from "react-router"


const Weather = () => {
    const vlaue = useLocation()
    const place = vlaue.state.location
    console.log(place)
    return (
    <div>This is weather details page</div>
  )
}

export default Weather