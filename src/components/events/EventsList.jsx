import { FaEllipsis } from "react-icons/fa6"
import { Event } from "./Event"
import { useContext } from "react"
import { creationContext } from "../../contexts/CreationProvider"

export const EventsList = () => {
    const { event } = useContext(creationContext)

    return (
        <>
            <main className="bg-white p-3">
                <section className="flex justify-between items-center mb-3">
                    <p className="font-semibold text-sm">Events</p>
                    <div className="cursor-pointer">
                        <FaEllipsis />
                    </div>
                </section>
                <section>
                    {
                        event.map((event, index) => {
                            return <Event key={index} event={event}/>
                        })
                    }
                </section>
            </main>
        </>
    )
}