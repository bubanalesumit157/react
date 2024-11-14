import React,{useState,useEffect,useRef} from "react"
function StopWatch(){
    const [isRunning,setIsRunning] = useState(false)
    const [elapsedTime,setElapsedTime] = useState(0)
    const intervalId = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(()=>{
        if(isRunning){
            intervalId.current = setInterval(() =>{
                setElapsedTime(Date.now() - startTimeRef.current)
            },10)
        }

        return () =>{
            clearInterval(intervalId.current)
        }

    },[isRunning])

    function start(){
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
        // console.log(Date.now())
    }
    function stop(){
        setIsRunning(false)
    }
    function reset(){
        setIsRunning(false)
        setElapsedTime(0)
    }
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000 * 60 * 60))
        let mins = Math.floor(elapsedTime / (1000 * 60) % 60)
        let secs = Math.floor(elapsedTime / (1000 )  % 60)
        let milsecs = Math.floor(elapsedTime  % 1000 / 10)
        hours = String(hours).padStart(2,"0")
        mins = String(mins).padStart(2,"0")
        secs = String(secs).padStart(2,"0")
        milsecs = String(milsecs).padStart(2,"0")
        return `${hours}:${mins}:${secs}:${milsecs}`
    }

    return(

        <>
        <div className="stopwatch">
            <div className="display">
                {formatTime()}
            </div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
        </>
    )
}
export default StopWatch