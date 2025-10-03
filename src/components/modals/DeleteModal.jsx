import { BsExclamationTriangle, BsExclamationTriangleFill } from "react-icons/bs"
import { IoClose } from "react-icons/io5"

export const DeleteModal = ({ table, setShow }) => {
    
    return (
        <section className="relative bg-white w-[90%] md:w-[25%] h-60 flex flex-col gap-y-3 items-center justify-center p-6 rounded-lg shadow-xl">
            {/* <div onClick={() => setShow(false)}
                className="absolute top-2 right-2">
                <IoClose size={22}/>
            </div> */}
            <div>
                <BsExclamationTriangleFill size={35} className="text-red-600"/>
            </div>
            <div>
                <h2 className="font-semibold text-base">
                    Delete {table}?
                </h2>
            </div>
            <div>
                <p className="text-sm pb-3">
                    You're going to delete this {table}
                </p>
            </div>
            <div className="w-full flex justify-between">
                <button onClick={() => setShow(false)}
                    className="w-[48%] px-4 py-3 bg-gray-200 text-slate-600 text-sm font-bold rounded cursor-pointer">
                    No
                </button>
                <button className="w-[48%] px-4 py-3 bg-red-600 text-white text-sm font-bold rounded cursor-pointer">
                    Yes
                </button>
            </div>
        </section>
    )
}