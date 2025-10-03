import { VscSettings } from "react-icons/vsc"
import { Search } from "../components/Search"
import { StudentsList } from "../components/students/StudentsList"
import { MdSort } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { Modal } from "../components/modals/Modal"

export const Students = () => {

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Students</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        <Modal table="student" type="filter" />
                        <Modal table="student" type="sort" />
                        <Modal table="student" type="create" />
                    </div>
                </section>
                <section>
                    <StudentsList />
                </section>
            </main>
        </>
    )
}