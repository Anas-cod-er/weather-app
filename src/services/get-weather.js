export const getWeather = async (place) =>{

    const {lat,lon,name} =place
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current=temperature_2m,rain,relative_humidity_2m,is_day,wind_speed_10m,weather_code,precipitation,apparent_temperature`

    const result = await fetch(url)
    // console.log(await result.json())
    const data = await result.json()
    const now = data.current;

    if(!now){
        throw new Error("Weather detials get failed!")
    }
    return{
        location: name,
        temperature: Math.round(now.temperature_2m),
        humidity: now.relative_humidity_2m,
        wind: now.wind_speed_10m,
    }
};