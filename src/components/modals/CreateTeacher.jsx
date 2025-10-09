import { FaBirthdayCake, FaPhone, FaUser, FaExclamationCircle, FaChevronRight, FaChevronDown } from "react-icons/fa"
import { useContext, useState } from "react"
import { creationContext } from "../../contexts/CreationProvider"
import { IoClose } from "react-icons/io5"
import { SiGoogleclassroom } from "react-icons/si"
import { FaAddressCard } from "react-icons/fa6"
import { FaBookOpen } from "react-icons/fa6"
import { IoIosCloudUpload, IoIosMail } from "react-icons/io"
import { PiGenderMaleBold } from "react-icons/pi"
// import { useState } from "react"
let nextId = 0
export const CreateTeacher = ({ table, type, setShow, photo, setPhoto, handlePhoto }) => {
    const [view, setView] = useState({
        subjects: false,
        classes: false
    })
    const subjects = ["Mathematics", "History", "Literature", "Biology", "Arts"]
    const classes = ["1A", "2B", "3C", "4B", "5A"]
    const [subjectList, setSubjectList] = useState([])
    const [classList, setClassList] = useState([])
    const { teacher, setTeacher } = useContext(creationContext)
    const [teacherInput, setTeacherInput] = useState({
            firstName: true,
            lastName: true,
            subjects: true,
            classes: true,
            phone: true,
            email: true,
            address: true,
            birthday: true,
            gender: true,
            about: true,
        })
    
    const createTeacher = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const classes = formData.get("classes")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const address = formData.get("address")
        const birthday = formData.get("birthday")
        const gender = formData.get("gender")
        const about = formData.get("about")
        
        // const { name } = e.target
        // let n = formData.get([name])
        // console.log(n)
        if (!firstName) {
            setTeacherInput({...teacherInput, firstName: false})
            return
        }
        if (!lastName) {
            setTeacherInput({...teacherInput, lastName: false})
            return
        }
        if (subjectList.length < 1) {
            setTeacherInput({...teacherInput, subjects: false})
            return
        }
        if (classList.length < 1) {
            setTeacherInput({...teacherInput, classes: false})
            return
        }
        if (!phone) {
            setTeacherInput({...teacherInput, phone: false})
            return
        }
        if (!email) {
            setTeacherInput({...teacherInput, email: false})
            return
        }
        if (!address) {
            setTeacherInput({...teacherInput, address: false})
            return
        }
        if (!birthday) {
            setTeacherInput({...teacherInput, birthday: false})
            return
        }
        if (!about) {
            setTeacherInput({...teacherInput, about: false})
            return
        }

        setTeacher(
            [...teacher, {id: nextId++, firstName, lastName, subjects: [...subjectList], classes: [...classList], phone, email, address, birthday, gender, about}]
        )
        console.log(teacher)
    }
    

    const handleOnChange = (e) => {
        const { name } = e.target
        setTeacherInput({...teacherInput, [name]: true})
    }

    const handleSubjects = (e) => {
        if (!teacherInput.subjects) {
            setTeacherInput({...teacherInput, subjects: true})
        }
        
        if (e.target.checked) {
            setSubjectList([...subjectList, e.target.value])
        } else {
            setSubjectList(subjectList.filter((sub) => sub !== e.target.value))
        }
        console.log(subjectList)
        // const options = Array.from(e.target.selectedOptions)
        // const list = options.map((option) => {
        //     if (option.selected) {
        //         return option.value
        //     } else {
        //         return option
        //     }
        // })
        // console.log(list)
        // setSubjectList(list)
    }

    const handleClasses = (e) => {
        if (!teacherInput.classes) {
            setTeacherInput({...teacherInput, classes: true})
        }
        
        if (e.target.checked) {
            setClassList([...classList, e.target.value])
        } else {
            setClassList(classList.filter((cl) => cl !== e.target.value))
        }
        console.log(classList)
    }

    return (
        <>
            <form onSubmit={(e) => createTeacher(e)}
                className="bg-white w-[90%] md:w-[65%] lg:w-[55%] xl:w-[45%] h-[90vh] md:h-[85vh] flex flex-col gap-y-3 items-center 
                py-8 px-4 md:px-6 rounded-lg shadow-xl relative overflow-y-scroll">
                <div className="w-full ">
                    <div onClick={() => setShow(false)}
                        className="absolute top-2 right-2 text-center">
                        <IoClose size={25}/>
                    </div>
                    <h2 className="my-4 font-medium">
                        Create new {table}
                    </h2>
                    <section className="flex justify-between flex-col md:flex-row flex-wrap gap-y-4 gap-x-1 md:gap-y-8">
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!teacherInput.firstName && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="firstName"
                                className={`w-full outline-none`}
                                placeholder="First name"
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"First name"} inputType={"text"} /> */}
                            <FaExclamationCircle size={20}
                            className={`${!teacherInput.firstName ? "block text-red-500" : "hidden"}`} />
                        </div>
                        
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!teacherInput.lastName && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="lastName"
                                className={`w-full outline-none`}
                                placeholder="Last name"
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"Last name"} inputType={"text"} /> */}
                            <FaExclamationCircle size={20}
                            className={`${!teacherInput.lastName ? "block text-red-500" : "hidden"}`} />
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 border-gray-600 
                            px-2 rounded relative ${!teacherInput.subjects && "border-red-500 border-2"}`}>
                            <div>
                                <FaBookOpen color="black"/>
                            </div>
                            <label htmlFor="subjects" className="text-sm" onClick={() => setView({...view, subjects: !view.subjects})}>Subject(s)</label>
                                <div>
                                    {view.subjects ? <FaChevronDown size={12}/> : <FaChevronRight size={12}/>}
                                </div>
                            <div id="subjects" name="subjects" multiple 
                                className={`flex flex-col justify-between text-sm w-[50%] md:w-[60%] outline-none
                                    ${view.subjects ? "block" : "hidden"} h-40 py-2 px-2 bg-purple-100 z-10 absolute top-10 left-0`}>
                                {
                                    subjects.map((sub) => 
                                        <div key={sub} className="flex gap-x-1">
                                            <input className="px-2 py-1" type="checkbox" onChange={handleSubjects} 
                                            id="sub" name="sub" value={sub} />
                                            <label htmlFor="sub">{sub}</label>
                                        </div>
                                    )
                                }
                                {/* <div className="flex gap-x-1">
                                    <input className="px-2 py-1" type="checkbox" onChange={handleSubjects} 
                                    id="history" value={"History"}/>
                                    <label htmlFor="history">History</label>
                                </div>
                                <div className="flex gap-x-1">
                                    <input className="px-2 py-1" type="checkbox" onChange={handleSubjects} 
                                    id="literature" value={"Literarture"}/>
                                    <label htmlFor="literature">Literarture</label>
                                </div>
                                <div className="flex gap-x-1">
                                    <input className="px-2 py-1" type="checkbox" onChange={handleSubjects} 
                                    id="biology" value={"Biology"}/>
                                    <label htmlFor="biology">Biology</label>
                                </div>
                                <div className="flex gap-x-1">
                                    <input className="px-2 py-1" type="checkbox" onChange={handleSubjects} 
                                    id="arts" value={"Arts"}/>
                                    <label htmlFor="arts">Arts</label>
                                </div> */}
                            </div>
                            {/* <Input inputName={"Last name"} inputType={"text"} /> */}
                        </div>
                        <div className="flex flex-wrap gap-2 w-full h-auto -mt-[12px] md:-mt-[20px]">
                            {subjectList.map((subject) =>
                                <div key={subject} className="flex items-center gap-x-2 h-auto w-auto px-2 py-1 bg-purple-700 rounded text-slate-50 text-xs font-light">
                                    {subject}
                                </div>
                            )}
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 border-gray-600 
                            px-2 rounded relative ${!teacherInput.classes && "border-red-500 border-2"}`}>
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="classes" className="text-sm" onClick={() => setView({...view, classes: !view.classes})}>Class(es)</label>
                                <div>
                                    {view.classes ? <FaChevronDown size={12}/> : <FaChevronRight size={12}/>}
                                </div>
                            <div id="classes" name="classes" 
                                className={`flex flex-col justify-between text-sm w-[50%] md:w-[60%] outline-none
                                    ${view.classes ? "block" : "hidden"} h-40 py-2 px-2 bg-purple-100 z-10 absolute top-10 left-0`}>
                                {
                                    classes.map((clas) =>
                                        <div className="flex gap-x-1">
                                            <input className="px-2 py-1" type="checkbox" onChange={handleClasses} 
                                            id={clas} name={clas} value={clas} />
                                            <label htmlFor={clas}>{clas}</label>
                                        </div>
                                    )
                                }
                                {/* <div className="flex gap-x-1">
                                    <input className="px-2 py-1" type="checkbox" onChange={handleChecked} 
                                    id="history" value={"History"}/>
                                    <label htmlFor="history">History</label>
                                </div>
                                <div className="flex gap-x-1">
                                    <input className="px-2 py-1" type="checkbox" onChange={handleChecked} 
                                    id="literature" value={"Literarture"}/>
                                    <label htmlFor="literature">Literarture</label>
                                </div>
                                <div className="flex gap-x-1">
                                    <input className="px-2 py-1" type="checkbox" onChange={handleChecked} 
                                    id="biology" value={"Biology"}/>
                                    <label htmlFor="biology">Biology</label>
                                </div>
                                <div className="flex gap-x-1">
                                    <input className="px-2 py-1" type="checkbox" onChange={handleChecked} 
                                    id="arts" value={"Arts"}/>
                                    <label htmlFor="arts">Arts</label>
                                </div> */}
                            </div>
                            {/* <Input inputName={"Last name"} inputType={"text"} /> */}
                        </div>
                        <div className="flex flex-wrap gap-2 w-full h-auto -mt-[12px] md:-mt-[20px]">
                            {classList.map((clas) =>
                                <div key={clas} className="flex items-center gap-x-2 h-auto w-auto px-2 py-1 bg-purple-700 rounded text-slate-50 text-xs font-light">
                                    {clas}
                                </div>
                            )}
                        </div>
                        {/* <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded`}>
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="classes" className="text-sm opacity-50">Class(es)</label>
                            <select id="classes" name="classes" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="1A">1A</option>
                                <option value="2B">2B</option>
                                <option value="3C">3C</option>
                                <option value="4B">4B</option>
                                <option value="5A">5A</option>
                            </select>
                            
                        </div> */}
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!teacherInput.phone && "border-red-500 border-2"}`}>
                            <div>
                                <FaPhone color="black"/>
                            </div>
                            <input 
                                type="number" 
                                name="phone"
                                className={`w-full outline-none`}
                                placeholder="Phone number"
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"Phone"} inputType={"number"} /> */}
                            <FaExclamationCircle size={20}
                            className={`${!teacherInput.phone ? "block text-red-500" : "hidden"}`} />
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!teacherInput.email && "border-red-500 border-2"}`}>
                            <div>
                                <IoIosMail color="black"/>
                            </div>
                            <input 
                                type="email" 
                                name="email"
                                className={`w-full outline-none`}
                                placeholder="Email"
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"Email"} inputType={"email"} /> */}
                            <FaExclamationCircle size={20}
                            className={`${!teacherInput.email ? "block text-red-500" : "hidden"}`} />
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!teacherInput.address && "border-red-500 border-2"}`}>
                            <div>
                                <FaAddressCard color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="address"
                                className={`w-full outline-none`}
                                placeholder="Address"
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"Address"} inputType={"text"} /> */}
                            <FaExclamationCircle size={20}
                            className={`${!teacherInput.address ? "block text-red-500" : "hidden"}`} />
                        </div>
                        
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!teacherInput.birthday && "border-red-500 border-2"}`}>
                            <div>
                                <FaBirthdayCake color="black"/>
                            </div>
                            <label htmlFor="Birthday" className="text-sm opacity-50">Birthday</label>
                            <input 
                                type="date" 
                                name="birthday"
                                className={`w-full outline-none`}
                                placeholder="Birthday"
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"Birthday"} inputType={"date"} /> */}
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <PiGenderMaleBold color="black"/>
                            </div>
                            <select id="gender" name="gender" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!teacherInput.about && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="about"
                                className={`w-full outline-none`}
                                placeholder="Describe teacher"
                                onChange={(e) => handleOnChange(e)}
                            />
                            {/* <Input inputName={"Address"} inputType={"text"} /> */}
                            <FaExclamationCircle size={20}
                            className={`${!teacherInput.about ? "block text-red-500" : "hidden"}`} />
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[55%] h-9 border-0 border-gray-600 px-2 rounded">
                            <div>
                                <IoIosCloudUpload color="black"/>
                            </div>
                            <label htmlFor="photo" className="text-sm w-50">Upload photo</label>
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
                        <div className="w-full h-9 bg-purple-400 text-white flex items-center justify-between px-2 rounded">
                            <ul className="flex gap-x-2">
                                <li>{photo.name}</li>
                                <li>{(photo.size/1024).toFixed(2)}KB </li>
                            </ul> 
                            <div onClick={() => setPhoto(null)}>
                                <IoClose size={20} />
                            </div>
                        </div>}
                        <div className="flex items-center justify-center text-slate-50 text-sm w-full h-10 mt-4 bg-purple-700 rounded">
                            <button type="submit" className="w-full" >
                                Create {table}
                            </button>
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}