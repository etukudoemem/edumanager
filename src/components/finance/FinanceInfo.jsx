import { FaEllipsis } from "react-icons/fa6"
import { FinanceChart } from "./FinanceChart"

export const FinanceInfo = () => {

    return (
        <>
            <main className="w-full h-full bg-blue-50 p-2 rounded-lg">
                <section className="flex justify-between items-center">
                    <p className="text-sm font-semibold">Finances</p>
                    <div className="cursor-pointer">
                        <FaEllipsis />
                    </div>
                </section>
                <FinanceChart />
            </main>
        </>
    )
}