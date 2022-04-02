import styles from "./TodayItem.module.css"

interface Props {
  label: string,
  value: string,
}

const TodayItem = ({label, value}: Props) => (
  <div className={styles.precipitation}>
    <span className={styles.title}>{label}</span>
    <span className={styles.value}>{value} {label === 'WIND' ? 'kph' : '%'}</span>
    <div className={styles.clear}/>
  </div>
)


export default TodayItem
