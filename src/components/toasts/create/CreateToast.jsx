import { FaCheckCircle } from "react-icons/fa"

export const CreateToast = ({ type, table }) => {

    return (
        <>
            <section className="w-full flex items-center gap-x-3">
                <div className="w-auto h-auto p-2 bg-green-200 rounded-full">
                    <FaCheckCircle size={30} className="text-green-500"/>
                </div>
                <div>
                    <h3 className="font-semibold text-sm">
                        Success
                    </h3>
                    <p className="text-xs">
                        {table} {type === "create" ? "has been created" : "updated"}
                    </p>
                </div>
            </section>
        </>
    )
}