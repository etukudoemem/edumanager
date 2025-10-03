export const InfoCard = ({ info }) => {

    return (
        <>
            <div className="w-full h-35 md:h-30 rounded-2xl bg-slate-200 flex flex-col 
                justify-center gap-y-3 md:gap-y-3 p-6 md:p-3 md:px-4 odd:bg-blue-200">
                <div className="flex items-center justify-between text-white">
                    <p className="w-auto h-auto px-2 py-1 md:py-[1.5px] bg-white rounded-xl text-slate-500
                        text-xs md:text-[10px]">
                        {info.date}
                    </p>
                    <div className="text-xl md:text-base cursor-pointer" title="more">
                        {info.more}
                    </div>
                </div>
                <p className="text-xl font-medium">{info.number}</p>
                <p className="text-sm md:text-xs">{info.role}</p>
            </div>
        </>
    )
}