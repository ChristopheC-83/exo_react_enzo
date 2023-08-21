/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY

function CardMeteo() {

  const [weatherData, setWeatherData] = useState([])

  useEffect(()=>{
  
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${APIKEY}`)
    .then(response=>{
      console.log(response);
      return response.json()
    })
    .then(data=>{
      console.log(data);
    })

  }, [])


  return (
    <div className='card-meteo'>
      <p className="city-name">Paris</p>
        <p className="country-name">France</p>
        <p className="temperature">17°C</p>
        <div className="info-icon-container">
          <img src="public/images/3_Meteo/01d.svg" alt="icone meteo" className="info-icon"/>
        </div>
    </div>
  )
}

export default CardMeteo
