import { useContext } from "react"
import { authContext } from "../../contexts/AuthProvider"
import { TbMailFilled } from "react-icons/tb"
import { FaExclamationCircle } from "react-icons/fa"


export const Email = () => {
    const { signup, setSignup, login, setLogin } = useContext(authContext)

    const handleOnChange = () => {
        if (!login.email) {
            setLogin({...login, email: true})
            return
        }
        if (!signup.email) {
            setSignup({...signup, email: true})
            return
        }
    }

    return (
        <>
            <section className={`w-[85%] flex items-center gap-x-2 py-2 border-b-1 
                ${!signup.email || !login.email ? "border-red-500" : "border-purple-800"}`}>
                <TbMailFilled className="text-purple-800"/>
                <input 
                    className="outline-none w-full "
                    type="email" 
                    name="email"
                    placeholder="Email"
                    onChange={() => handleOnChange()}
                />
                <FaExclamationCircle size={20}
                    className={`${!signup.email || !login.email ? "block text-red-500" : "hidden"}`} />
            </section>
        </>
    )
}