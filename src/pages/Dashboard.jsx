import { Outlet } from "react-router-dom";
import { InfoCard } from "../components/InfoCard";
import { FaEllipsis } from "react-icons/fa6";
import { AttendanceInfo } from "../components/students/AttendanceInfo";
import { FinanceInfo } from "../components/finance/FinanceInfo";
import { EventCalendar } from "../components/events/EventCalendar";
import { EventsList } from "../components/events/EventsList";
import { AnnouncementsList } from "../components/announcement/AnnouncementsList";
import { StudentsInformation } from "../components/students/StudentsInformation";
// import { cardInfo } from "../utils/cardInfo";

export const Dashboard = () => {
    const cardInfo = [
            {
                role: "Students",
                number: 234,
                more: <FaEllipsis />,
                date: "2025/09"
            },
            {
                role: "Teachers",
                number: 52,
                more: <FaEllipsis />,
                date: "2025/09"
            },
            {
                role: "Parents",
                number: 106,
                more: <FaEllipsis />,
                date: "2025/09"
            },
            {
                role: "Staff",
                number: 31,
                more: <FaEllipsis />,
                date: "2025/09"
            },
        ]

    return (
        <>
            <main className="flex flex w-full h-auto bg-slate-50">
                {/* <section className="w-[13%] bg-white">
                    
                    <div className="sticky top-0 flex justify-center md:justify-start lg:pl-4">
                        <SideMenu />
                    </div>
                </section> */}
                <section className="w-[100%] h-auto flex flex-col md:flex-row gap-x-4">
                    <section className="w-[100%] lg:w-[68%] ">
                        {/* Center */}
                        <div className="w-full h-auto grid gap-y-3 gap-x-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-4
                            place-items-center py-2 mt-2">
                            {cardInfo.map((info) => {
                                return <InfoCard key={info.role} info={info}/>
                            })}
                        </div>
                        <div className="w-full h-180 md:h-150 lg:h-70 grid grid-cols-4 grid-rows-11 mt-2
                            gap-x-4 gap-y-4">
                            <div className="col-span-5 row-span-5 md:row-span-5 lg:col-span-2 lg:row-span-11">
                                <StudentsInformation />
                            </div>
                            <div className="col-span-5 row-span-6 md:row-span-7 lg:col-span-2 lg:row-span-11">
                                <AttendanceInfo />
                            </div>
                        </div>
                        <div className="w-full h-100 py-2 mt-2">
                            <FinanceInfo />
                        </div>
                    </section>
                    <section className="w-full h-auto lg:w-[32%]">
                        {/* Right */}
                        
                        <div className="w-full mt-2 md:px-0  md:p-2">
                            <EventCalendar />
                        </div>
                        <div className="w-full mt-2 md:p-2 md:px-0">
                            <EventsList />
                        </div>
                        <div className="w-full md:mt-2 md:p-2 md:px-0">
                            <AnnouncementsList />
                        </div>
                    </section>
                </section>
            </main>
            <Outlet />
        </>
    )
}