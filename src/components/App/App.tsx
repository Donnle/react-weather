import {useEffect, useState} from "react";
import {connect} from "react-redux";
import TodayInfo from "../TodayInfo"
import WeekList from "../WeekList";
import WeatherGradientHOC from "../../hocs/WeatherGradientHOC";
import {loadWeather} from "../../redux/action";

import styles from './App.module.css'


interface Props {
  loadWeather: () => void,
  loading: boolean,
  loaded: boolean
}


const App = ({loadWeather, loading, loaded}: Props) => {
  const [activeDayIndex, setActiveDayIndex] = useState(0)

  useEffect(() => {
    loadWeather()
  }, [])  // eslint-disable-line

  if (loading) return <h3>Loading...</h3>;
  if (!loaded) return <h3>No data :(</h3>;

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
  loadWeather: () => dispatch(loadWeather())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
