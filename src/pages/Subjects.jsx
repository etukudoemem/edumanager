import { useContext } from "react"
import { Search } from "../components/Search"
import { SubjectsList } from "../components/SubjectsList"
import { Modal } from "../components/modals/Modal"
import { authContext } from "../contexts/AuthProvider"

export const Subjects = () => {
    const { userDetails } = useContext(authContext)

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Subjects</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        {/* <Modal table="subject" type="filter" />
                        <Modal table="subject" type="sort" /> */}
                        {userDetails.role === "Admin" && <Modal table="subject" type="create" />}
                    </div>
                </section>
                <section>
                    <SubjectsList />
                </section>
            </main>
        </>
    )
}