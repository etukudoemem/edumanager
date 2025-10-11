import { VscSettings } from "react-icons/vsc"
import { Search } from "../components/Search"
import { TeachersList } from "../components/teachers/TeachersList"
import { MdSort } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { Modal } from "../components/modals/Modal"
import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"

export const Teachers = () => {
    const { userDetails } = useContext(authContext)

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Teachers</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        {/* <Modal table="teacher" type="filter" />
                        <Modal table="teacher" type="sort" /> */}
                        {userDetails.role === "Admin" && <Modal table="teacher" type="create" />}
                    </div>
                </section>
                <section>
                    <TeachersList />
                </section>
            </main>
        </>
    )
}