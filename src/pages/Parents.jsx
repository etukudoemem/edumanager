import { VscSettings } from "react-icons/vsc"
import { Search } from "../components/Search"
import { ParentsList } from "../components/parents/ParentsList"
import { MdSort } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { Modal } from "../components/modals/Modal"
import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"
import { Toast } from "../components/toasts/Toast"

export const Parents = () => {
    const { userDetails } = useContext(authContext)

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Parents</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        {/* <Modal table="parent" type="filter" />
                        <Modal table="parent" type="sort" /> */}
                        {userDetails.role === "Admin" && <Modal table="parent" type="create" />}
                    </div>
                </section>
                <section>
                    <ParentsList />
                </section>
                <section className="">
                    <Toast type="create" table={"parent"} />
                    <Toast type="edit" table={"parent"} />
                    <Toast type="delete" table={"parent"} />
                </section>
            </main>
        </>
    )
}