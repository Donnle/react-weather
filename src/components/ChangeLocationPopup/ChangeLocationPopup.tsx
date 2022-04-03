import {useState} from "react";

interface Props {
  setCityName: (cityName: string | null) => void,
}

const ChangeLocationPopup = ({setCityName}: Props) => {
  const [value, setValue] = useState<string>('')

  const handleInputChange = (event: any) => setValue(event.target.value)
  const handleFormSubmit = (event: any) => {
    event.preventDefault()
    setCityName(value)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={value} onChange={handleInputChange}/>
      <button>Search</button>
    </form>
  )
}

export default ChangeLocationPopup
