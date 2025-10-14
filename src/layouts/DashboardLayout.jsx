import { Outlet, useNavigate } from "react-router-dom";
import { Search } from "../components/Search";
import { Notifications } from "../components/Notifications";
import { UserInfo } from "../components/UserInfo";
import { Avatar } from "../components/Avatar";
import { AiFillHome } from "react-icons/ai"
import { BsCalendarEventFill } from "react-icons/bs"
import { FaBookOpen, FaUserGraduate } from "react-icons/fa6"
import { GiTeacher } from "react-icons/gi"
import { RiParentFill } from "react-icons/ri"
import { SiGoogleclassroom } from "react-icons/si"
import { TbSchool, TbSpeakerphone } from "react-icons/tb"
import { NavLink } from "react-router-dom"
import { Modal } from "../components/modals/Modal";

export const DashboardLayout = () => {
    const navigate = useNavigate()

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
    

    return (
        <>
            <main className="flex w-full min-h-[100vh] bg-slate-50">
                <section className="w-[15%] h-auto md:w-[10%] lg:w-[15%] bg-white text-2xl lg:text-sm">
                    {/* Left */}
                    <div className="sticky top-0 h-[100vh] flex flex-col items-center lg:justify-start shadow-xl rounded-tr-3xl px-1 md:pr-1 py-3">
                        <section className="w-full flex flex-col gap-y-2 font-semibold">
                            <div onClick={() => navigate("/")}
                                className="font-medium text-sm flex items-center gap-x-1 justify-center lg:justify-start mb-5 px-2">
                                <TbSchool size={35} />
                                <p className="hidden lg:block">EduManager</p>
                            </div>
                            {menu.map((item) => {
                                return (
                                    <NavLink to={`${(item.link)}`} key={item.title}
                                        className="w-full flex items-center justify-center lg:justify-start gap-x-1 
                                            cursor-pointer md:rounded-r-full">
                                        <div className="py-4 px-2 hover:text-purple-500 lg:text-xl">
                                            {item.icon}
                                        </div>
                                        <div className="hidden lg:block hover:text-purple-500 ">
                                            {item.title}
                                        </div>
                                    </NavLink>
                                    )
                                })}
                                <div
                                    className="flex items-center justify-center lg:justify-start gap-x-2 cursor-pointer mt-0">
                                    <div className="py-5 px-2 lg:text-xl">
                                        <Modal type={"logout"} table={"logout"} />
                                    </div>
                                    <div className="hidden lg:block hover:text-purple-500 text-red-600">
                                        Logout
                                    </div>
                                </div>
                        </section>
                    </div>
                </section>
                <section className="w-[85%] md:w-[90%] lg:w-[85%] h-auto flex flex-col px-3 md:px-4">
                    <div className="flex items-center justify-between w-full">
                        <div className="py-2 mt-2">
                            <Search />
                        </div>
                        <div className="md:flex hidden items-center justify-end gap-x-5 p-2">
                            <Notifications />
                            <UserInfo />
                            <Avatar />
                        </div>
                    </div>

                    {/* <section className="w-[100%] lg:w-[68%] ">
                        <div className="p-2 mt-2 px-4 ">
                            <Search />
                        </div>
                        <div className="w-full h-auto grid gap-y-3 gap-x-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4
                            place-items-center py-2 px-4 mt-2">
                            {cardInfo.map((info) => {
                                return <InfoCard key={info.role} info={info}/>
                            })}
                        </div>
                        <div className="w-full h-180 md:h-150 lg:h-70 grid grid-cols-5 grid-rows-11 mt-2
                            gap-x-4 px-4 gap-y-4">
                            <div className="col-span-5 row-span-5 md:row-span-5 lg:col-span-2 lg:row-span-11">
                                <StudentsInfo />
                            </div>
                            <div className="col-span-5 row-span-6 md:row-span-7 lg:col-span-3 lg:row-span-11">
                                <AttendanceInfo />
                            </div>
                        </div>
                        <div className="w-full h-100 py-2 px-4 mt-2">
                            <FinanceInfo />
                        </div>
                    </section>
                    <section className="w-full h-auto lg:w-[32%]">
                        <div className="md:flex hidden items-center justify-end gap-x-5 p-2 ">
                            <Notifications />
                            <UserInfo />
                            <Avatar />
                        </div>
                        <div className="w-full mt-2 lg:mt-5 px-4 md:px-0 md:pr-4  md:p-2">
                            <EventCalendar />
                        </div>
                        <div className="w-full mt-2 p-2  md:px-0 md:pr-4 px-4">
                            <EventsList />
                        </div>
                        <div className="w-full md:mt-2 p-2  md:px-0 md:pr-4 px-4">
                            <AnnouncementsList />
                        </div>
                    </section> */}
                    <Outlet />
                </section>
            </main>
        </>
    )
}