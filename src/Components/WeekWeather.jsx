import React from 'react'
import "./WeekWeather.css"
import { TiWeatherCloudy, TiWeatherSunny, TiWeatherNight, TiWeatherPartlySunny, TiWeatherStormy } from "react-icons/ti"
import { iconUrlFromCode } from '../API/currentWeather'

const WeekWeather = ({weather}) => {
    return (
        <div className='allWeek'>
            <div className="week">
                <p>Sunday
                </p>
                <br />
                <img className='weekWeather_icon' src={iconUrlFromCode(weather.list[0].weather[0].icon)} />
                <br />
                <p>{weather.list[0].main.temp.toFixed()}<span style={{ verticalAlign: "5px" }}>ºc</span></p>
            </div>
            <div className="week">
                <p>Monday
                </p>
                <br />
                <img className='weekWeather_icon' src={iconUrlFromCode(weather.list[1].weather[0].icon)} />
                <br />
                <p>{weather.list[1].main.temp.toFixed()}<span style={{ verticalAlign: "5px" }}>ºc</span></p>
            </div>
            <div className="week">
                <p>Tuesday
                </p>
                <br />
                <img className='weekWeather_icon' src={iconUrlFromCode(weather.list[2].weather[0].icon)} />
                <br />
                <p>{weather.list[2].main.temp.toFixed()}<span style={{ verticalAlign: "5px" }}>ºc</span></p>
            </div>
            <div className="week">
                <p>Wednesday
                </p>
                <br />
                <img className='weekWeather_icon' src={iconUrlFromCode(weather.list[3].weather[0].icon)} />
                <br />
                <p>{weather.list[3].main.temp.toFixed()}<span style={{ verticalAlign: "5px" }}>ºc</span></p>
            </div>
            <div className="week">
                <p>Thursday
                </p>
                <br />
                <img className='weekWeather_icon' src={iconUrlFromCode(weather.list[4].weather[0].icon)} />
                <br />
                <p>{weather.list[4].main.temp.toFixed()}<span style={{ verticalAlign: "5px" }}>ºc</span></p>
            </div>
            <div className="week">
                <p>Friday
                </p>
                <br />
                <img className='weekWeather_icon' src={iconUrlFromCode(weather.list[5].weather[0].icon)} />
                <br />
                <p>{weather.list[5].main.temp.toFixed()}<span style={{ verticalAlign: "5px" }}>ºc</span></p>
            </div>
            <div className="week">
                <p>Saturday
                </p>
                <br />
                <img className='weekWeather_icon' src={iconUrlFromCode(weather.list[6].weather[0].icon)} />
                <br />
                <p>{weather.list[6].main.temp.toFixed()}<span style={{ verticalAlign: "5px" }}>ºc</span></p>
            </div>
        </div>
    )
}

export default WeekWeather
