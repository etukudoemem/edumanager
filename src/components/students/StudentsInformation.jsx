import { FaEllipsis } from "react-icons/fa6"
import { StudentsChart } from "./StudentsChart"

export const StudentsInformation = () => {

    return (
        <> 
        {/* (bg-purple-200) */}
            <main className="w-full h-full p-2 rounded-lg bg-purple-200">
                <div className="flex justify-between items-center">
                    <p className="text-sm font-semibold">Students</p>
                    <div className="cursor-pointer">
                        <FaEllipsis />
                    </div>
                </div>
                <StudentsChart />
                <div className="mt-5 top-40 flex justify-center gap-x-10 md:gap-x-5 -translate-y-27 md:-translate-y-25">
                    <div className="flex flex-col text-xs items-center">
                        <span className="w-3 h-3 bg-[#8884d8] rounded-full"></span>
                        <span className="font-bold text-sm">126</span>
                        <span>Boys (54%)</span>
                    </div>
                    <div className="flex flex-col text-xs items-center">
                        <span className="w-3 h-3 bg-[#83a6ed] rounded-full"></span>
                        <span className="font-bold text-sm">108</span>
                        <span>Girls (46%)</span>
                    </div>
                    <div className="flex flex-col text-xs items-center">
                        <span className="w-3 h-3 bg-[#8dd1e1] rounded-full"></span>
                        <span className="font-bold text-sm">234</span>
                        <span>Total (100%)</span>
                    </div>
                </div>
            </main>
        </>
    )
}