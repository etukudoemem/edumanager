export const Announcement = ({ announcement }) => {

    return (
        <>
            <section className={`h-auto text-xs px-4 py-4 mb-4 rounded-sm odd:bg-green-100 even:bg-pink-100`}>
                <div className="w-full flex justify-between">
                    <h2 className="font-semibold mb-2">{announcement.title}</h2>
                    <span className="text-gray-500 text-[10px] ">{announcement.date}</span>
                </div>
                <p className="text-gray-500 w-full lg:w-[75%] ">{announcement.details}</p>
            </section>
        </>
    )
}