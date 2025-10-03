import { createContext, useState } from "react";
import { events } from "../utils/events";


export const creationContext = createContext(null)

export const CreationProvider = ({ children }) => {
    const [event, setEvent] = useState(events)


    const creationValues = {
        event,
        setEvent,
    }

    return (
        <creationContext.Provider value={creationValues}>
            {children}
        </creationContext.Provider>
    )
}