import {connect} from "react-redux";
import TodayItem from "./TodayItem"
import {weatherDataSelector} from "../../redux/selector";

import styles from './TodayInfo.module.css'


interface Props {
  weatherData: any,
  activeDayIndex: number,
}

const TodayInfo = ({weatherData, activeDayIndex}: Props) => {
  const activeWeatherData = weatherData[activeDayIndex]
  const params = [
    {id: 1, label: 'PRECIPITATION', value: activeWeatherData.precip_mm},
    {id: 2, label: 'HUMIDITY', value: activeWeatherData.humidity},
    {id: 3, label: 'WIND', value: activeWeatherData.wind_kph},
  ]

  return (
    <div className={styles.todayInfo}>
      {params.map(({id, label, value}) =>
        <TodayItem key={id} label={label} value={value}/>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  weatherData: weatherDataSelector(state),
})

export default connect(mapStateToProps)(TodayInfo)
