import { FaEdit, FaUserCircle } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"


import { announcements } from "./announcement/announcements"
import { usePaginate } from "../hooks/usePaginate"
import { Modal } from "./modals/Modal"
import { Pagination } from "./Pagination"

export const AnnouncementsList = () => {
    const { currentItems, currentPage, lastPage, handleNext, handlePrevious } = usePaginate(announcements)
    const navigate = useNavigate()
    return (
        <>
            <main>
                <table className="w-full border-collapse mx-auto">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th className="hidden lg:table-cell">Class</th>
                            <th className="hidden md:table-cell">Date</th>
                            {/* <th className="hidden md:table-cell">Classes</th> */}
                            {/* <th className="hidden md:table-cell">Start Time</th>
                            <th className="hidden lg:table-cell">End Time</th> */}
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
                                                <div className="flex flex-col">
                                                    <p className="font-semibold">{info.title}</p>
                                                </div>
                                            </div>
                                        </span>
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        {info.class}
                                    </td>
                                    <td className="hidden md:table-cell">{info.date}</td>
                                    {/* <td className="hidden md:table-cell">{info.date}</td> */}
                                    {/* <td className="hidden md:table-cell">{info.date}</td> */}
                                    {/* <td className="hidden lg:table-cell">{info.endTime}</td> */}
                                    <td className="">
                                        <div className="flex gap-x-5 text-xl text-purple-800 justify-end md:justify-start">
                                            <Modal table="announcement" type="edit" />
                                            <Modal table="announcement" type="delete" />
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