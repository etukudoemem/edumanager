import { FaUserCircle } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
import { MdMail } from "react-icons/md"

export const StudentInfoCard = ({ student }) => {
    
    return (
        <>
            <section className="flex flex-shrink gap-x-5 items-center px-4">
                <div>
                    <FaUserCircle size={95} color="white"/>
                </div>
                <div className="flex flex-col gap-y-2 w-[60%]">
                    <h1 className="font-semibold">{student.name}</h1>
                    <p className="text-[10px]">
                        {student.about}
                    </p>
                    <div className="flex flex-col md:flex-row gap-x-4 items-start md:items-center text-[10px]">
                        <div className="flex items-center gap-x-1">
                            <MdMail />
                            <p className="font-semibold">{student.email}</p>
                        </div>
                        <div className="flex items-center gap-x-1">
                            <FaPhone />
                            <p className="font-semibold">{student.phone}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}