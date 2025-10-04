import { useContext } from "react"
import { Email } from "../components/input/Email"
import { FirstName } from "../components/input/FirstName"
import { LastName } from "../components/input/LastName"
import { SignupButton } from "../components/buttons/SignupButton"
import { authContext } from "../contexts/AuthProvider"
import { Password } from "../components/input/Password"
import { Link } from "react-router-dom"

export const Signup = () => {
    const { createNewUser, signup, signUserOut } = useContext(authContext)
    return (
        <>
            <button onClick={signUserOut}
                className="bg-purple-800 text-white">
                log out
            </button>
            <form onSubmit={(e) => createNewUser(e)}
                className="w-full h-screen flex flex-col gap-y-10 justify-center items-center">
                <header className="text-xl font-semibold text-purple-800">
                    Sign Up
                </header>
                <section className="w-full flex flex-col gap-y-6 justify-center items-center">
                    <FirstName />
                    {!signup.firstName && 
                    (<div className="w-[85%] -mt-[22px] text-left text-sm text-red-500">
                        <p>First name is required</p>
                    </div>)}
                    <LastName />
                    {!signup.lastName && 
                    (<div className="w-[85%] -mt-[22px] text-left text-sm text-red-500">
                        <p>Last name is required</p>
                    </div>)}
                    <Email />
                    {!signup.email && 
                    (<div className="w-[85%] -mt-[22px] text-left text-sm text-red-500">
                        <p>Email is required</p>
                    </div>)}
                    <Password />
                    {!signup.password && 
                    (<div className="w-[85%] -mt-[22px] text-left text-sm text-red-500">
                        <p>Password is required</p>
                    </div>)}
                    <div className="w-[85%] -mt-[20px] text-right text-sm">
                        <Link to={".."}
                            className="">
                            Already signed up? Login
                        </Link>
                    </div>
                </section>
                <section className="w-full flex justify-center items-center">
                    <SignupButton />
                </section>
            </form>
            
        </>
    )
}