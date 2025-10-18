import { useContext } from "react"
import { authContext } from "../../contexts/AuthProvider"
import { FaUser } from "react-icons/fa6"
import { FaExclamationCircle } from "react-icons/fa"

export const LastName = () => {
    const { signup, setSignup } = useContext(authContext)
    const handleOnChange = () => {
        if (!signup.lastName) {
            setSignup({...signup, lastName: true})
            return
        }
    }

    return (
        <>
            <section className={`w-[85%] flex items-center gap-x-2 py-2 border-b-1
                ${!signup.lastName ? "border-red-500" : "border-purple-800"}`}>
                <FaUser className="text-purple-800"/>
                <input 
                    className="outline-none w-full"
                    type="text" 
                    name="last name"
                    placeholder="Last name"
                    onChange={() => handleOnChange()}
                />
                <FaExclamationCircle size={20}
                    className={`${!signup.lastName ? "block text-red-500" : "hidden"}`} />
            </section>
        </>
    )
}