import { useState, useRef, useEffect } from "react";
import buzzer from './assets/buzzer.wav'
let audio = new Audio(buzzer);

 
const CountDown = (props) => {

    const {

        timer,
        setTimer,
        running,
        setRunning,
        button,
        setButton,
       

    } = props;

   
   
    // We need ref in this, because we are dealing
    // with JS setInterval to keep track of it and
    // stop it when needed
    const Ref = useRef(null);
    const startTime = useRef(60)
    
 
   //const getTimeRemaining = (time) => {
    function getTimeRemaining(time) {
        const total =
            Date.parse(time) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor(
            (total / 1000 / 60) % 60
        );
      
        return {
            total,
            minutes,
            seconds,
        };
    };
 
    const startTimer = (time) => {
      

        let { total, minutes, seconds } =
            getTimeRemaining(time);
        if (total >= 0) {
            // update the timer
            // check if less than 10 then we need to
            // add '0' at the beginning of the variable
            setTimer(
               
                (minutes > 9
                    ? minutes
                    : "0" + minutes) +
                ":" +
                (seconds > 9 ? seconds : "0" + seconds)
            );
        }
        
        if (total == 0) {
            setButton("Reset")
            audio.currentTime = 0
            audio.play();
           
        }
    };
 
    const clearTimer = (time) => {
        // If you adjust it you should also need to
        // adjust the Endtime formula we are about
        // to code next
        if (startTime.current/60 > 9) {
        setTimer(startTime.current/60 + ":00");
        }
        else {
            setTimer("0" + startTime.current/60 + ":00");
        }
        // If you try to remove this line the
        // updating of timer Variable will be
        // after 1000ms or 1sec
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(time);
        }, 1000);
        Ref.current = id;

        //stop timer
        if (running == false){
            clearInterval(id)
        }
    };
 
    const getDeadTime = () => {
     
        let deadline = new Date();
 
        // This is where you need to adjust if
        // you entend to add more time
        deadline.setSeconds(deadline.getSeconds() + startTime.current);
        return deadline;
    };
 
    // We can use useEffect so that when the component
    // mount the timer will start as soon as possible
 
    // We put empty array to act as componentDid
    // mount only
    /*
    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);
 */
    // Another way to call the clearTimer() to start
    // the countdown is via action event from the
    // button first we create function to be called
    // by the button
    const onClickReset = () => {
        if (running == true) {
            setRunning(false)
           setButton("Stop")
        }
        else { 
            setRunning(true)
            setButton("Start")
            
        }
        if (button == "Reset") {
            audio.pause()
           
        }

        clearTimer(getDeadTime());
    };

    const onClickIncrease = () => {
        
        startTime.current = startTime.current + 60
       
       let minutes = startTime.current / 60
       if (startTime.current/60 > 9){
       setTimer(minutes + ":00")
       }
       else {
        setTimer("0" + minutes + ":00")
       }
    };

    const onClickDecrease = () => {
       
    };

 
    return (
        <div
            style={{ textAlign: "center", margin: "auto" }}>
            <h1 style={{ color: "green" }}>
                Gym Timer
            </h1>
            <h3>Countdown Timer Using React JS</h3>
            <h2>{timer}</h2>
            <button onClick={onClickReset}>{button}</button>
            <button onClick={onClickIncrease}>increase</button>
            <button onClick={onClickDecrease}>decrease</button>
        </div>
    );
};
 
export default CountDown;