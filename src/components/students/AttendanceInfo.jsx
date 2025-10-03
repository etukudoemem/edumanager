import { FaEllipsis } from "react-icons/fa6"
import { AttendanceChart } from "./AttendanceChart"

export const AttendanceInfo = () => {

    return (
        <>
            <main className="w-full h-full bg-pink-200 p-2 rounded-lg">
                <section className="flex justify-between items-center">
                    <p className="text-sm font-semibold">Attendance</p>
                    <div className="cursor-pointer">
                        <FaEllipsis />
                    </div>
                </section>
                <AttendanceChart />
            </main>
        </>
    )
}