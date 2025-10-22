import { Search } from "../components/Search"
import { EventsList } from "../components/EventsList"
import { Modal } from "../components/modals/Modal"
import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"
import { Toast } from "../components/toasts/Toast"

export const Events = () => {
    const { userDetails } = useContext(authContext)

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Events</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        {/* <Modal table="event" type="filter" />
                        <Modal table="event" type="sort" /> */}
                        {userDetails.role === "Admin" && <Modal table="event" type="create" />}
                    </div>
                </section>
                <section>
                    <EventsList />
                </section>
                <section className="">
                    <Toast type="create" table={"event"} />
                    <Toast type="edit" table={"event"} />
                    <Toast type="delete" table={"event"} />
                </section>
            </main>
        </>
    )
}