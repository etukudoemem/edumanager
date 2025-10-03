import { Calendar as BigCalendar, momentLocalizer, Views } from "react-big-calendar"
import moment from "moment"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { calendarEvents } from "./calendarEvents"
import { useState } from "react"

const localizer = momentLocalizer(moment)

export const TeacherSchedule = () => {
    const [view, setView] = useState(Views.WORK_WEEK)

    const handleViewChange = (selectedView) => {
        setView(selectedView)
    }

    return (
        <>
            <main>
                <section>
                    <BigCalendar 
                        localizer={localizer}
                        events={calendarEvents}
                        startAccessor={"start"}
                        endAccessor={"end"}
                        views={["work_week", "day"]}
                        view={view}
                        style={{height: "100%"}}
                        onView={handleViewChange}
                        min={new Date(2025, 1, 0, 8, 0, 0)}
                        max={new Date(2025, 1, 0, 17, 0, 0)}
                    />
                </section>
            </main>
        </>
    )
}