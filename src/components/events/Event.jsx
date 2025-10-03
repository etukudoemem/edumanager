export const Event = ({ event }) => {

    return (
        <>
            <section className={`h-auto border-t-4 border-1 odd:border-[#8884d8] even:border-[#8dd1e1] 
                    text-xs px-4 py-4 mb-4 rounded-lg bg-white`}>
                <div className="w-full flex justify-between">
                    <h2 className="font-semibold mb-2">{event.title}</h2>
                    <span className="text-gray-500 text-[10px] ">{event.starts} - {event.ends}</span>
                </div>
                <p className="text-gray-500 w-full lg:w-[75%] ">{event.description}</p>
            </section>
        </>
    )
}