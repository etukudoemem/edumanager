import { useContext } from "react"
import { authContext } from "../../contexts/AuthProvider"

export const LoginButton = () => {
    const { isLoading } = useContext(authContext)

    return (
        <>
            <button className="w-[85%] py-3 flex justify-center items-center text-white bg-purple-800 rounded" 
                type="submit">
                {isLoading ? "Logging in..." : "Login"}
            </button>
    </>
    )
}