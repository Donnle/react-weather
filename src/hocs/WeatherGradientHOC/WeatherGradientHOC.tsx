import {connect} from "react-redux";
import {
  userCityNameSelector,
  userCountryNameSelector, weatherDataSelector
} from "../../redux/selector";
import WeatherGradient from "../../components/WeatherGradient";

interface Props {
  weatherData: any,
  userCity: string,
  userCountry: string,
  activeDayIndex: number,
}

const WeatherGradientHoc = ({weatherData, userCity, userCountry, activeDayIndex}: Props) => {
  const userPosition = `${userCity} / ${userCountry}`
  const fullDataName = weatherData[activeDayIndex].fullDataName
  const fullWeekDayName = weatherData[activeDayIndex].fullWeekDayName
  const temperature = weatherData[activeDayIndex].temperature
  const condition = weatherData[activeDayIndex].condition

  return (
    <div>
      <WeatherGradient
        userPosition={userPosition}
        fullDataName={fullDataName}
        fullWeekDayName={fullWeekDayName}
        temperature={temperature}
        condition={condition}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  weatherData: weatherDataSelector(state),
  userCity: userCityNameSelector(state),
  userCountry: userCountryNameSelector(state),
})

export default connect(mapStateToProps)(WeatherGradientHoc)
