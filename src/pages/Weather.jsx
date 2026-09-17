import { useLocation } from "react-router"
import { getWeather } from "../services/get-weather"
import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"

const getRecommendations = (weather) => {
    if (!weather) {
        return { text: "Loading weather insights..." }
    }

    const temperature = Number(weather.temperature ?? 0)

    if (temperature >= 30) {
        return { text: "It is very hot today. Stay hydrated and wear light clothing." }
    }

    if (temperature >= 20) {
        return { text: "A pleasant day for outdoor plans. Light layers and sunscreen will help." }
    }

    if (temperature >= 10) {
        return { text: "Cooler conditions today. A light jacket would keep you comfortable." }
    }

    return { text: "A chilly day ahead. Wear warm layers and keep cozy." }
}

const Weather = () => {
    const locationState = useLocation()
    const place = locationState?.state?.location
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (!place) {
            return
        }

        const fetchWeather = async () => {
            try {
                const result = await getWeather(place)
                setWeather(result)
            } catch (error) {
                console.log(error)
            }
        }

        fetchWeather()
    }, [place])

    if (!place) {
        return <div className="p-6 text-center text-sky-900">No location selected.</div>
    }

  const Rain = ["drizzle", "rain" , "freezing_rain"]

  function getRecommandations(weather) {
  if (!weather) return null;

  // 1. Weather you need to prepare for.
  if (weather.condition === "snow") {
    return { type: "snow", label: "Snow Alert", text: "It's snowing. Wear warm clothes and take it slow outside." };
  }
  if (Rain.includes(weather.condition)) {
    return { type: "rain", label: "Rain Alert", text: "It's raining. Don't forget to take an umbrella with you." };
  }
  if (weather.condition === "fog") {
    return { type: "fog", label: "Fog Alert", text: "It's foggy. Drive carefully and keep some distance from other vehicles." };
  }

  // 2. Temperatures worth warning about (in °C).
  if (weather.temperature >= 32) {
    return { type: "hot", label: "Hot Day", text: "It's quite hot today. Take a water bottle with you." };
  }
  if (weather.temperature <= 15) {
    return { type: "cold", label: "Cold Day", text: "It's cold today. Wear warm clothes before heading out." };
  }
  if (weather.temperature >= 28) {
    return { type: "warm", label: "Warm Day", text: "It's warm today. Take some water with you." };
  }

  // 3. Comfortable temperature, so just describe the sky.
  if (weather.condition === "clear") {
    return { type: "sunny", label: "Sunny Day", text: "Sunny skies ahead. Take water and consider carrying sunglasses." };
  }
  if (weather.condition === "partly_cloudy" || weather.condition === "cloudy") {
    return { type: "cloudy", label: "Cloudy Day", text: "Mostly cloudy today. A light jacket might come in handy." };
  }

  // 4. Nothing special to report.
  return { type: "pleasant", label: "Perfect Day", text: "The weather looks comfortable today. Enjoy your day!" };
}

    return (
    <div>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-3">
                    <div className="shadow-2xl rounded-2xl p-5">
                    <div className="space-y-3">
                        <h1 className="text-2xl text-orange-500 font-semibold">Today's Weather Details </h1>
                        <div className="flex items-center gap-3">
                            <MapPin size={30} className="text-orange-500"/>
                            <h2 className="text-4xl text-orange-600 font-semibold">{place.name}</h2>
                        </div>
                        <div className="flex items-center gap-16">
                           <h3 className="text-6xl text-orange-900 font-extrabold">{weather?.temperature} C</h3>
                           <p className="text-4xl text-orange-800 font-extrabold">{weather?.description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="rounded-2xl shadow-2xl p-4 text-center">
                                 <h3 className="text-lg text-orange-900 font-bold">Feels Like</h3>
                           <p className="text-4xl text-orange-800 font-extrabold">{weather?.feelsLike}</p>
                            </div>
                             <div className="rounded-2xl shadow-2xl p-4 text-center">
                                 <h3 className="text-lg text-orange-900 font-bold">Humidity</h3>
                           <p className="text-4xl text-orange-800 font-extrabold">{weather?.humidity}</p>
                            </div>
                             <div className="rounded-2xl shadow-2xl p-4 text-center">
                                 <h3 className="text-lg text-orange-900 font-bold">Wind Speed</h3>
                           <p className="text-4xl text-orange-800 font-extrabold">{weather?.windSpeed}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="shadow-2xl rounded-2xl p-5">
                     <h2 className="text-orange-950  font-bold text-xl">Smart Recommendations</h2>

                     <div className="text-orange-800 font-medium">
                          {getRecommendations(weather)?.text}
                     </div>
                </div>
                </div>
                

                <div className="shadow-2xl flex  flex-col items-center justify-between space- rounded-2xl p-5">
                  <div className="">
                    <h2 className="text-orange-950  font-bold text-xl">Live in {place.name}</h2>
                  </div>
                  <div className="flex items-center justify-center">
                     <p className="text-4xl text-orange-900 font-extrabold">{weather?.description}</p>
                  </div>

                  <div className="flex items-center justify-center">
                   <span className="rounded-full border-2 font-medium text-lg border-orange-400 text-orange-800 p-2">Feel's Like : {weather?.feelsLike}</span>
                  </div>
                  
                </div>
            </div>
        </div>
  )
}

export default Weather