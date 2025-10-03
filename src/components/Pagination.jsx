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
                <button onClick={handlePrevious} className="cursor-pointer"
                    disabled={currentPage === 1 && true}>
                    <IoArrowBackCircleOutline size={25}/>
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
                <div className={`flex justify-center items-center w-5 h-5 border-0 border-gray-500 rounded text-sm bg-purple-500 text-white
                        text-gray-700`}>
                    <button>{currentPage}</button>
                </div>
                    {/* className="flex justify-center items-center w-14 h-7 bg-gray-800 text-white rounded"> */}
                    <button onClick={handleNext} className="cursor-pointer"
                        disabled={currentPage === lastPage && true}>
                        <IoArrowForwardCircleOutline size={25}/>
                    </button>
            </section>
        </>
    )
}