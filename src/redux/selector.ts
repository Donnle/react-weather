export const userCityNameSelector = ({weather}: any) => weather.entities.location.name
export const userCountryNameSelector = ({weather}: any) => weather.entities.location.country
export const weatherDataSelector = ({weather}: any) => weather.entities.weather
