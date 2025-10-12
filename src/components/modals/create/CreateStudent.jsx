import { FaBirthdayCake, FaPhone, FaUser, FaExclamationCircle } from "react-icons/fa"
import { Input } from "../Input"
import { IoClose } from "react-icons/io5"
import { FaAddressCard } from "react-icons/fa6"
import { IoIosCloudUpload, IoIosMail } from "react-icons/io"
import { PiGenderMaleBold } from "react-icons/pi"
import { SiGoogleclassroom } from "react-icons/si"
import { useContext, useState } from "react"
import { creationContext } from "../../../contexts/CreationProvider"
// import { useState } from "react"

let nextId = 0
export const CreateStudent = ({ table, type, setShow, photo, setPhoto, handlePhoto, studentInfo }) => {
    const { student, setStudent } = useContext(creationContext)
    const [studentInput, setStudentInput] = useState({
            firstName: true,
            lastName: true,
            subjects: true,
            grade: true,
            class: true,
            phone: true,
            email: true,
            address: true,
            birthday: true,
            gender: true,
            about: true,
            parentFirstName: true,
            parentLastName: true,
        })
    
    const createStudent = (e, studentId) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const subjects = formData.get("subjects")
        const grade = formData.get("grade")
        const classe = formData.get("classe")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const address = formData.get("address")
        const birthday = formData.get("birthday")
        const gender = formData.get("gender")
        const about = formData.get("about")
        const parentFirstName = formData.get("parentFirstName")
        const parentLastName = formData.get("parentLastName")
        
        // const { name } = e.target
        // let n = formData.get([name])
        // console.log(n)
        if (!firstName) {
            setStudentInput({...studentInput, firstName: false})
            return
        }
        if (!lastName) {
            setStudentInput({...studentInput, lastName: false})
            return
        }
        if (!phone) {
            setStudentInput({...studentInput, phone: false})
            return
        }
        if (!email) {
            setStudentInput({...studentInput, email: false})
            return
        }
        if (!address) {
            setStudentInput({...studentInput, address: false})
            return
        }
        if (!birthday) {
            setStudentInput({...studentInput, birthday: false})
            return
        }
        if (!about) {
            setStudentInput({...studentInput, about: false})
            return
        }
        if (!parentFirstName) {
            setStudentInput({...studentInput, parentFirstName: false})
            return
        }
        if (!parentLastName) {
            setStudentInput({...studentInput, parentLastName: false})
            return
        }

        if (type === "create") {
            setStudent(
            [...student, {id: nextId++, firstName, lastName, subjects, grade, 
                classe, phone, email, address, birthday, gender, about, 
                parentFirstName, parentLastName}]
            )
            return
        }

        if (type === "edit") {
            setStudent(
                student.map((s) => 
                    s.id === studentId ? {id: nextId++, firstName, lastName, subjects, grade, 
                    classe, phone, email, address, birthday, gender, about, 
                    parentFirstName, parentLastName} : s
                )
            )
            return
        }
        console.log(student)
    }
        
    
    const handleOnChange = (e) => {
        const { name } = e.target
        setStudentInput({...studentInput, [name]: true})
    }

    return (
        <>
            <form onSubmit={(e) => { if (type === "create") {
                    createStudent(e)
                } else {
                    createStudent(e, studentInfo.id)
                } }}
                className="bg-white w-[90%] md:w-[65%] lg:w-[55%] xl:w-[45%] h-[90vh] md:h-auto flex flex-col gap-y-3 items-center 
                py-8 px-4 md:px-6 rounded-lg shadow-xl relative overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
                <div className="w-full ">
                    <div onClick={() => setShow(false)}
                        className="absolute top-2 right-2 text-center">
                        <IoClose size={25}/>
                    </div>
                    <h2 className="my-4 font-medium">
                        {type === "create" ? "Create new" : "Edit"} {table}
                    </h2>

                    <div className="w-full mt-5 mb-3 text-sm">
                        <h2>Student's Details:</h2>
                    </div>
                    <section className="flex justify-between flex-col md:flex-row flex-wrap gap-y-4 gap-x-1 md:gap-y-8 text-sm">
                        
                        <div className={`flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!studentInput.firstName && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="firstName"
                                className={`w-full outline-none`}
                                placeholder="First name"
                                defaultValue={type === "edit" ? studentInfo.firstName : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!studentInput.firstName ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"First name"} inputType={"text"} /> */}
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!studentInput.lastName && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="lastName"
                                className={`w-full outline-none`}
                                placeholder="Last name"
                                defaultValue={type === "edit" ? studentInfo.lastName : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!studentInput.lastName ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"Last name"} inputType={"text"} /> */}
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="Grade" className="text-sm">Grade</label>
                            <select 
                                id="grade" 
                                name="grade" 
                                defaultValue={type === "edit" ? studentInfo.grade : ""} 
                                className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="Class" className="text-sm">Class</label>
                            <select 
                                id="Class" 
                                name="classe" 
                                defaultValue={type === "edit" ? studentInfo.classe : ""}
                                className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="1A">1A</option>
                                <option value="2B">2B</option>
                                <option value="3C">3C</option>
                                <option value="4B">4B</option>
                                <option value="5A">5A</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <PiGenderMaleBold color="black"/>
                            </div>
                            <select 
                                id="gender" 
                                name="gender" 
                                defaultValue={type === "edit" ? studentInfo.gender : ""}
                                className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!studentInput.phone && "border-red-500 border-2"}`}>
                            <div>
                                <FaPhone color="black"/>
                            </div>
                            <input 
                                type="number" 
                                name="phone"
                                className={`w-full outline-none`}
                                placeholder="Phone"
                                defaultValue={type === "edit" ? studentInfo.phone : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!studentInput.phone ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"Phone"} inputType={"number"} /> */}
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[32%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!studentInput.email && "border-red-500 border-2"}`}>
                            <div>
                                <IoIosMail color="black"/>
                            </div>
                            <input 
                                type="email" 
                                name="email"
                                className={`w-full outline-none`}
                                placeholder="Email"
                                defaultValue={type === "edit" ? studentInfo.email : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!studentInput.email ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"Email"} inputType={"email"} /> */}
                        </div>
                        
                        <div className={`flex items-center gap-x-2 w-full md:w-[66%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!studentInput.address && "border-red-500 border-2"}`}>
                            <div>
                                <FaAddressCard color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="address"
                                className={`w-full outline-none`}
                                placeholder="Address"
                                defaultValue={type === "edit" ? studentInfo.address : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!studentInput.address ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"Address"} inputType={"text"} /> */}
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!studentInput.birthday && "border-red-500 border-2"}`}>
                            <div>
                                <FaBirthdayCake color="black"/>
                            </div>
                            <label htmlFor="Birthday" className="text-sm opacity-50">Birthday</label>
                            <input 
                                type="date" 
                                name="birthday"
                                className={`w-full outline-none`}
                                placeholder="Birthday"
                                defaultValue={type === "edit" ? studentInfo.birthday : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"Birthday"} inputType={"date"} /> */}
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!studentInput.about && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="about"
                                className="w-full outline-none"
                                placeholder="About student"
                                defaultValue={type === "edit" ? studentInfo.about : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!studentInput.about ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"Birthday"} inputType={"date"} /> */}
                        </div>
                        
                        <div className="flex items-center gap-x-2 w-34 md:w-[55%] h-9 border-0 border-gray-600 px-2 rounded">
                            <div>
                                <IoIosCloudUpload color="black"/>
                            </div>
                            <label htmlFor="photo" className="text-sm">Upload photo</label>
                            <input 
                                type="file" 
                                id="photo"
                                name="photo"
                                className={`w-full outline-none hidden`}
                                placeholder="photo"
                                onChange={(e) => handlePhoto(e)}
                            />
                            {/* <Input inputName={"Photo"} inputType={"file"} handlePhoto={handlePhoto} /> */}
                            
                        </div>
                        {photo && 
                        <div className="w-full md:w-[49%] h-9 bg-purple-400 text-white flex items-center justify-between px-2 rounded">
                            <ul className="flex gap-x-2">
                                <li>{photo.name}</li>
                                <li>{(photo.size/1024).toFixed(2)}KB </li>
                            </ul> 
                            <div onClick={() => setPhoto(null)}>
                                <IoClose size={20} />
                            </div>
                        </div>}
                    </section>

                    <div className="w-full mt-5 mb-3 text-sm">
                        <h2>Parent's Details:</h2>
                    </div>
                    <section className="flex justify-between flex-col md:flex-row flex-wrap gap-y-4 gap-x-1 md:gap-y-8 text-sm">
                        
                        <div className={`flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!studentInput.parentFirstName && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="parentFirstName"
                                className={`w-full outline-none`}
                                placeholder="First name"
                                defaultValue={type === "edit" ? studentInfo.parentFirstName : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!studentInput.parentFirstName ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"First name"} inputType={"text"} /> */}
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!studentInput.parentLastName && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="parentLastName"
                                className={`w-full outline-none`}
                                placeholder="Last name"
                                defaultValue={type === "edit" ? studentInfo.parentLastName : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                            <FaExclamationCircle size={20}
                                className={`${!studentInput.parentLastName ? "block text-red-500" : "hidden"}`} />
                            {/* <Input inputName={"Last name"} inputType={"text"} /> */}
                        </div>
                    </section>
                    <section className="mt-6">
                        <div className="flex items-center justify-center text-slate-50 text-sm w-full h-10 mt-4 bg-purple-700 rounded">
                            <button type="submit" className="w-full">
                                {type === "create" ? "Create" : type === "edit" && "Update"} {table}
                            </button>
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}