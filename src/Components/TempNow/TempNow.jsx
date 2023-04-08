import React from 'react'
import "./TempNow.css"
import MainWeather from '../MainWeather'
import TimeWeather from '../TimeWeather'
import WeekWeather from '../WeekWeather'

const TempNow = ({weather}) => {
  return (
    
    <div className="center">
      <div className='tempNowAllPage'>
        <MainWeather weather={weather} />
        <div className="weatherColumn">
        <TimeWeather weather={weather} />
        <WeekWeather weather={weather} />
        </div>
      </div>
    </div>
  )
}

export default TempNow
