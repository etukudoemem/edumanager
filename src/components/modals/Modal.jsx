import { FaEdit } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"
import { VscSettings } from "react-icons/vsc"
import { MdSort } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { useState } from "react"
import { DeleteModal } from "./DeleteModal"
import { CreateModal } from "./CreateModal"
import { IoClose } from "react-icons/io5"

export const Modal = ({ table, type }) => {

    const [show, setShow] = useState(false)
    // const size = type === "filter" | "sort" | "create" ? "w-7 h-7" : "w-9 h-9"
    // const bgColor = type === "filter" | "sort" | "create" ? "bg-purple-800" : "bg-purple-100"
    // const color = type === "filter" | "sort" | "create" ? "text-white" : "text-purple-800"

    const popUp = () => {
        return (
            type === "edit" ? (
                <section className="w-screen h-screen bg-black/40 fixed top-0 right-0 flex justify-center items-center
                    text-gray-700">
                    {
                        <CreateModal table={table} setShow={setShow} />
                    }
                </section>
            ) : type === "delete" ? (
                <section className="w-screen h-screen bg-black/40 fixed top-0 right-0 flex justify-center items-center
                    text-gray-700">
                    {
                        <DeleteModal table={table} setShow={setShow} />
                    }
                </section>
            ) : type === "create" ? (
                <section className="w-screen h-screen bg-black/40 fixed top-0 right-0 flex justify-center items-center
                    text-gray-700">
                    {
                        <CreateModal table={table} type={type} setShow={setShow} />
                    }
                </section>
            ) : type === "filter" ? (
                <section className="fixed top-20 right-10 w-40 h-50 p-4 bg-green-400">
                    <div onClick={() => setShow(false)} className="justify-self-end">
                        <IoClose size={22} />
                    </div>
                    {
                        <div className="w-50 h-50">Filter</div>
                    }
                </section>
            ) : type === "sort" ? (
                <section className="fixed top-20 right-5 w-40 h-50 p-4 bg-green-400">
                    <div onClick={() => setShow(false)} className="justify-self-end">
                        <IoClose size={22} />
                    </div>
                    {
                        <div className="w-50 h-50">Sort</div>
                    }
                </section>
            ) : null
        )
    }

            

    const selectIcon = () => {
        return (
            type === "filter" ? <VscSettings size={19}/> 
            : type === "sort" ? <MdSort size={19}/>
            : type === "create" ? <IoMdAdd size={19}/>
            : type === "edit" ? <FaEdit size={17}/>
            : <RiDeleteBin5Line size={17} />
        )
    }

    const Icon = selectIcon()

    return (
        <>
            {
                show && popUp()
            }
            <button onClick={() => setShow(true)} title={`${type}`}
                className={`w-9 h-9 bg-[#f0f0ff] text-purple-700 rounded-full flex justify-center items-center cursor-pointer`}>
                {Icon}
            </button>
        </>
    )
}