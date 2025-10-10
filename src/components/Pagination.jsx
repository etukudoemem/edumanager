import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export const Pagination = ({ currentItems, currentPage, lastPage, handleNext, handlePrevious }) => {

    return (
        <>
            <section className="flex gap-x-5 justify-center items-center overflow-hidden pb-8">
                <button onClick={handlePrevious} className={`cursor-pointer bg-[#f0f0ff] p-2 shadow-md rounded-full 
                        text-purple-700 ${currentPage === 1 && "bg-gray-200 text-white"}`}
                    disabled={currentPage === 1 && true}>
                    <FaChevronLeft  size={12}/>
                </button>
                <div className={`flex justify-center items-center px-2 py-1 rounded text-sm bg-[#f0f0ff]
                        text-purple-700 font-semibold shadow-md`}>
                    <button>{currentPage} / {lastPage}</button>
                </div>
                    <button onClick={handleNext} className={`cursor-pointer bg-[#f0f0ff] p-2 shadow-md rounded-full 
                        text-purple-700 ${currentPage === lastPage && "bg-gray-200 text-white"}`}
                        disabled={currentPage === lastPage && true}>
                        <FaChevronRight size={12} />
                    </button>
            </section>
        </>
    )
}