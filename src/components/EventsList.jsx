import { useNavigate } from "react-router-dom"


// import { events } from "../utils/events"
import { usePaginate } from "../hooks/usePaginate"
import { Pagination } from "./Pagination"
import { Modal } from "./modals/Modal"
import { useContext } from "react"
import { creationContext } from "../contexts/CreationProvider"

export const EventsList = () => {
    const { event } = useContext(creationContext)
    const { currentItems, currentPage, lastPage, handleNext, handlePrevious } = usePaginate(event)
    
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
                            <th className="hidden md:table-cell">Start Time</th>
                            <th className="hidden lg:table-cell">End Time</th>
                            <th>Actions</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map((info) =>
                                <tr key={info.id}>
                                    <td onClick={() => navigate(`${info.id}`)}>
                                        <p className="">{info.title}</p>
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        {info.classe}
                                    </td>
                                    <td className="hidden md:table-cell">{info.date}</td>
                                    {/* <td className="hidden md:table-cell">{info.classes.join(', ')}</td> */}
                                    <td className="hidden md:table-cell">{info.starts}</td>
                                    <td className="hidden lg:table-cell">{info.ends}</td>
                                    <td className="">
                                        <div className="flex gap-x-5 text-xl text-purple-800 justify-end md:justify-start">
                                            <Modal table="event" type="edit" />
                                            <Modal table="event" type="delete" />
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