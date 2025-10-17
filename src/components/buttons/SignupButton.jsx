import { useContext } from "react"
import { authContext } from "../../contexts/AuthProvider"

export const SignupButton = () => {
    const { isLoading } = useContext(authContext)

    return (
        <>
            <button className={`w-[85%] py-3 flex justify-center items-center gap-x-2 text-white bg-purple-800 rounded
                ${isLoading && "opacity-80"}`}
                type="submit">
                {isLoading ? "Signing up..." : "Sign up"}
                {isLoading && <div className="loading flex gap-x-1">
                    <div className="loads w-2 h-2 bg-white rounded-full"></div>
                    <div className="loads w-2 h-2 bg-white rounded-full"></div>
                    <div className="loads w-2 h-2 bg-white rounded-full"></div>
                </div>}
            </button>
    </>
    )
}