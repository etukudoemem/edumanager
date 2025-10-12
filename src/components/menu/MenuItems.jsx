import { AiFillHome } from "react-icons/ai"
import { BsCalendarEventFill } from "react-icons/bs"
import { FaBookOpen, FaUser, FaUserGraduate } from "react-icons/fa6"
import { GiTeacher } from "react-icons/gi"
import { HiMiniSpeakerWave } from "react-icons/hi2"
import { IoIosSettings } from "react-icons/io"
import { IoLogOut } from "react-icons/io5"
import { PiSpeakerNoneFill } from "react-icons/pi"
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
                <section className="w-full">
                    {menu.map((item) => {
                    return (
                        <NavLink to={`${(item.link)}`} key={item.title}
                            className="w-full flex items-center gap-x-2 text-2xl md:text-sm justify-center md:justify-start
                                cursor-pointer">
                            <div className="p-3 hover:text-purple-500">
                                {item.icon}
                            </div>
                            <div className="hidden md:block hover:text-purple-500 ">
                                {item.title}
                            </div>
                        </NavLink>
                        )
                    })}
                </section>
                <section className="mt-5 border-t-1 border-slate-300 pt-4">
                    {/* {otherMenu.map((item) => {
                    return (
                        <NavLink to={`${(item.link)}`} key={item.title}
                            className="flex items-center gap-x-2 p-3 text-2xl md:text-base justify-center md:justify-start
                                cursor-pointer">
                            <div>
                                {item.icon}
                            </div>
                            <div className="hidden md:block hover:text-purple-500">
                                {item.title}
                            </div>
                        </NavLink>
                        )
                    })} */}
                        <div
                            className="flex items-center gap-x-2 p-3 text-2xl md:text-base justify-center md:justify-start
                                cursor-pointer">
                            <div>
                                <Modal type={"logout"} table={"logout"} />
                            </div>
                            <div className="hidden md:block hover:text-purple-500 text-red-600">
                                Logout
                            </div>
                        </div>
                </section>
            </main>
        </>
    )
}