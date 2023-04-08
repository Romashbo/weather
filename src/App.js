import React, { useEffect, useState } from "react";
import TempNow from "./Components/TempNow/TempNow";
import "./app.css"
import MyInput from "./Components/UI/Input/MyInput";
import WeatherServer from "./API/WeatherServer";
import { formatCurrentWeather } from "./API/currentWeather";


function App() {
  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState("")
  const [weatherWeek, setWeatherWeek] = useState("")
  
  const getWeth = async () => {
    const response = await WeatherServer.getAll(search)
    // setWeather(formatCurrentWeather(response.data))
    setWeather(response.data)
    setSearch("")
    console.log("weth" ,response.data);

  }


const handleKeyPress = async (evt) => {
  if (evt.key === "Enter") {
    getWeth()


  
  }
} 
useEffect(() => {
  getWeth()

},[])
  return (
 <div className="App">
<div className="input">
     <MyInput onKeyPress={handleKeyPress} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Enter your country" />
   </div>
   
   {weather && (
     <div>
      <TempNow weather={weather} />
     </div>
   )}
 </div>

  
  );
}

export default App;
