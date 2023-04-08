import React, { useState } from 'react'
import { AiOutlineEnvironment } from "react-icons/ai"
import {BsStopwatch} from"react-icons/bs"
import wind from "../Components/images/weather.png"
import humidity from "../Components/images/weather-2.png"
import rain from "../Components/images/weather-3.png"
import "./MainWeather.css"
import { iconUrlFromCode } from '../API/currentWeather'
import { formatToLocalTime } from '../API/currentWeather'
import Modal from './modal/Modal'
import MyModal from './UI/MyModal/MyModal'

const MainWeather = ({weather}) => {
const [modalTime, setModalTime] = useState(false)

    return (
        
        <div   className={weather.details === "Clear" ? "tempNow hot" : "tempNow"}  >
            <div className="tempNow-country">
                <AiOutlineEnvironment />
                <p>{`${weather.city.name}`}, {`${weather.city.country}`}  </p>
                <hr style={{margin:" 0 10px"}} />
                <BsStopwatch style={{zIndex:"1", cursor:"pointer"}} onClick={setModalTime} />
               <MyModal visible={modalTime} setVisible={setModalTime} >
                <Modal weather={weather} />
               </MyModal>
              
              
            </div>
             <div className="tempNow-temp">
             
                <h1>{`${weather.list[0].main.temp.toFixed()}`}<span style={{ verticalAlign: "35px", fontSize: "40px" }}> ºc</span></h1>
                <img className='iconBack' src={iconUrlFromCode(weather.list[0].weather[0].icon)} />
                <p style={{fontSize:"25px"}}>{weather.list[0].weather[0].description.toUpperCase()} </p>
            </div>
           <div className="statistic">
                <div className="wind">
                    <img src={wind} />
                    <div className="windNow">
                        <p>Wind</p>
                        <p>{weather.list[0].wind.speed.toFixed()} <span>km/h</span></p>
                    </div>
                </div>
                <div className="humidity">
                    <img src={humidity} />
                    <div className="humidityNow">
                        <p>Humidity</p>
                        <p>{weather.list[0].main.humidity} %</p>
                    </div>
                </div>
                <div className="rain">
                    <div className="rainNow">
                        <p>Feels like</p>
                        <p style={{textAlign: "center"}}>{weather.list[0].main.feels_like.toFixed()}<span style={{ verticalAlign: "1px", fontSize: "20px" }}> ºc</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainWeather
