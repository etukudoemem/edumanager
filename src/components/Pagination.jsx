import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5"

export const Pagination = ({ currentPage, lastPage, handleNext, handlePrevious }) => {

    return (
        <>
            <section className="flex gap-x-5 justify-center items-center overflow-hidden">
                {/* <div onClick={handlePrevious}
                    className="flex justify-center items-center w-14 h-7 bg-gray-800 text-white rounded">
                    <button disabled={currentPage === 1 && true}>
                        Prev
                    </button>
                </div> */}
                <button onClick={handlePrevious} className={`cursor-pointer bg-[#f0f0ff] p-1 shadow-lg rounded-full 
                        text-purple-700 ${currentPage === 1 && "bg-gray-100 text-white"}`}
                    disabled={currentPage === 1 && true}>
                    <FaChevronLeft />
                </button>
                {/* {
                    pageNumbers.map((number) =>
                        <div key={number} onClick={() => setCurrentPage(number)}
                            className={`flex justify-center items-center w-7 h-7 border-1 border-gray-500 rounded text-sm
                             text-gray-700 ${currentPage === number && "bg-purple-200 "}`}>
                            <button>{number}</button>
                        </div>
                    )
                } */}
                <div className={`flex justify-center items-center w-8 h-6 rounded text-sm bg-[#f0f0ff]
                        text-purple-700 font-semibold`}>
                    <button>{currentPage} / {lastPage}</button>
                </div>
                    {/* className="flex justify-center items-center w-14 h-7 bg-gray-800 text-white rounded"> */}
                    <button onClick={handleNext} className={`cursor-pointer bg-[#f0f0ff] p-1 shadow-lg rounded-full 
                        text-purple-700 ${currentPage === lastPage && "bg-gray-100 text-white"}`}
                        disabled={currentPage === lastPage && true}>
                        <FaChevronRight />
                    </button>
            </section>
        </>
    )
}