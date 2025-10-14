import { Search } from "../components/Search"
import { StudentsList } from "../components/students/StudentsList"
import { Modal } from "../components/modals/Modal"
import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"
import { Toast } from "../components/toasts/Toast"

export const Students = () => {
    const { userDetails } = useContext(authContext)

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Students</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        {/* <Modal table="student" type="filter" />
                        <Modal table="student" type="sort" /> */}
                        {userDetails.role === "Admin" && <Modal table="student" type="create" />}
                    </div>
                </section>
                <section>
                    <StudentsList />
                </section>
                <section className="">
                    <Toast type="create" table={"student"} />
                    <Toast type="edit" table={"student"} />
                    <Toast type="delete" table={"student"} />
                </section>
            </main>
        </>
    )
}