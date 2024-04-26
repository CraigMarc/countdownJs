import { useState } from 'react'

import './App.css'
import CountDown from './Countdown'


function App() {


  const [timer, setTimer] = useState("01:00");
  const [running, setRunning] = useState(true)
  const [button, setButton] = useState("Start")
 

  return (
    <CountDown
    timer={timer}
    setTimer={setTimer}
    running={running}
    setRunning={setRunning}
    button={button}
    setButton={setButton}
   

    />
  )

}



      


export default App
