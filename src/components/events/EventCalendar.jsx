import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css"


export const EventCalendar = () => {
    const [value, onChange] = useState(new Date())

    return (
        <>
            <main className="w-full">
                <Calendar onChange={onChange} value={value} width={100} />
            </main>
        </>
    )
}