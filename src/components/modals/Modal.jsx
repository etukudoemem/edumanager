import { FaEdit } from "react-icons/fa"
import { RiDeleteBin5Line } from "react-icons/ri"
import { VscSettings } from "react-icons/vsc"
import { MdSort } from "react-icons/md"
import { IoMdAdd } from "react-icons/io"
import { useState } from "react"
import { DeleteModal } from "./DeleteModal"
import { CreateModal } from "./create/CreateModal"
import { EditModal } from "./edit/EditModal"
import { IoClose, IoLogOut } from "react-icons/io5"
import { useContext } from "react"
import { creationContext } from "../../contexts/CreationProvider"
import { authContext } from "../../contexts/AuthProvider"
import { toastContext } from "../../contexts/ToastProvider"

export const Modal = (
    { table, type, teacherId, studentId, subjectId, 
        parentId, eventId, classId, announcementId, 
        eventInfo, classInfo, announcementInfo, subjectInfo,
        studentInfo, teacherInfo,
    }) => {

    const { teacher, setTeacher, student, setStudent, 
            subject, setSubject, parent, setParent, 
            classes, setClasses, event, setEvent, 
            announcement, setAnnouncement} = useContext(creationContext)

    const { signUserOut } = useContext(authContext)
    const { addToast, removeToast, toast, setToast, setShowToast } = useContext(toastContext)

    const [show, setShow] = useState(false)
    // const size = type === "filter" | "sort" | "create" ? "w-7 h-7" : "w-9 h-9"
    // const bgColor = type === "filter" | "sort" | "create" ? "bg-purple-800" : "bg-purple-100"
    // const color = type === "filter" | "sort" | "create" ? "text-white" : "text-purple-800"
    const deleteItem = () => {
        if (table === "teacher") {
            setTeacher(teacher.filter((t) => t.id !== teacherId))
            addToast()
            removeToast()
            return
        }
        if (table === "student") {
            setStudent(student.filter((s) => s.id !== studentId))
            addToast()
            removeToast()
            return
        }
        if (table === "parent") {
            setParent(parent.filter((p) => p.id !== parentId))
            addToast()
            removeToast()
            return
        }
        if (table === "subject") {
            setSubject(subject.filter((s) => s.id !== subjectId))
            addToast()
            removeToast()
            return
        }
        if (table === "class") {
            setClasses(classes.filter((s) => s.id !== classId))
            addToast()
            removeToast()
            return
        }
        if (table === "event") {
            setEvent(event.filter((s) => s.id !== eventId))
            addToast()
            removeToast()
            return
        }
        if (table === "announcement") {
            setAnnouncement(announcement.filter((s) => s.id !== announcementId))
            // setToast({...toast, delete: true})
            addToast(toast, "delete")
            removeToast()
            return
        }
    }

    const popUp = () => {
        return (
            type === "edit" ? (
                <section className="w-screen h-screen bg-black/40 fixed top-0 right-0 flex justify-center items-center
                    text-gray-700">
                    {
                        <CreateModal 
                            table={table} 
                            type={type} 
                            setShow={setShow} 
                            eventInfo={eventInfo} 
                            classInfo={classInfo}
                            announcementInfo={announcementInfo}
                            subjectInfo={subjectInfo}
                            studentInfo={studentInfo}
                            teacherInfo={teacherInfo}
                        />
                    }
                </section>
            ) : type === "delete" ? (
                <section className="w-screen h-screen bg-black/40 fixed top-0 right-0 flex justify-center items-center
                    text-gray-700 z-100">
                    {
                        <DeleteModal table={table} type={type} setShow={setShow} deleteItem={deleteItem} />
                    }
                </section>
            ) : type === "create" ? (
                <section className="w-screen h-screen bg-black/40 fixed top-0 right-0 flex justify-center items-center
                    text-gray-700">
                    {
                        <CreateModal 
                            table={table} 
                            type={type} 
                            setShow={setShow}
                            eventInfo={eventInfo} 
                            classInfo={classInfo}
                            announcementInfo={announcementInfo} 
                            subjectInfo={subjectInfo}
                            studentInfo={studentInfo}
                            teacherInfo={teacherInfo}
                        />
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
            ) : (
                <section className="w-screen h-screen bg-black/40 fixed top-0 right-0 flex justify-center items-center
                    text-gray-700 z-100">
                    {
                        <DeleteModal type={type} setShow={setShow} signUserOut={signUserOut} />
                    }
                </section>)
        )
    }

            

    const selectIcon = () => {
        return (
            type === "filter" ? <VscSettings size={19}/> 
            : type === "sort" ? <MdSort size={19}/>
            : type === "create" ? <IoMdAdd size={19}/>
            : type === "edit" ? <FaEdit size={17}/>
            : type === "delete" ? <RiDeleteBin5Line size={17} />
            : type === "logout" && <IoLogOut />
        )   
    }

    const Icon = selectIcon()

    return (
        <>
            {
                show && popUp()
            }
            <button onClick={() => setShow(true)}
                className={` text-purple-700 rounded-full flex justify-center items-center cursor-pointer 
                    ${type === "logout" ? "text-red-600" : "bg-[#f0f0ff] w-9 h-9 shadow-sm"}`}>
                {Icon}
            </button>
        </>
    )
}