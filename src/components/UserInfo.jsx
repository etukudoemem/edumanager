import { useContext } from "react"
import { authContext } from "../contexts/AuthProvider"

export const UserInfo = () => {
    const { userDetails } = useContext(authContext)
    return (
        <>
            <main>
                <section className="flex flex-col items-end w-full ">
                    <p className="font-semibold text-[12px]">{userDetails.fName} {userDetails.lName}</p>
                    <p className="text-[10px] mt-[-3px] ">{userDetails.role}</p>
                </section>
            </main>
        </>
    )
}