import { AiFillHome } from "react-icons/ai"
import { BsCalendarEventFill } from "react-icons/bs"
import { FaBookOpen, FaUserGraduate } from "react-icons/fa6"
import { GiTeacher } from "react-icons/gi"
import { RiParentFill } from "react-icons/ri"
import { SiGoogleclassroom } from "react-icons/si"
import { TbSpeakerphone } from "react-icons/tb"
import { NavLink } from "react-router-dom"
import { Modal } from "../modals/Modal"

export const MenuItems = () => {

    const menu = [
        {
            link: "/",
            title: "Dashboard",
            icon: <AiFillHome /> 
        },
        {
            link: "teachers",
            title: "Teachers",
            icon: <GiTeacher />
        },
        {
            link: "students",
            title: "Students",
            icon: <FaUserGraduate />
        },
        {
            link: "parents",
            title: "Parents",
            icon: <RiParentFill />
        },
        {
            link: "subjects",
            title: "Subjects",
            icon: <FaBookOpen />
        },
        {
            link: "classes",
            title: "Classes",
            icon: <SiGoogleclassroom />
        },
        {
            link: "events",
            title: "Events",
            icon: <BsCalendarEventFill />
        },
        {
            link: "announcements",
            title: "Announcements",
            icon: <TbSpeakerphone />
        },
    ]

    const otherMenu =  [
                // {
                //     link: "profile",
                //     title: "Profile",
                //     icon: <FaUser />
                // },
                // {
                //     link: "settings",
                //     title: "Settings",
                //     icon: <IoIosSettings />
                // },
                // {
                //     link: "logout",
                //     title: "Logout",
                //     icon: <IoLogOut />
                // },
            ]
    
    return (
        <>
            <main>
                <section className="w-full flex flex-col gap-y-6">
                    {menu.map((item) => {
                    return (
                        <NavLink to={`${(item.link)}`} key={item.title}
                            className="w-full flex items-center gap-x-2 text-2xl md:text-3xl lg:text-sm md:justify-center lg:justify-start
                                cursor-pointer">
                            {/* <div className="py-2 px-2 md:px-0 xl:pl-4 hover:text-purple-500 ">
                                {item.icon}
                            </div>
                            <div className="hidden lg:block hover:text-purple-500 ">
                                {item.title}
                            </div> */}
                        </NavLink>
                        )
                    })}
                </section>
                {/* <section className="mt-5 border-t-1 border-slate-300 pt-4">
                        <div
                            className="flex items-center gap-x-2 p-3 lg:p-0 text-2xl md:text-3xl lg:text-sm justify-center md:justify-center lg:justify-start
                                cursor-pointer xl:pl-4">
                            <div>
                                <Modal type={"logout"} table={"logout"} />
                            </div>
                            <div className="hidden lg:block hover:text-purple-500 text-red-600">
                                Logout
                            </div>
                        </div>
                </section> */}
            </main>
        </>
    )
}