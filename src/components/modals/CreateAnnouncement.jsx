import { Input } from "./Input"
import { IoClose, IoTime } from "react-icons/io5"
import { FaAddressCard } from "react-icons/fa6"
import { MdBloodtype, MdDateRange, MdDescription } from "react-icons/md"
import { SiGoogleclassroom } from "react-icons/si"
import { BsCalendarFill } from "react-icons/bs"
import { TbSpeakerphone } from "react-icons/tb"
import { useContext , useState} from "react"
import { creationContext } from "../../contexts/CreationProvider"
import { FaExclamationCircle } from "react-icons/fa"
// import { useState } from "react"

let nextId = 0
export const CreateAnnouncement = ({ table, type, setShow }) => {
    const { announcement, setAnnouncement } = useContext(creationContext)
        const [announcementInput, setAnnouncementInput] = useState({
                title: true,
                date: true,
                details: true,
                class: true,
            })
        
        const createAnnouncement = (e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const title = formData.get("title")
            const date = formData.get("date")
            const details = formData.get("details")
            const classe = formData.get("classe")
            
            // const { name } = e.target
            // let n = formData.get([name])
            // console.log(n)
            if (!title) {
                setAnnouncementInput({...announcementInput, title: false})
                return
            }
            if (!date) {
                setAnnouncementInput({...announcementInput, date: false})
                return
            }
            if (!classe) {
                setAnnouncementInput({...announcementInput, classe: false})
                return
            }
            if (!details) {
                setAnnouncementInput({...announcementInput, details: false})
                return
            }
    
            setAnnouncement(
                [...announcement, {id: nextId++, title, date, classe, details}]
            )
            console.log(announcement)
        }
            
        
        const handleOnChange = (e) => {
            const { name } = e.target
            setAnnouncementInput({...announcementInput, [name]: true})
        }

    return (
        <>
            <form onSubmit={(e) => createAnnouncement(e)}
                className="bg-white w-[90%] md:w-[65%] lg:w-[55%] xl:w-[45%] h-auto flex flex-col gap-y-3 items-center 
                py-8 px-4 md:px-6 rounded-lg shadow-xl relative overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
                <div className="w-full ">
                    <div onClick={() => setShow(false)}
                        className="absolute top-2 right-2 text-center">
                        <IoClose size={25}/>
                    </div>
                    <h2 className="my-4 font-medium">
                        Create new {table}
                    </h2>
                    <section className="flex justify-between flex-col md:flex-row flex-wrap gap-y-4 gap-x-1 md:gap-y-8">
                        <div className={`flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!announcementInput.title && "border-red-500 border-2"}`}>
                            <div>
                                <TbSpeakerphone color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="title"
                                className={`w-full outline-none`}
                                placeholder="Title"
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!announcementInput.title ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"Title"} inputType={"text"} /> */}
                        </div>
                        
                        <div className={`flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!announcementInput.class && "border-red-500 border-2"}`}>
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="class" className="text-sm">Class</label>
                            <select id="class" name="classe" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="All">All</option>
                                <option value="1A">1A</option>
                                <option value="2B">2B</option>
                                <option value="3C">3C</option>
                                <option value="4B">4B</option>
                                <option value="5A">5A</option>
                            </select>
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!announcementInput.date && "border-red-500 border-2"}`}>
                            <div>
                                <MdDateRange color="black"/>
                            </div>
                            <input 
                                type="date" 
                                name="date"
                                className={`w-full outline-none`}
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"Date"} inputType={"date"} /> */}
                        </div>
                        <div className={`flex items-center gap-x-2 w-full h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!announcementInput.details && "border-red-500 border-2"}`}>
                            <div>
                                <MdDescription color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="details"
                                className={`w-full outline-none`}
                                placeholder="Details"
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!announcementInput.details ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"Description"} inputType={"text"} /> */}
                        </div>
                    </section>
                    <section className="mt-6">
                        <div className="flex items-center justify-center text-slate-50 text-sm w-full h-10 mt-4 bg-purple-700 rounded">
                            <button type="submit" className="w-full">
                                Create {table}
                            </button>
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}