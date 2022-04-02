import {connect} from "react-redux"
import {v4 as uuid} from 'uuid'
import WeekItem from "./WeekItem"
import {weatherDataSelector} from "../../redux/selector";

import styles from './WeekList.module.css'


interface Props {
  activeDayIndex: number,
  weatherData: any,
  setActiveDayIndex: (index: number) => void
}

const WeekList = ({weatherData, activeDayIndex, setActiveDayIndex}: Props) => (
  <ul className={styles.weekList}>
    {weatherData?.map(({weekDayNameShort, temperature}: any, index: number) =>
      <WeekItem
        key={uuid()}
        className={activeDayIndex === index ? styles.active : null}
        setActiveDayIndex={() => setActiveDayIndex(index)}
        weekDayNameShort={weekDayNameShort}
        temperature={temperature}/>
    )}
  </ul>
)


const mapStateToProps = (state: any) => ({
  weatherData: weatherDataSelector(state)
})

export default connect(mapStateToProps)(WeekList)
