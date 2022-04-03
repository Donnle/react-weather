import {useEffect, useState} from "react";
import {connect} from "react-redux";
import TodayInfo from "../TodayInfo"
import WeekList from "../WeekList";
import Loader from "../Loader/Loader";
import ChangeLocationButton from "../ChangeLocationButton";
import WeatherGradientHOC from "../../hocs/WeatherGradientHOC";
import {loadWeather} from "../../redux/action";

import styles from './App.module.css'


interface Props {
  loadWeather: (cityName: string | null) => void,
  loading: boolean,
  loaded: boolean
}


const App = ({loadWeather, loading, loaded}: Props) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0)
  const [cityName, setCityName] = useState<string | null>(null)

  useEffect(() => {
    loadWeather(cityName)
  }, [cityName])

  if (loading) return <Loader/>;
  if (!loaded) return <h3>No data :( Reload page and try again</h3>;

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <div className={styles.weatherSide}>
          <WeatherGradientHOC activeDayIndex={activeDayIndex}/>
        </div>
        <div className={styles.infoSide}>
          <div className={styles.todayInfoContainer}>
            <TodayInfo activeDayIndex={activeDayIndex}/>
          </div>
          <div className={styles.weekContainer}>
            <WeekList activeDayIndex={activeDayIndex} setActiveDayIndex={setActiveDayIndex}/>
            <div className={styles.clear}/>
          </div>
          <ChangeLocationButton setCityName={setCityName}>Change location</ChangeLocationButton>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  loading: state.weather.loading,
  loaded: state.weather.loaded
})

const mapDispatchToProps = (dispatch: any) => ({
  loadWeather: (cityName: string | null) => dispatch(loadWeather(cityName))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
