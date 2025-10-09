import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { StudentInfoCard } from "../components/students/StudentInfoCard"
import { studentsInfo } from "../utils/studentsInfo"
import { StudentShortcuts } from "../components/students/StudentShortcuts"
import { AnnouncementsList } from "../components/announcement/AnnouncementsList"
import { StudentSchedule } from "../components/students/StudentSchedule"
import { usePaginate } from "../hooks/usePaginate"
import { creationContext } from "../contexts/CreationProvider"


export const StudentDetails = () => {
    const [studentDetails, setStudentDetails] = useState([])
    const { student } = useContext(creationContext)
    const { items } = usePaginate(student)
    let { studentID } = useParams()
    studentID = parseInt(studentID)

    const getStudentInfo = () => {
        items.map((student) => {
            if (student.id === studentID) {
                setStudentDetails(student)
            }
        })
    }

    useEffect(() => {
        getStudentInfo()
    }, [studentID])

    // const event = new Date(2025, 8, 17, 8, 30)
    // console.log(event)

    return (
        <>
            <main className="w-full h-auto flex flex-col md:flex-row mt-2 gap-x-4 bg-slate-50">
                {/* LEFT */}
                <section className="w-full md:w-2/3 h-auto flex flex-col gap-y-4">
                    <div className="w-full h-75 xl:h-35 grid grid-cols-4 grid-rows-2 gap-4">
                        <div className="col-span-5 row-span-2 xl:col-span-2 xl:row-span-2 bg-purple-200 flex items-center">
                            <StudentInfoCard  student={studentDetails}/>
                        </div>
                        <div className="col-start-1 col-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2 bg-blue-100 py-3 px-4">
                            <h1 className="text-sm font-semibold">90%</h1>
                            <p className="text-[10px] text-gray-600">Attendance</p>
                        </div>
                        <div className="col-start-3 col-end-6 xl:col-start-4 xl:col-end-6 xl:row-start-1 xl:row-end-2 bg-blue-100 py-3 px-4">
                            <h1 className="text-sm font-semibold">2nd</h1>
                            <p className="text-[10px] text-gray-600">Grade</p>
                        </div>
                        <div className="col-start-1 col-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 bg-blue-100 py-3 px-4">
                            <h1 className="text-sm font-semibold">6</h1>
                            <p className="text-[10px] text-gray-600">Lessons</p>
                        </div>
                        <div className="col-start-3 col-end-6 xl:col-start-4 xl:col-end-6 xl:row-start-2 xl:row-end-3 bg-blue-100 py-3 px-4">
                            <h1 className="text-sm font-semibold">2C</h1>
                            <p className="text-[10px] text-gray-600">Class</p>
                        </div>
                    </div>
                    <div className="h-auto pb-2 bg-white px-3">
                        <div className="py-2 font-semibold">
                            <h2>Student's Schedule</h2>
                        </div>
                        <StudentSchedule />
                    </div>
                </section>
                <section className="w-full md:w-1/3 h-auto ">
                    <StudentShortcuts /> 
                    <AnnouncementsList />
                </section>
            </main>
        </>
    )
}