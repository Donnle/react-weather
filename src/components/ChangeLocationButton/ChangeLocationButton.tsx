import {useState} from "react";
import ReactDOM from "react-dom";
import ChangeLocationPopup from "../ChangeLocationPopup";

import styles from "./ChangeLocationButton.module.css";


interface Props {
  children: string,
  setCityName: (cityName: string | null) => void,
}

const ChangeLocationButton = ({children, setCityName}: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false)

  const handlePopupOpen = () => setIsPopupOpen(true)

  return (
    <>
      <div className={styles.locationContainer} onClick={handlePopupOpen}>
        <button className={styles.locationButton}>
          <i data-feather={styles.mapPin}/>
          <span>{children}</span>
        </button>
      </div>

      {isPopupOpen ?
        ReactDOM.createPortal(
          <ChangeLocationPopup setCityName={setCityName}/>, document.getElementById('popup')!
        ) : false}
    </>
  )
}

export default ChangeLocationButton
