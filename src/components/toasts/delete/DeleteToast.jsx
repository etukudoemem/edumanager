import { FaCheckCircle } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"

export const DeleteToast = ({ table }) => {

    return (
        <>
            <section className="w-full flex items-center gap-x-3">
                <div className="w-auto h-auto p-2 bg-red-200 rounded-full">
                    <RiDeleteBin5Line size={25} className="text-red-500"/>
                </div>
                <div>
                    <h3 className="font-semibold text-sm">
                        Deleted
                    </h3>
                    <p className="text-xs">
                        {table} has been deleted
                    </p>
                </div>
            </section>
        </>
    )
}