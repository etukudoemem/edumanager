import { FaEllipsis } from "react-icons/fa6"
import { Announcement } from "./Announcement"
import { useContext } from "react"
import { creationContext } from "../../contexts/CreationProvider"

export const AnnouncementsList = () => {
    const { announcement } = useContext(creationContext)

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
                        announcement.map((ann, index) => {
                            return <Announcement key={index} announcement={ann}/>
                        })
                    }
                </section>
            </main>
        </>
    )
}