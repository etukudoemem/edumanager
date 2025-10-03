import { FaEdit, FaUserCircle } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { usePaginate } from "../../hooks/usePaginate"
import { Pagination } from "../../components/Pagination"
import { studentsInfo } from "../../utils/studentsInfo"
import { Modal } from "../modals/Modal"

export const StudentsList = () => {
    const { currentItems, currentPage, lastPage, handleNext, handlePrevious } = usePaginate(studentsInfo)
    const navigate = useNavigate()

    return (
        <>
            <main>
                <table className="w-full border-collapse mx-auto">
                    <thead>
                        <tr>
                            <th>Info</th>
                            <th className="hidden lg:table-cell">Student ID</th>
                            <th className="hidden md:table-cell">Grade</th>
                            {/* <th className="hidden md:table-cell">Classes</th> */}
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
                                                    <p className="font-semibold">{info.name}</p>
                                                    <p>{info.class}</p>
                                                </div>
                                            </div>
                                        </span>
                                    </td>
                                    <td className="hidden lg:table-cell">{info.id}</td>
                                    <td className="hidden md:table-cell">{info.grade}</td>
                                    {/* <td className="hidden md:table-cell">{info.classes.join(', ')}</td> */}
                                    <td className="hidden md:table-cell">{info.phone}</td>
                                    <td className="hidden lg:table-cell">{info.address}</td>
                                    <td className="">
                                        <div className="flex gap-x-5 text-xl text-purple-800 justify-end md:justify-start">
                                            <Modal table="student" type="edit" />
                                            <Modal table="student" type="delete" />
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