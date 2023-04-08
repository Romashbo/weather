import React from 'react'
import {TiWeatherCloudy, TiWeatherSunny, TiWeatherNight, TiWeatherPartlySunny, TiWeatherStormy} from "react-icons/ti"
import "./TimeWeather.css"

const TimeWeather = () => {
  return (
    <div className="weatherTime">
    <div className="allTime">

   <div className="time time1">
    <TiWeatherNight color='black' size={40} />
    <br />
    <br />
    <p>01:00 PM
    </p>
   </div>
   <div className="time time2">
    <TiWeatherStormy color='white' size={40}/>
    <br />
    <br />
    <p>02:00 PM
    </p>
   </div>
   <div className="time time3">
    <TiWeatherCloudy color='white' size={40} />
    <br />
    <br />
    <p>03:00 PM
    </p>
   </div>
   <div className="time time4">
    <TiWeatherPartlySunny color='white' size={40}/>
    <br />
    <br />
    <p>04:00 PM
    </p>
   </div>
   <div className="time time5">
    <TiWeatherSunny style={{color:"yellow"}} size={40}/>
    <br />
    <br />
    <p>05:00 PM
    </p>
   </div>
   <div className="time time5">
    <TiWeatherSunny style={{color:"yellow"}} size={40}/>
    <br />
    <br />
    <p>06:00 PM
    </p>
   </div>
   <div className="time time5">
    <TiWeatherSunny style={{color:"yellow"}} size={40}/>
    <br />
    <br />
    <p>07:00 PM
    </p>
   </div>
    </div>
  </div>
  )
}

export default TimeWeather
