import { useRef, useState } from "react"
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);

    const [timerExpired,setTimerExpired] = useState(false); 


    // we want to start the timer 
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    // to stop the timer function
    function handleStop() {
        clearTimeout(timer.current);

    }
    return (
        <>
        {timerExpired &&<ResultModal targetTime={targetTime} result="Lost" />}
        <section className="challenge">
            <h2>
                {title}
            </h2>
            {timerExpired && <p>You Lost</p> }
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerExpired ? 'active' : undefined}>
                {timerStarted ? 'Time is running...' : 'Timer inactive' }  
            </p>

        </section>
        </>
    )

}