import { FaCheckCircle } from "react-icons/fa"

export const AuthToast = () => {

    return (
        <>
            <section className="w-full flex items-center gap-x-3">
                <div>
                    <FaCheckCircle size={35} className="text-green-400"/>
                </div>
                <div>
                    <h3 className="font-semibold text-sm">
                        Success
                    </h3>
                    <p className="text-xs">
                        You've been logged in
                    </p>
                </div>
            </section>
        </>
    )
}