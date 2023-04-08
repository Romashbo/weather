import React from 'react'
import { formatToLocalTime } from '../../API/currentWeather'
import "./Modal.css"
import {FiSunset, FiSunrise} from "react-icons/fi"
import {BsStopwatch} from "react-icons/bs"

const Modal = ({weather}) => {
  return (
    <div  className="modal">
        <div  className="modal-content">
          
           <div className="sunrise">        
             <p style={{textAlign:"center"}}>{weather.list[0].dt_txt}</p>
           </div>
           <hr style={{margin:"10px"}}/>
           <div className="sunrise">
            <FiSunrise color='yellow' />
             <p>Sunrise: {formatToLocalTime(weather.city.sunrise, weather.city.timezone, "hh:mm a")}</p>
           </div>
           <hr style={{margin:"10px"}}/>
           <div className="sunset">
            <FiSunset color='yellow' />
             <p>Sunset: {formatToLocalTime(weather.city.sunset, weather.city.timezone, "hh:mm a")}</p>
           </div>
           <hr style={{margin:"10px"}}/>
        </div>
    </div>
  )
}

export default Modal
