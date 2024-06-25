// COMPLETE WORKING CALCULATOR


import Display from './Components/Display'
import ButtonsContainer from './Components/ButtonsContainer'
import styles from './App.module.css'
import { useState } from 'react'

function App() {
  const [calVal,setCalval] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === "C") {
      setCalval("");
    } else if(buttonText === "=") {
      const result = eval(calVal);
      setCalval(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalval(newDisplayValue);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}/>
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  )
}

export default App
