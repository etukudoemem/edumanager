import { FaCheckCircle } from "react-icons/fa"
import { DeleteToast } from "./delete/DeleteToast"
import { CreateToast } from "./create/CreateToast"
import { IoClose } from "react-icons/io5"
import { useContext } from "react"
import { toastContext } from "../../contexts/ToastProvider"

export const Toast = ({ action, type, table }) => {
    const { showToast, setShowToast, toast, setToast } = useContext(toastContext)

    const popUp = () => {
        return (
            type === "delete" ? 
                (<main className={`w-screen h-screen transition-all duration-300 ease-in-out fixed top-2
                    ${toast.delete ? "translate-x-[-14%] md:translate-x-[-13.5%]" : "translate-x-[-115%]"}`}>
                    
                    <section className={`md:w-1/4 h-auto px-3 py-5 md:p-4 w-[96%] shadow-lg rounded-md bg-red-50
                        shadow-md rounded border-1 border-red-500 bg-purple-50 relative border-l-red-500`}>
                        <IoClose onClick={() => setToast({...toast, delete: false})} className="absolute right-2 text-lg" />
                        <DeleteToast table={table} />
                    </section>
                </main>) :
            type === "create" ? 
                (<main className={`w-screen h-screen transition-all duration-300 ease-in-out fixed top-2
                    ${toast.create ? "translate-x-[-14%] md:translate-x-[-13.5%]" : "translate-x-[-115%]"}`}>
                    
                    <section className={`md:w-1/4 h-auto px-3 py-5 md:p-4 w-[96%] shadow-lg rounded-md bg-green-50
                        shadow-md rounded border-1 border-green-500 bg-purple-50 relative `}>
                        <IoClose onClick={() => setToast({...toast, create: false})} className="absolute right-2 text-lg" />
                        <CreateToast table={table} type={type} />
                    </section>
                </main>) :
            type === "edit" ? 
                (<main className={`w-screen h-screen transition-all duration-300 ease-in-out fixed top-2 
                    ${toast.edit ? "translate-x-[-14%] md:translate-x-[-13.5%]" : "translate-x-[-115%]"}`}>
                    
                    <section className={`md:w-1/4 h-auto px-3 py-5 md:p-4 w-[96%] shadow-lg rounded-md bg-green-50
                        shadow-md border-1 border-green-500 relative`}>
                        <IoClose onClick={() => setToast({...toast, edit: false})} className="absolute right-2 text-lg" />
                        <CreateToast table={table} type={type} />
                    </section>
                </main>) : null
            // : toast.create ? <CreateToast table={table} type={type} />
            // : toast.edit ? <CreateToast table={table} type={type} />
            // : null
        )
    }

    return (
        <> 
            <main >
                    <section >
                            
                            {
                                popUp()
                            }
                    </section>
            </main>
        </>
    )
}

// fixed top-2 left-2