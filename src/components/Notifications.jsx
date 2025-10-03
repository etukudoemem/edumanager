import { IoNotifications } from "react-icons/io5"

export const Notifications = () => {

    return (
        <>
            <main>
                <div className="relative">
                    <IoNotifications size={30}/>
                    <div className="absolute w-[14px] h-[14px] bg-red-600 text-white 
                        text-[10px] top-0 right-0 rounded-full flex items-center 
                        justify-center">
                        1
                    </div>
                </div>
            </main>
        </>
    )
}