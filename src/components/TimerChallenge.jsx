// import { useRef, useState } from "react"
// import ResultModal from "./ResultModal";

// export default function TimerChallenge({ title, targetTime }) {
//     const timer = useRef();
//     const dialog = useRef();

//     // const [timerStarted, setTimerStarted] = useState(false);
//     // const [timerExpired, setTimerExpired] = useState(false);

//     const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
//     const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

//     // Timer is Stopped
//     if (timeRemaining <= 0){
//         clearInterval(timer.current);
//         setTimeRemaining(targetTime * 1000);
//         dialog.current.open();
//     }

//     // we want to start the timer 
//     function handleStart() {
//         timer.current = setInterval(() => {
//             // setTimerExpired(true);
//             // dialog.current.open();
//             setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
//         }, 10);

//         setTimerStarted(true);
//     }

//     // to stop the timer function
//     function handleStop() {
//         clearInterval(timer.current);

//     }
//     return (
//         <>
//             <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
//             <section className="challenge">
//                 <h2>
//                     {title}
//                 </h2>
//                 {timerExpired && <p>You Lost</p>}
//                 <p className="challenge-time">
//                     {targetTime} second{targetTime > 1 ? 's' : ''}
//                 </p>
//                 <p>
//                     <button onClick={timerIsActive ? handleStop : handleStart}>
//                         {timerStarted ? 'Stop' : 'Start'} Challenge
//                     </button>
//                 </p>
//                 <p className={timerIsActive ? 'active' : undefined}>
//                     {timerStarted ? 'Time is running...' : 'Timer inactive'}
//                 </p>

//             </section>
//         </>
//     )

// }
import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(null);
    const dialog = useRef(null);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
    const [timerStarted, setTimerStarted] = useState(false);

    // Start Timer
    function handleStart() {
        if (!timerStarted) {
            timer.current = setInterval(() => {
                setTimeRemaining((prevTimeRemaining) => Math.max(prevTimeRemaining - 10, 0));
            }, 10);
            setTimerStarted(true);
        }
    }

    // Stop Timer
    function handleStop() {
        if (timerStarted) {
            clearInterval(timer.current);
            setTimerStarted(false);
        }
    }

    // Check Timer Completion
    if (timeRemaining === 0 && timerStarted) {
        clearInterval(timer.current);
        setTimerStarted(false);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result={timeRemaining > 0 ? "Won" : "Lost"} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{(timeRemaining / 1000).toFixed(2)} seconds remaining</p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
                <p className={timerStarted ? "active" : undefined}>
                    {timerStarted ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    );
}
