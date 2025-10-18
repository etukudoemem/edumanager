import { useContext } from "react"
import { Link } from "react-router-dom"
import { Email } from "../components/input/Email"
import { authContext } from "../contexts/AuthProvider"
import { Password } from "../components/input/Password"
import { LoginButton } from "../components/buttons/LoginButton"
import { Toast } from "../components/toasts/Toast"

export const Login = () => {
    const { signUserIn, login, signUserOut } = useContext(authContext)
    return (
        <>
            <main className="w-full h-screen flex flex-col justify-center items-center bg-purple-50">
                <form onSubmit={(e) => signUserIn(e)}
                    className="w-full md:w-120 h-screen flex flex-col gap-y-10 justify-center items-center bg-white">
                    <header className="text-xl font-semibold text-purple-800">
                        Welcome Back!
                    </header>
                    <p className="text-sm">Log into your account to continue</p>
                    <section className="w-full flex flex-col gap-y-6 justify-center items-center">
                        <Email />
                        {!login.email && 
                        (<div className="w-[85%] -mt-[22px] text-left text-sm text-red-500">
                            <p>Email is required</p>
                        </div>)}
                        <Password />
                        {!login.password && 
                        (<div className="w-[85%] -mt-[22px] text-left text-sm text-red-500">
                            <p>Password is required</p>
                        </div>)}
                        <div className="w-[85%] -mt-[20px] text-right text-sm">
                            <Link to={"signup"}
                                className="">
                                New? Sign Up
                            </Link>
                        </div>
                    </section>
                    <section className="w-full flex justify-center items-center">
                        <LoginButton />
                    </section>
                </form>
                <section>
                    <Toast type={"networkError"} text={"Check your internet connection and try again"} />
                    <Toast type={"credentials"} text={"Incorrect login credentials"} />
                </section>
            </main>
        </>
    )
}