import { useContext } from "react"
import { authContext } from "../../contexts/AuthProvider"
import { FaUser } from "react-icons/fa6"
import { FaExclamationCircle } from "react-icons/fa"

export const FirstName = () => {
    const { signup, setSignup } = useContext(authContext)
    const handleOnChange = () => {
        if (!signup.firstName) {
            setSignup({...signup, firstName: true})
            return
        }
    }

    return (
        <>
            <section className={`w-[85%] flex items-center gap-x-2 py-2 border-b-2 
                ${signup.firstName ? "border-red-500" : "border-purple-800"}`}>
                <FaUser className="text-purple-800"/>
                <input 
                    className="outline-none w-full md:w-1/2 "
                    type="text" 
                    name="first name"
                    placeholder="First name"
                    onChange={() => handleOnChange()}
                />
                <FaExclamationCircle size={20}
                    className={`${!signup.firstName ? "block text-red-500" : "hidden"}`} />
            </section>
        </>
    )
}