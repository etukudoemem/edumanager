import { NavLink } from "react-router-dom"

export const Home = () => {

    return (
        <>
            <main className="w-full h-screen flex flex-col justify-center items-center gap-y-5 text-center">
                <header>
                    Welcome to EduManager
                </header>
                <section>
                    <p>Login</p>
                    <NavLink to={"dashboard"}
                        className="hover:text-blue-800">
                        Dashboard
                    </NavLink>
                </section>
            </main>
        </>
    )
}