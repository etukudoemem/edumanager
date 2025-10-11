import { Search } from "../components/Search"
import { Modal } from "../components/modals/Modal"
import { AnnouncementsList } from "../components/AnnouncementsList"
import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"

export const Announcements = () => {
    const { userDetails } = useContext(authContext)
    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Announcements</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        {/* <Modal table="announcement" type="filter" />
                        <Modal table="announcement" type="sort" /> */}
                        {userDetails.role === "Admin" && <Modal table="announcement" type="create" />}
                    </div>
                </section>
                <section>
                    <AnnouncementsList />
                </section>
                
            </main>
        </>
    )
}