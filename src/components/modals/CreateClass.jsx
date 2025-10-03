import { FaBirthdayCake, FaPhone, FaUser } from "react-icons/fa"
import { Input } from "./Input"
import { IoClose } from "react-icons/io5"
import { FaAddressCard } from "react-icons/fa6"
import { MdBloodtype } from "react-icons/md"
import { IoIosCloudUpload, IoIosMail } from "react-icons/io"
import { PiGenderMaleBold } from "react-icons/pi"
import { SiGoogleclassroom } from "react-icons/si"
// import { useState } from "react"

export const CreateClass = ({ table, type, setShow }) => {
    // const [photo, setPhoto] = useState(null)

    // const handlePhoto = (e) => {
    //     if (e.target.files) {
    //         setPhoto(e.target.files[0])
    //     }   
    // }

    // const handleFile = (e) => {
    //     console.log(e.target.files[0].name)
    // }
    // console.log(photo.name)

    return (
        <>
            <form className="bg-white w-[90%] md:w-[65%] lg:w-[55%] xl:w-[45%] h-auto flex flex-col gap-y-3 items-center 
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
                        <div className="flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded">
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <Input inputName={"Supervisor's First name"} inputType={"text"} />
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <Input inputName={"Supervisor's Last name"} inputType={"text"} />
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="Grade" className="text-sm">Grade</label>
                            <select id="grade" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                                <option value="">5</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="Class" className="text-sm">Class</label>
                            <select id="class" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="">1A</option>
                                <option value="">2B</option>
                                <option value="">3C</option>
                                <option value="">4B</option>
                                <option value="">5A</option>
                            </select>
                        </div>
                        
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <PiGenderMaleBold color="black"/>
                            </div>
                            <select id="gender" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                    </section>
                    <section className="mt-6">
                        <div className="flex items-center justify-center text-slate-50 text-sm w-full h-10 mt-4 bg-purple-700 rounded">
                            <button>
                                Create {table}
                            </button>
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}