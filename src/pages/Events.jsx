import { VscSettings } from "react-icons/vsc"
import { Search } from "../components/Search"
import { EventsList } from "../components/EventsList"
import { MdSort } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { Modal } from "../components/modals/Modal"
import { useState } from "react"

export const Events = () => {

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Events</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        <Modal table="event" type="filter" />
                        <Modal table="event" type="sort" />
                        <Modal table="event" type="create" />
                    </div>
                </section>
                <section>
                    <EventsList />
                </section>
            </main>
        </>
    )
}