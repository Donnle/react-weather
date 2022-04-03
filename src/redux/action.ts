import axios from "axios";
import {FAILURE, LOAD_WEATHER, REQUEST, SUCCESS} from "./constants";

export const loadWeather = (cityName: string | null) => async (dispatch: any) => {
  dispatch({type: LOAD_WEATHER + REQUEST})
  try {
    const API_KEY = 'ccf3bd04f5a34b318d674041223103'
    const ip = cityName || await axios.get('https://api.ipify.org?format=json').then(res => res.data.ip)
    const data = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${ip}&days=3`)
      .then(res => res.data)
      .then(res => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

        const current = {
          weekDayNameShort: `Cur`,
          fullDataName: `Current`,
          fullWeekDayName: `Current`,
          temperature: res.current.temp_c,
          wind_kph: res.current.wind_kph,
          humidity: res.current.humidity,
          precip_mm: res.current.precip_mm,
          condition: res.current.condition.text
        }
        const normalizeForecastday = res.forecast.forecastday.map((item: any) => {
          const [year, mount, day] = item.date.split('-')
          const date = new Date(year, mount, day)

          const weekDayNameShort = (date + '').slice(0, 3)
          const fullDataName = `${day} ${weekDayNameShort} ${year}`
          const fullWeekDayName = days[date.getDay()]

          return {
            weekDayNameShort,
            fullDataName,
            fullWeekDayName,
            temperature: item.day.avgtemp_c,
            wind_kph: item.day.maxwind_kph,
            humidity: item.day.avghumidity,
            precip_mm: item.day.totalprecip_mm,
            condition: item.day.condition.text
          }
        })

        return {
          location: res.location,
          weather: [current, ...normalizeForecastday]
        }
      })
    dispatch({type: LOAD_WEATHER + SUCCESS, payload: data})
  } catch (error) {
    dispatch({type: LOAD_WEATHER + FAILURE, payload: error})
  }
}
