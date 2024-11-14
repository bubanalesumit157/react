import React,{useEffect,useState} from "react";
function DigiClock(){
    const [time,setTime] = useState(new Date())
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)

        return () =>{
            clearInterval(intervalId)
        }
    },[])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const secs = time.getSeconds();
        const  meridian = hours>=12 ? "pm" : "am";
        hours = hours % 12 || 12


        return `${padZero(hours)}:${padZero(minutes)}:${secs} ${meridian}`

    }

    function padZero(t){
        return (t < 10 ? "0" : "") + t;
    }
    return(
        <>
        <div>
            <div>
                <span>{formatTime()}</span>
            </div>
        </div>
        </>
    )
}
export default DigiClock