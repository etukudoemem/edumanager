import { useContext, useState } from "react"
import { Email } from "../components/input/Email"
import { FirstName } from "../components/input/FirstName"
import { LastName } from "../components/input/LastName"
import { SignupButton } from "../components/buttons/SignupButton"
import { authContext } from "../contexts/AuthProvider"
import { Password } from "../components/input/Password"
import { Link } from "react-router-dom"
import { RoleSelect } from "../components/RoleSelect"
import { AuthToast } from "../components/toasts/auth/AuthToast"
import { Toast } from "../components/toasts/Toast"

export const Signup = () => {
    
    const { createNewUser, signup, signUserOut } = useContext(authContext)
    return (
        <>
            <main className="w-full h-screen flex flex-col justify-center items-center bg-purple-50">
                <form onSubmit={(e) => createNewUser(e)}
                    className="w-full md:w-120 h-screen flex flex-col gap-y-10 justify-center items-center bg-white">
                    <header className="text-xl font-semibold text-purple-800 text-center">
                        <h2>Sign Up</h2>
                    </header>
                    <p className="text-sm">Create your account to continue</p>
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
                    <section className="w-[85%] mt-[-20px] ">
                        <RoleSelect />
                        {!signup.role && 
                        (<div className="w-[85%] text-left text-sm text-red-500">
                            <p>Select a role</p>
                        </div>)}
                    </section>
                    <section className="w-full flex justify-center items-center">
                        <SignupButton />
                    </section>
                </form>
                <section className="">
                    <Toast type={"networkError"} text={"Check your internet connection and try again"} />
                    <Toast type={"passwordError"} text={"Password must be at least six(6) characters long"} />
                    <Toast type={"emailUsed"} text={"This email has already been used"}/>
                </section>
            </main>
        </>
    )
}