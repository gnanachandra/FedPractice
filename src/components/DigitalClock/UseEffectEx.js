import React,{useEffect,useState} from "react";
const UseEffectEx = () =>
{
    const [time,setTime] = useState("");
    useEffect(()=>{
       const t = setInterval(updateTime,1000);
       return () =>
       {
            clearTimeout(t);
       }
    },[time]);
    
    const updateTime = () =>
    {
        const time = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
        setTime(time);
    }

    return(
        <div>
            <h1>Use Effect Example - Digital Clock</h1>
            <h2>{time}</h2>
        </div>
        
    )
}
export default UseEffectEx