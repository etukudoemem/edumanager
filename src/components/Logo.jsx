import { NavLink } from "react-router-dom"

export const Logo = () => {

    return (
        <>
            <main>
                <NavLink to={"/"}
                    className="font-medium text-sm flex items-center gap-x-1 justify-center md:justify-start">
                    <div className="w-5 h-5 bg-black rounded-full"></div>
                    <p className="hidden md:block">EduManager</p>
                </NavLink>
            </main>
        </>
    )
}