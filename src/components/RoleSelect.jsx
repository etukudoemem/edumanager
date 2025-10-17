import { useContext } from "react"
import { FaChevronDown, FaChevronRight } from "react-icons/fa"
import { authContext } from "../contexts/AuthProvider"

export const RoleSelect = () => {
    const { selectedRole, setSelectedRole, view, setView, signup, setSignup } = useContext(authContext)

    const roles = ["Admin", "Teacher", "Student", "Parent"]
    const handleRole = (e) => {
        if (!signup.role) {
            setSignup({...signup, role:true})
            return
        }
        setSelectedRole(e.target.value)
        console.log(selectedRole)
        }
    return(
         <>
            <section>
                <div className={`flex items-center gap-x-2 w-full px-2 h-10 border-0 border-purple-600 
                        rounded relative bg-purple-500 text-white justify-center`}>
                    <label htmlFor="subjects" className=" font-semibold" 
                        onClick={() => setView(!view)}>Select role</label>
                    <div>
                        {view ? <FaChevronDown size={12}/> : <FaChevronRight size={12}/>}
                    </div>
                    <select id="subjects" name="roles" multiple onChange={handleRole}
                        className={`flex flex-col text-sm w-full outline-none rounded
                            ${view ? "block" : "hidden"} h-39 py-2 bg-purple-500 z-10 absolute top-12 left-0`}>
                        {/* {
                            roles.map((role) =>  */}
                                <option className="text-center py-2" value="Admin">
                                    Admin
                                </option>
                                <option className="text-center py-2" value="Teacher">
                                    Teacher
                                </option>
                                <option className="text-center py-2" value="Student">
                                    Student
                                </option>
                                <option className="text-center py-2" value="Parent">
                                    Parent
                                </option>
                            {/* )
                        } */}
                        
                    </select>
                </div>
            </section>
         </>
    )
}