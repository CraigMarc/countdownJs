import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountDown from './Countdown'

/*
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/


function App() {


  const [timer, setTimer] = useState("01:00");
  const [running, setRunning] = useState(false)
  const [button, setButton] = useState("Start")
  const [startTime, setStartTime] = useState(60)

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
