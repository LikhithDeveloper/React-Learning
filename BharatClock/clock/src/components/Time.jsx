import style from "./Time.module.css"
import { useState, useEffect } from "react";
const Time = () => {
    const [tim , setTime]= useState(new Date());
    useEffect(() => {
        const IntervelId = setInterval(() => {
            setTime(new Date());
        },1000);
        
        // return () => {
        //     clearInterval(IntervelId);
        // }
    })
    return <div className={style.time}>
        <h3>The current Date&time is {tim.toLocaleDateString()} {"   "} {tim.toLocaleTimeString()}</h3>
    </div>
}

export default Time;