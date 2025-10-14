import { BsExclamationTriangleFill } from "react-icons/bs"
import { FaCheckCircle } from "react-icons/fa"

export const AuthToast = ({ type, text }) => {

    return (
        <>
            <section className="w-full flex items-center gap-x-3">
                <div className={`w-auto h-auto p-2 flex justify-center items-center
                    ${type === "login" ? "bg-green-200" : type === "signup" ? "bg-green-200" : "bg-red-200 "} rounded-full`}>
                    {type === "login" ? <FaCheckCircle size={30} className="text-green-500"/> : type === "signup" ? <FaCheckCircle size={30} className="text-green-500"/> :
                    <BsExclamationTriangleFill size={25} className="text-red-500"/>}
                </div>
                <div>
                    <h3 className="font-semibold text-sm">
                        {type === "login" ? "Success" : type === "signup" ? "Success" : "Error"}
                    </h3>
                    <p className="text-xs">
                        {text}
                    </p>
                </div>
            </section>
        </>
    )
}