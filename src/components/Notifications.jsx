import { useContext } from "react"
import { IoNotifications } from "react-icons/io5"
import { creationContext } from "../contexts/CreationProvider"
import { GoBell } from "react-icons/go"

export const Notifications = () => {
    const { announcement } = useContext(creationContext)
    // const annCount = () => {
    //     announcement
    // }

    return (
        <>
            <main>
                <div className="relative">
                    <GoBell size={23}/>
                    {announcement.length > 0 && <div className="absolute w-[14px] h-[14px] bg-red-500 text-white 
                        text-[8px] top-0 right-0 rounded-full flex items-center border-2 border-white
                        justify-center">
                        {announcement.length}
                    </div>}
                </div>
            </main>
        </>
    )
}