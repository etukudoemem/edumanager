import { FaEdit, FaUserCircle } from "react-icons/fa"
import { teachersInfo } from "./teachersInfo"
// import { AiFillDelete } from "react-icons/ai"
// import { MdEditDocument } from "react-icons/md"
import { RiDeleteBin5Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { usePaginate } from "../../hooks/usePaginate"
import { Pagination } from "../Pagination"
import { Modal } from "../modals/Modal"
import { useContext } from "react"
import { creationContext } from "../../contexts/CreationProvider"

export const TeachersList = () => {
    const navigate = useNavigate()
    const { teacher } = useContext(creationContext)
    const { currentItems, currentPage, lastPage, handleNext, handlePrevious } = usePaginate(teacher)
    // useEffect(() => {
    //     console.log(currentItems)
    // }, [currentPage])

    return (
        <>
            <main>
                <table className="w-full border-collapse mx-auto">
                    <thead>
                        <tr>
                            <th>Info</th>
                            <th className="hidden lg:table-cell">Teacher ID</th>
                            <th className="hidden md:table-cell">Subjects</th>
                            <th className="hidden md:table-cell">Classes</th>
                            <th className="hidden md:table-cell">Phone</th>
                            <th className="hidden lg:table-cell">Address</th>
                            <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map((info) =>
                                <tr key={info.id}>
                                    <td onClick={() => navigate(`${info.id}`)}>
                                        <span data-title="View teacher">
                                            <div className="flex gap-x-2 items-center">
                                                <FaUserCircle size={35} className="text-[#f0f0ff] "/>
                                                <div className="flex flex-col">
                                                    <p className="font-semibold">{info.firstName} {info.lastName}</p>
                                                    <p>{info.email}</p>
                                                </div>
                                            </div>
                                        </span>
                                    </td>
                                    <td className="hidden lg:table-cell">{info.id}</td>
                                    <td className="hidden md:table-cell">{(info.subjects).join(", ")}</td>
                                    <td className="hidden md:table-cell">{(info.classes).join(", ")}</td>
                                    <td className="hidden md:table-cell">{info.phone}</td>
                                    <td className="hidden lg:table-cell">{info.address}</td>
                                    <td className="">
                                        <div className="flex gap-x-5 text-xl text-purple-800 justify-end md:justify-start">
                                            <Modal table="teacher" type="edit" teacherInfo={info} />
                                            <Modal table="teacher" type="delete" teacherId={info.id} />
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

// {
//     tableHeaders.map((header, index) => {
//         return <tr key={index} className="bg-green-200">
//             <th className="">{header}</th>
//         </tr>
//     })
// }