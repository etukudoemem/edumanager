import { FaEllipsis } from "react-icons/fa6"
import { Announcement } from "./Announcement"
import { announcements } from "./announcements"

export const AnnouncementsList = () => {

    return (
        <>
            <main className="bg-white p-3">
                <section className="flex justify-between items-center my-1 mb-2">
                    <p className="font-semibold text-sm">Anouncements</p>
                    <div className="cursor-pointer">
                        <FaEllipsis />
                    </div>
                </section>
                <section>
                    {
                        announcements.map((announcement, index) => {
                            return <Announcement key={index} announcement={announcement}/>
                        })
                    }
                </section>
            </main>
        </>
    )
}