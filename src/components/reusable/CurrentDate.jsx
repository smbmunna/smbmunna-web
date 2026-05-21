import { useEffect, useState } from "react"


export default function CurrentDate() {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
        return clearInterval(timer);
    }, [])

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('en-US', { month: 'long' });
    const year = currentDate.getFullYear();

    console.log('day: ', day, ' Month: ', month, ' Year: ', year);

    return (
        <div>
            <p className="text-amber-500 font-semibold">{day}</p>
            <p className="text-amber-500 font-semibold">{month}</p>
            <p className="text-amber-500 font-semibold">{year}</p>
        </div>
    )
}