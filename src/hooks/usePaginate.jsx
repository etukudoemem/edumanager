import { useContext, useState } from "react"

export const usePaginate = (itemsInfo) => {

    const [items, setItems] = useState(itemsInfo)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    
    const handleNext = () => {
        if (currentPage !== lastPage) {
            setCurrentPage(currentPage + 1)
        }
    }
    const handlePrevious = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    
    const currentItems = itemsInfo.slice(indexOfFirstItem, indexOfLastItem)
    const lastPage = Math.ceil(itemsInfo.length/itemsPerPage)

    const pageNumbers = []
    for (let index = 1; index <= lastPage; index++) {
        pageNumbers.push(index)
    }
        
    return { 
            items, setItems, currentItems, currentPage, setCurrentPage, 
            lastPage, handleNext, handlePrevious, indexOfFirstItem, 
            indexOfLastItem 
        }
}