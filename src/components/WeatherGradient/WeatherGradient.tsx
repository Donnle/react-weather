import styles from "./WeatherGradient.module.css"

interface Props {
  fullDataName: string,
  fullWeekDayName: string,
  userPosition: string,
  temperature: number,
  condition: string,
}

const WeatherGradient = ({fullDataName, fullWeekDayName, userPosition, temperature, condition}: Props) => (
  <div className={styles.weatherGradient}>
    <div className={styles.dateContainer}>
      <h2 className={styles.dateDayName}>{fullWeekDayName}</h2>
      <span className={styles.dateDay}>{fullDataName}</span>
      <i className={styles.locationIcon} data-feather="map-pin"/>
      <span className={styles.location}>{userPosition}</span>
    </div>

    <div className={styles.weatherContainer}>
      <i className={styles.weatherIcon} data-feather="sun"/>
      <h1 className={styles.weatherTemp}>{temperature}°C</h1>
      <h2 className={styles.weatherDesc}>{condition}</h2>
    </div>
  </div>
)


export default WeatherGradient
