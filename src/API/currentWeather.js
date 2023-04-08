import React from "react";
import { DateTime } from "luxon";

// export  const formatCurrentWeather = (data) => {
//     const {
//       coord: { lat, lon },
//       main: { temp, feels_like, temp_min, temp_max, humidity },
//       name,
//       dt,
//       sys: { country, sunrise, sunset },
//       weather,
//       wind: { speed },
//     } = data;
  
//     const { main: details, icon } = weather[0];
  
//     return {
//       lat,
//       lon,
//       temp,
//       feels_like,
//       temp_min,
//       temp_max,
//       humidity,
//       name,
//       dt,
//       country,
//       sunrise,
//       sunset,
//       details,
//       icon,
//       speed,
//     };
//   };

export  const iconUrlFromCode = (code) =>
  `http://openweathermap.org/img/wn/${code}@2x.png`;


export  const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);