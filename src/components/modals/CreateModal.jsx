import { useState } from "react"
import { CreateTeacher } from "./CreateTeacher"
import { CreateStudent } from "./CreateStudent"
import { CreateParent } from "./CreateParent"
import { CreateAnnouncement } from "./CreateAnnouncement"
import { CreateEvent } from "./CreateEvent"
import { CreateClass } from "./CreateClass"
import { CreateSubject } from "./CreateSubject"

export const CreateModal = ({ table, type, setShow }) => {
    const [photo, setPhoto] = useState(null)
    

    const handlePhoto = (e) => {
        if (e.target.files) {
            setPhoto(e.target.files[0])
        }   
    }

    const properties = {table, type, setShow, photo, setPhoto, handlePhoto}

    return (
        <>
            <section className="w-full flex justify-center items-center">
                {
                    table === "teacher" ? <CreateTeacher {...properties} /> : 
                    table === "student" ? <CreateStudent {...properties} /> :
                    table === "parent" ? <CreateParent {...properties} /> :
                    table === "subject" ? <CreateSubject {...properties} /> : 
                    table === "class" ? <CreateClass {...properties} /> :
                    table === "event" ? <CreateEvent {...properties}  /> :
                    table === "announcement" ? <CreateAnnouncement {...properties} /> : null
                }
            </section>
        </>
    )
}