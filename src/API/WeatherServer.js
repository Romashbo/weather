import axios from "axios"

export default class WeatherServer {
    static async getAll(city) {
        const API_KEY = "88f24befe92600d12ec8cafa085d1a3e"
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=7`)
        return response
    }


}

// 73dbf50b26992e9d34bfeb2702e2a3ac

