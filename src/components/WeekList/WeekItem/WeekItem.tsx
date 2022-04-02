import styles from "./WeekItem.module.css"

interface Props {
  className: any | null,
  setActiveDayIndex: () => void,
  weekDayNameShort: string,
  temperature: number,
}

const WeekItem = ({className, setActiveDayIndex, weekDayNameShort, temperature}: Props) => (
  <li className={className} onClick={setActiveDayIndex}>
    <i className={styles.dayIcon} data-feather="sun"/>
    <span className={styles.dayName}>{weekDayNameShort}</span>
    <span className={styles.dayTemp}>{temperature}°C</span>
  </li>
)


export default WeekItem
