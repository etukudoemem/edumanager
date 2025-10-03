import { VscSettings } from "react-icons/vsc"
import { Search } from "../components/Search"
import { ParentsList } from "../components/parents/ParentsList"
import { MdSort } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { Modal } from "../components/modals/Modal"

export const Parents = () => {

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Parents</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        <Modal table="parent" type="filter" />
                        <Modal table="parent" type="sort" />
                        <Modal table="parent" type="create" />
                    </div>
                </section>
                <section>
                    <ParentsList />
                </section>
            </main>
        </>
    )
}