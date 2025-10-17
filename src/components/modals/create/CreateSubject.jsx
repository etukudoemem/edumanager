import { FaChevronRight, FaChevronDown, FaBookOpen, FaPhone, FaUser } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { useContext, useState } from "react"
import { creationContext } from "../../../contexts/CreationProvider"
import { GiTeacher } from "react-icons/gi"
import { toastContext } from "../../../contexts/ToastProvider"
// import { useState } from "react"

let nextId = 1
export const CreateSubject = ({ table, type, setShow, subjectInfo }) => {
    const [view, setView] = useState(false)
    const teachers = ["George Sidwell", "Jane Foster", "Ann Mitchel", "Gabby Jean", "Dan Maxwell"]
    const [teachersList, setTeachersList] = useState([])
    // const [selected, setSelected] = useState(false)
    const { subject, setSubject } = useContext(creationContext)
    const { toast, addToast, removeToast } = useContext(toastContext)
    const [subjectInput, setSubjectInput] = useState({
            teachers: true,
            subject: true
        })
    const subjectTeachers = teachersList.map((teachers) => teachers.names)
    const createSubject = (e, subjectId) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const sub = formData.get("subject")
        if (!sub) {
            setSubjectInput({...subjectInput, subject: false})
            return
        }

        if (teachersList.length < 1) {
            setSubjectInput({...subjectInput, teachers: false})
            return
        }
        
        if (type === "create") {
                setSubject(
                [...subject, {id: nextId++, sub, teachers: [...teachersList]}]
            )
            addToast(toast, "create")
        }

        if (type === "edit") {
            setSubject(
                subject.map((s) => 
                    s.id === subjectId ? {id: s.id, sub, teachers: [...teachersList]} : s
                )
            )
            addToast(toast, "edit")
        }
        removeToast()
    }
    

    const handleOnChange = (e) => {
        const { name } = e.target
        setSubjectInput({...subjectInput, [name]: true})
    }

    const handleTeacher = (e) => {
        if (!subjectInput.teachers) {
            setSubjectInput({...subjectInput, teachers: true})
        }
        
        if (e.target.checked) {
            setTeachersList([...teachersList, e.target.value])
        } else {
            setTeachersList(teachersList.filter((teacher) => teacher !== e.target.value))
        }
        // if (e.target.checked) {
            
        // }
        
        console.log(teachersList)
    }

    return (
        <>
            <form onSubmit={(e) => { if (type === "create") {
                        createSubject(e)
                    } else {
                        createSubject(e, subjectInfo.id)
                    } }}
                className="bg-white w-[90%] md:w-[65%] lg:w-[55%] xl:w-[45%] h-auto flex flex-col gap-y-3 items-center 
                py-8 px-4 md:px-6 rounded-lg shadow-xl relative">
                <div className="w-full ">
                    <div onClick={() => setShow(false)}
                        className="absolute top-2 right-2 text-center">
                        <IoClose size={25}/>
                    </div>
                    <h2 className="my-4 font-medium">
                        {type === "create" ? "Create new" : "Edit"} {table}
                    </h2>
                    <section className="flex justify-between flex-col md:flex-row flex-wrap gap-y-4 gap-x-1 md:gap-y-8 text-sm">
                        <div className={`flex items-center gap-x-2 w-full h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!subjectInput.subject && "border-red-500 border-2"}`}>
                            <div>
                                <FaBookOpen color="black"/>
                            </div>
                            <input 
                                type="text" 
                                name="subject"
                                className={`w-full outline-none`}
                                placeholder="Subject"
                                defaultValue={type === "edit" ? subjectInfo.sub : ""}
                                onChange={(e) => handleOnChange(e)}
                            />
                        </div>
                        <div className={`flex items-center gap-x-2 w-full h-9 border-0 border-gray-600 
                            px-2 rounded relative ${!subjectInput.teachers && "border-red-500 border-2"}`}>
                            <div>
                                <GiTeacher color="black"/>
                            </div>
                            <label htmlFor="subjects" className="text-sm" onClick={() => setView({...view, subjects: !view.subjects})}>Teacher(s)</label>
                                <div>
                                    {view.subjects ? <FaChevronDown size={12}/> : <FaChevronRight size={12}/>}
                                </div>
                            <div id="subjects" name="subjects" multiple 
                                className={`flex flex-col justify-between text-sm w-[50%] md:w-[60%] outline-none
                                    ${view.subjects ? "block" : "hidden"} h-40 py-2 px-2 bg-purple-100 z-10 absolute top-10 left-0`}>
                                {
                                    teachers.map((teacher) => 
                                        <div key={teacher} className="flex gap-x-1">
                                            <input 
                                                className="px-2 py-1" 
                                                type="checkbox" 
                                                onChange={(e) => handleTeacher(e)}
                                                defaultChecked={type === "edit" && subjectInfo.teachers.includes(teacher)} 
                                                id="teacher" 
                                                name="teacher"
                                                value={teacher}
                                            />
                                            <label htmlFor="teacher">{teacher}</label>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        {type === "create" ? <div className="flex flex-wrap gap-2 w-full h-auto -mt-[12px] md:-mt-[20px]">
                            {teachersList.map((teacher) =>
                                <div key={teacher} className="flex items-center gap-x-2 h-auto w-auto px-2 py-1 bg-purple-700 rounded text-slate-50 text-xs font-light">
                                    {teacher}
                                </div>
                            )}
                        </div> :
                        <div className="flex flex-wrap gap-2 w-full h-auto -mt-[12px] md:-mt-[20px]">
                            {subjectInfo.teachers.map((teacher) =>
                                <div key={teacher} className="flex items-center gap-x-2 h-auto w-auto px-2 py-1 bg-purple-700 rounded text-slate-50 text-xs font-light">
                                    {teacher}
                                </div>
                            )}
                        </div>}
                        <div className="flex items-center justify-center text-slate-50 text-sm w-full h-10 mt-4 bg-purple-700 rounded">
                            <button type="submit" className="w-full">
                                {type === "create" ? "Create" : "Update"} {table}
                            </button>
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}