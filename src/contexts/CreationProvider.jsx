import { createContext, useState } from "react";
import { events } from "../utils/events";
import { teachersInfo } from "../components/teachers/teachersInfo";
import { studentsInfo } from "../utils/studentsInfo";
import { announcements } from "../components/announcement/announcements";
import { parentsInfo } from "../utils/parentsInfo";
import { subjectsInfo } from "../utils/subjectsInfo";
import { classesInfo } from "../utils/classesInfo";


export const creationContext = createContext(null)

export const CreationProvider = ({ children }) => {
    const [event, setEvent] = useState(events)
    const [teacher, setTeacher] = useState(teachersInfo)
    const [student, setStudent] = useState(studentsInfo)
    const [announcement, setAnnouncement] = useState(announcements)
    const [parent, setParent] = useState(parentsInfo)
    const [subject, setSubject] = useState(subjectsInfo)
    const [classes, setClasses] = useState(classesInfo)

    const creationValues = {
        event,
        setEvent,
        teacher,
        setTeacher,
        student,
        setStudent,
        announcement,
        setAnnouncement,
        parent,
        setParent,
        subject,
        setSubject,
        classes,
        setClasses
    }

    return (
        <creationContext.Provider value={creationValues}>
            {children}
        </creationContext.Provider>
    )
}