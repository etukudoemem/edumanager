import { Search } from "../components/Search"
import { ClassesList } from "../components/ClassesList"
import { Modal } from "../components/modals/Modal"

export const Classes = () => {

    return (
        <>
            <main className="w-full h-[100vh] bg-white mt-2">
                <section className="flex justify-between items-center pt-3 px-4">
                    <h1 className="text-sm font-semibold py-2">All Classes</h1>
                    <div className="flex items-center gap-x-3">
                        <div className="hidden md:block">
                            <Search />
                        </div>
                        <Modal table="class" type="filter" />
                        <Modal table="class" type="sort" />
                        <Modal table="class" type="create" />
                    </div>
                </section>
                <section>
                    <ClassesList />
                </section>
            </main>
        </>
    )
}