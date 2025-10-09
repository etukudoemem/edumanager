import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TeacherInfoCard } from "../components/teachers/TeacherInfoCard"
import { TeacherShortcuts } from "../components/teachers/TeacherShortcuts"
import { AnnouncementsList } from "../components/announcement/AnnouncementsList"
import { TeacherSchedule } from "../components/teachers/TeacherSchedule"
import { usePaginate } from "../hooks/usePaginate"
import { creationContext } from "../contexts/CreationProvider"


export const TeacherDetails = () => {
    const [teacherDetails, setTeacherDetails] = useState([])
    const { teacher } = useContext(creationContext)
    const { items } = usePaginate(teacher)
    let { teacherID } = useParams()
    teacherID = parseInt(teacherID)

    const getTeacherInfo = () => {
        items.map((teacher) => {
            if (teacher.id === teacherID) {
                setTeacherDetails(teacher)
            }
        })
    }

    useEffect(() => {
        getTeacherInfo()
    }, [teacherID])

    // const event = new Date(2025, 8, 17, 8, 30)
    // console.log(event)

    return (
        <>
            <main className="w-full h-auto flex flex-col md:flex-row mt-2 gap-x-4 bg-slate-50">
                {/* LEFT */}
                <section className="w-full md:w-2/3 h-auto flex flex-col gap-y-4">
                    <div className="w-full h-75 xl:h-35 grid grid-cols-4 grid-rows-2 gap-4">
                        <div className="col-span-5 row-span-2 xl:col-span-2 xl:row-span-2 bg-purple-200 flex items-center">
                            <TeacherInfoCard  teacher={teacherDetails}/>
                        </div>
                        <div className="col-start-1 col-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-1 xl:row-end-2 bg-blue-100 py-3 px-4">
                            <h1 className="text-sm font-semibold">90%</h1>
                            <p className="text-[10px] text-gray-600">Attendance</p>
                        </div>
                        <div className="col-start-3 col-end-6 xl:col-start-4 xl:col-end-6 xl:row-start-1 xl:row-end-2 bg-blue-100 py-3 px-4">
                            <h1 className="text-sm font-semibold">2</h1>
                            <p className="text-[10px] text-gray-600">Branches</p>
                        </div>
                        <div className="col-start-1 col-end-3 xl:col-start-3 xl:col-end-4 xl:row-start-2 xl:row-end-3 bg-blue-100 py-3 px-4">
                            <h1 className="text-sm font-semibold">6</h1>
                            <p className="text-[10px] text-gray-600">Lessons</p>
                        </div>
                        <div className="col-start-3 col-end-6 xl:col-start-4 xl:col-end-6 xl:row-start-2 xl:row-end-3 bg-blue-100 py-3 px-4">
                            <h1 className="text-sm font-semibold">6</h1>
                            <p className="text-[10px] text-gray-600">Classes</p>
                        </div>
                    </div>
                    <div className="h-auto pb-2 bg-white px-3">
                        <div className="py-2 font-semibold">
                            <h2>Teacher's Schedule</h2>
                        </div>
                        <TeacherSchedule />
                    </div>
                </section>
                <section className="w-full md:w-1/3 h-auto ">
                    <TeacherShortcuts /> 
                    <AnnouncementsList />
                </section>
            </main>
        </>
    )
}