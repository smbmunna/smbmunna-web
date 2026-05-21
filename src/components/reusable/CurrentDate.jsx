import { useState } from "react"


export default function CurrentDate(){

    const [currentDate, setCurrentDate]= useState(new Date()); 

    
    return (
        <div>{currentDate}</div>
    )
}