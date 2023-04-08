import WeatherServer from "../API/WeatherServer"

export const feetchCurrentWeather = (payload ) => async  (dispatch) => {
    const res = await WeatherServer.getAll(payload)
}