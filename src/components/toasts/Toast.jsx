import { DeleteToast } from "./delete/DeleteToast"
import { CreateToast } from "./create/CreateToast"
import { IoClose } from "react-icons/io5"
import { useContext } from "react"
import { toastContext } from "../../contexts/ToastProvider"
import { AuthToast } from "./auth/AuthToast"

export const Toast = ({ text, type, table }) => {
    const { toast, setToast } = useContext(toastContext)
    const mainStyle = `w-screen h-screen transition-all duration-300 ease-in-out fixed top-2`
    const sectionStyle = `md:w-1/4 h-auto px-3 py-5 md:p-4 w-[96%] shadow-lg rounded-md shadow-md rounded border-1 relative`

    const popUp = () => {
        return (
            type === "delete" ? 
                (<main className={`${mainStyle}
                    ${toast.delete ? "translate-x-[-16%] md:translate-x-[-15%]" : "translate-x-[-115%]"}`}>
                    
                    <section className={`${sectionStyle} bg-red-50 border-red-400  `}>
                        <IoClose onClick={() => setToast({...toast, delete: false})} className="absolute right-2 text-lg" />
                        <DeleteToast table={table} />
                    </section>
                </main>) :
            type === "create" ? 
                (<main className={`${mainStyle}
                    ${toast.create ? "translate-x-[-16%] md:translate-x-[-15%]" : "translate-x-[-115%]"}`}>
                    
                    <section className={`${sectionStyle} bg-green-50 border-green-400`}>
                        <IoClose onClick={() => setToast({...toast, create: false})} className="absolute right-2 text-lg" />
                        <CreateToast table={table} type={type} />
                    </section>
                </main>) :
            type === "edit" ? 
                (<main className={`${mainStyle}
                    ${toast.edit ? "translate-x-[-16%] md:translate-x-[-15%]" : "translate-x-[-115%]"}`}>
                    
                    <section className={`${sectionStyle} bg-green-50 border-green-400 `}>
                        <IoClose onClick={() => setToast({...toast, edit: false})} className="absolute right-2 text-lg" />
                        <CreateToast table={table} type={type} />
                    </section>
                </main>) : 
            type === "networkError" ? 
                (<main className={`${mainStyle}
                    ${toast.network ? "translate-x-[-48%] md:translate-x-[-49%]" : "translate-x-[-150%]"}`}>
                    
                    <section className={`${sectionStyle} bg-red-50 border-red-400 `}>
                        <IoClose onClick={() => setToast({...toast, network: false})} className="absolute right-2 text-lg" />
                        <AuthToast type={type} text={text} />
                    </section>
                </main>) : 
            type === "passwordError" ? 
                (<main className={`${mainStyle}
                    ${toast.passwordLength ? "translate-x-[-48%] md:translate-x-[-49%]" : "translate-x-[-150%]"}`}>
                    
                    <section className={`${sectionStyle} bg-red-50 border-red-400 `}>
                        <IoClose onClick={() => setToast({...toast, passwordLength: false})} className="absolute right-2 text-lg" />
                        <AuthToast type={type} text={text} />
                    </section>
                </main>) : 
            type === "emailUsed" ? 
                (<main className={`${mainStyle}
                    ${toast.emailUsed ? "translate-x-[-48%] md:translate-x-[-49%]" : "translate-x-[-150%]"}`}>
                    
                    <section className={`${sectionStyle} bg-red-50 border-red-400 `}>
                        <IoClose onClick={() => setToast({...toast, emailUsed: false})} className="absolute right-2 text-lg" />
                        <AuthToast type={type} text={text} />
                    </section>
                </main>) : 
            type === "credentials" ? 
                (<main className={`${mainStyle}
                    ${toast.credentials ? "translate-x-[-48%] md:translate-x-[-49%]" : "translate-x-[-150%]"}`}>
                    
                    <section className={`${sectionStyle} bg-red-50 border-red-400 `}>
                        <IoClose onClick={() => setToast({...toast, credentials: false})} className="absolute right-2 text-lg" />
                        <AuthToast type={type} text={text} />
                    </section>
                </main>) : null
        )
    }

    return (
        <> 
            <main >
                    <section >
                            {popUp()}
                    </section>
            </main>
        </>
    )
}