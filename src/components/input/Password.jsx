import { useContext } from "react"
import { authContext } from "../../contexts/AuthProvider"
import { FaExclamationCircle } from "react-icons/fa"
import { FaLock } from "react-icons/fa"


export const Password = () => {
    const { signup, setSignup, login, setLogin } = useContext(authContext)

    const handleOnChange = () => {
        if (!login.password) {
            setLogin({...login, password: true})
            return
        }
        if (!signup.password) {
            setSignup({...signup, password: true})
            return
        }
    }

    return (
        <>
            <section className={`w-[85%] flex items-center gap-x-2 py-2 border-b-2 
                ${!signup.password || !login.password ? "border-red-500" : "border-purple-800"}`}>
                <FaLock className="text-purple-800"/>
                <input 
                    className="outline-none w-full md:w-1/2 "
                    type="password" 
                    name="password"
                    placeholder="Password"
                    onChange={() => handleOnChange()}
                />
                <FaExclamationCircle size={20}
                    className={`${!signup.password || !login.password ? "block text-red-500" : "hidden"}`} />
            </section>
        </>
    )
}