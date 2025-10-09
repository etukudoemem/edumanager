import { FaExclamationCircle, FaUser } from "react-icons/fa"
import { Input } from "./Input"
import { IoClose } from "react-icons/io5"
import { FaAddressCard } from "react-icons/fa6"
import { MdBloodtype, MdOutlineReduceCapacity } from "react-icons/md"
import { IoIosCloudUpload, IoIosMail } from "react-icons/io"
import { PiGenderMaleBold } from "react-icons/pi"
import { SiGoogleclassroom } from "react-icons/si"
import { useContext, useState } from "react"
import { creationContext } from "../../contexts/CreationProvider"
// import { useState } from "react"

let nextId = 0
export const CreateClass = ({ table, type, setShow }) => {
        const supervisors = ["Susan Gally", "Ben Vince", "Paula Davis", "Caroline Bennet", "Bret Sam"]
        const grades = ["1", "2", "3", "4", "5"]
        const clases = ["1A", "2B", "3C", "4B", "5A"]
        const { classes, setClasses } = useContext(creationContext)
        const [classInput, setClassInput] = useState({
                capacity: true
            })
        
        const createClass = (e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const supervisor = formData.get("supervisor")
            const gender = formData.get("gender")
            const grade = formData.get("grade")
            const classe = formData.get("classe")
            const capacity = formData.get("capacity")

            if (!capacity) {
                setClassInput({...classInput, capacity: false})
                return
            }
    
            setClasses(
                [...classes, {id: nextId++, supervisor, gender, grade, classe, capacity}]
            )
            console.log(classes)
        }
        
        const handleOnChange = (e) => {
            const { name } = e.target
            setClassInput({...classInput, [name]: true})
        }

    return (
        <>
            <form onSubmit={(e) => createClass(e)}
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
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <label htmlFor="supervisor" className="text-sm opacity-50">Supervisor</label>
                            <select id="supervisor" name="supervisor" className="flex items-center justify-between text-sm w-[35%] md:w-[40%] outline-none">
                            {
                                supervisors.map((supervisor) => 
                                    <option key={supervisor} value={supervisor}>{supervisor}</option>
                                )
                            }
                            </select>
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <PiGenderMaleBold color="black"/>
                            </div>
                            <select id="gender" name="gender" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="Grade" className="text-sm">Grade</label>
                            <select id="grade" name="grade" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                {
                                    grades.map((grade) => 
                                        <option key={grade} value={grade}>{grade}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="Class" className="text-sm">Class</label>
                            <select id="class" name="classe" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                {
                                    clases.map((cl) => 
                                        <option key={cl} value={cl}>{cl}</option>
                                    )
                                }
                            </select>
                            
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!classInput.capacity && "border-red-500 border-2"}`}>
                            <div>
                                <MdOutlineReduceCapacity color="black"/>
                            </div>
                            <input 
                                type="number" 
                                name="capacity"
                                className={`w-full outline-none`}
                                placeholder="Capacity"
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"First name"} inputType={"text"} /> */}
                            <FaExclamationCircle size={20}
                            className={`${!classInput.capacity ? "block text-red-500" : "hidden"}`} />
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