import { useNavigate } from "react-router-dom"
import { usePaginate } from "../hooks/usePaginate"
import { Pagination } from "./Pagination"
import { Modal } from "./modals/Modal"
import { classesInfo } from "../utils/classesInfo"
import { useContext } from "react"
import { creationContext } from "../contexts/CreationProvider"

export const ClassesList = () => {
    const navigate = useNavigate()
    const { classes, setClasses } = useContext(creationContext)
    const { currentItems, currentPage, lastPage, handleNext, handlePrevious } = usePaginate(classes)

    return (
        <>
            <main>
                <table className="w-full border-collapse mx-auto">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th className="hidden lg:table-cell">Capacity</th>
                            <th className="hidden md:table-cell">Grade</th>
                            <th className="hidden md:table-cell">Supervisor</th>
                            <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map((info) =>
                                <tr key={info.id}>
                                    <td onClick={() => navigate(`${info.id}`)}>
                                        {info.classe}
                                    </td>
                                    <td className="hidden lg:table-cell">{info.capacity}</td>
                                    <td className="hidden md:table-cell">{info.grade}</td>
                                    <td className="hidden md:table-cell">{info.supervisor}</td>
                                    <td className="">
                                        <div className="flex gap-x-5 text-xl text-purple-800 justify-end md:justify-start">
                                            <Modal table="class" type="edit" />
                                            <Modal table="class" type="delete" />
                                        </div>
                                    </td>
                                </tr>    
                            )
                        }
                    </tbody>
                </table>
                <section className="py-4">
                    <Pagination 
                        currentPage={currentPage}
                        lastPage={lastPage}
                        handleNext={handleNext}
                        handlePrevious ={handlePrevious}   
                    />
                </section>
            </main>
        </>
    )
}