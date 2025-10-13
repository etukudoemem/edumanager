import { Outlet } from "react-router-dom";
import { SideMenu } from "../components/menu/SideMenu";
import { Search } from "../components/Search";
import { Notifications } from "../components/Notifications";
import { UserInfo } from "../components/UserInfo";
import { Avatar } from "../components/Avatar";
import { Toast } from "../components/toasts/Toast";
// import { InfoCard } from "../components/InfoCard";
// import { FaEllipsis } from "react-icons/fa6";
// import { StudentsInfo } from "../components/students/StudentsInfo";
// import { AttendanceInfo } from "../components/students/AttendanceInfo";
// import { FinanceInfo } from "../components/finance/FinanceInfo";
// import { EventCalendar } from "../components/events/EventCalendar";
// import { EventsList } from "../components/events/EventsList";
// import { AnnouncementsList } from "../components/announcement/AnnouncementsList";
// // import { cardInfo } from "../utils/cardInfo";

export const DashboardLayout = () => {
    // const cardInfo = [
    //         {
    //             role: "Students",
    //             number: 234,
    //             more: <FaEllipsis />,
    //             date: "2025/09"
    //         },
    //         {
    //             role: "Teachers",
    //             number: 52,
    //             more: <FaEllipsis />,
    //             date: "2025/09"
    //         },
    //         {
    //             role: "Parents",
    //             number: 106,
    //             more: <FaEllipsis />,
    //             date: "2025/09"
    //         },
    //         {
    //             role: "Staff",
    //             number: 31,
    //             more: <FaEllipsis />,
    //             date: "2025/09"
    //         },
    //     ]

    return (
        <>
            <main className="flex flex w-full min-h-[100vh] bg-slate-50">
                <section className="w-[13%] bg-white">
                    {/* Left */}
                    <div className="sticky top-0 flex justify-center md:justify-start lg:pl-4">
                        <SideMenu />
                    </div>
                </section>
                <section className="w-[87%] h-auto flex flex-col px-3 md:px-4">
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