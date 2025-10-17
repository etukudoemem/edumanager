import { useNavigate } from "react-router-dom"
import { usePaginate } from "../hooks/usePaginate"
import { Pagination } from "../components/Pagination"
import { Modal } from "./modals/Modal"
import { subjectsInfo } from "../utils/subjectsInfo"
import { useContext } from "react"
import { creationContext } from "../contexts/CreationProvider"

export const SubjectsList = () => {
    const { subject, setSubject } = useContext(creationContext)
    const { currentItems, currentPage, lastPage, handleNext, handlePrevious } = usePaginate(subject)
    const navigate = useNavigate()
    return (
        <>
            <main>
                <table className="w-full border-collapse mx-auto">
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th className="hidden md:table-cell">Teachers</th>
                            <th className="hidden md:table-cell">SubjectID</th>
                            <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map((info) =>
                                <tr key={info.sub}>
                                    <td onClick={() => navigate(`${info.id}`)} className="font-semibold">
                                        {info.sub}
                                    </td>
                                    <td className="hidden md:table-cell">
                                        {(info.teachers).join(", ")}
                                    </td>
                                    <td className="hidden md:table-cell">{info.id}</td>
                                    {/* <td className="hidden md:table-cell">{info.classes.join(', ')}</td> */}
                                    {/* <td className="hidden md:table-cell">{info.phone}</td> */}
                                    {/* <td className="hidden lg:table-cell">{(info.teachers).join(", ")}</td> */}
                                    <td className="">
                                        <div className="flex gap-x-5 text-xl text-purple-800 justify-end md:justify-start">
                                            <Modal table="subject" type="edit" subjectInfo={info} />
                                            <Modal table="subject" type="delete" subjectId={info.id}/>
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