import { Outlet, useNavigate } from "react-router-dom";
import { Search } from "../components/Search";
import { Notifications } from "../components/Notifications";
import { UserInfo } from "../components/UserInfo";
import { Avatar } from "../components/Avatar";
import { BsCalendar4Event} from "react-icons/bs"
import { RiHome9Line, RiParentLine } from "react-icons/ri"
import { SiGoogleclassroom } from "react-icons/si"
import { TbSchool } from "react-icons/tb"
import { NavLink } from "react-router-dom"
import { Modal } from "../components/modals/Modal";
import { PiChalkboardTeacher, PiStudent } from "react-icons/pi";
import { GoBook } from "react-icons/go";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

export const DashboardLayout = () => {
    const navigate = useNavigate()

    const menu = [
            {
                link: "/",
                title: "Dashboard",
                icon: <RiHome9Line /> 
            },
            {
                link: "teachers",
                title: "Teachers",
                icon: <PiChalkboardTeacher />
            },
            {
                link: "students",
                title: "Students",
                icon: <PiStudent />
            },
            {
                link: "parents",
                title: "Parents",
                icon: <RiParentLine />
            },
            {
                link: "subjects",
                title: "Subjects",
                icon: <GoBook />
            },
            {
                link: "classes",
                title: "Classes",
                icon: <SiGoogleclassroom />
            },
            {
                link: "events",
                title: "Events",
                icon: <BsCalendar4Event />
            },
            {
                link: "announcements",
                title: "Announcements",
                icon: <HiOutlineSpeakerWave />
            },
        ]
    

    return (
        <>
            <main className="flex w-full min-h-full bg-slate-50">
                <section className="w-[15%] min-h-[100vh] md:w-[10%] lg:w-[15%] text-2xl lg:text-sm">
                    {/* Left */}
                    <div className="sticky top-0 min-h-[100vh] flex flex-col items-center lg:justify-start shadow-xl lg:pr-2 px-2 lg:px-0 py-2">
                        <section className="w-full flex flex-col gap-y-3 ">
                            <div onClick={() => navigate("/")}
                                className="font-medium text-sm text-purple-900 flex items-center gap-x-1 justify-center lg:justify-start mb-5 px-2">
                                <TbSchool size={35} className=""/>
                                <p className="hidden lg:block">eduManager</p>
                            </div>
                            {menu.map((item) => {
                                return (
                                    <NavLink to={`${(item.link)}`} key={item.title}
                                        className="w-full flex items-center justify-center lg:justify-start gap-x-2 
                                            cursor-pointer lg:rounded-r-full rounded px-2 py-3 hover:text-purple-700">
                                        <div className="lg:pl-1 lg:text-xl">
                                            {item.icon}
                                        </div>
                                        <div className="hidden lg:block ">
                                            {item.title}
                                        </div>
                                    </NavLink>
                                    )
                                })}
                                <div
                                    className="flex items-center justify-center lg:justify-start gap-x-2 cursor-pointer py-5 px-2">
                                    <div className=" lg:text-xl lg:pl-1">
                                        <Modal type={"logout"} table={"logout"} />
                                    </div>
                                    <div className="hidden lg:block hover:text-red-700 text-red-600">
                                        Logout
                                    </div>
                                </div>
                        </section>
                    </div>
                </section>
                <section className="w-[85%] md:w-[90%] lg:w-[85%] h-auto flex flex-col px-3 md:px-4">
                    <div className="flex items-center justify-between w-full">
                        <div className="py-2 mt-2">
                            {/* <Search /> */}
                        </div>
                        <div className="flex items-center justify-end gap-x-3 p-2">
                            <Notifications />
                            <UserInfo />
                            <Avatar />
                        </div>
                    </div>
                    <Outlet />
                </section>
            </main>
        </>
    )
}