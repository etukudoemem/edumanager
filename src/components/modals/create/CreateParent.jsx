import { FaBirthdayCake, FaMinus, FaPhone, FaPlus, FaUser } from "react-icons/fa"

import { IoClose } from "react-icons/io5"
import { FaAddressCard } from "react-icons/fa6"
import { MdBloodtype } from "react-icons/md"
import { IoIosCloudUpload, IoIosMail } from "react-icons/io"
import { PiGenderMaleBold } from "react-icons/pi"
import { useContext, useState } from "react"
import { RiDeleteBin5Line } from "react-icons/ri"
import { creationContext } from "../../../contexts/CreationProvider"
import { toastContext } from "../../../contexts/ToastProvider"
// import { creationContext } from "../../contexts/CreationProvider"
// import { useState } from "react"

let nextId = 0
let number = 1
let newNum = 2

export const CreateParent = ({ table, type, setShow, photo, setPhoto, handlePhoto }) => {
    const { parent, setParent } = useContext(creationContext)
    const { toast, addToast, removeToast } = useContext(toastContext)
    const [parentInput, setParentInput] = useState({
        firstName: true,
        lastName: true,
        childName: true,
        phone: true,
        email: true,
        address: true,
        gender: true,
    })

    const [inputField, setInputField] = useState([
        {
            id: nextId++, num: number, value: ""
        }
    ])
    
    const createParent = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const childName = formData.get("childName")
        const phone = formData.get("phone")
        const email = formData.get("email")
        const address = formData.get("address")
        const gender = formData.get("gender")
        
        
        // const { name } = e.target
        // let n = formData.get([name])
        // console.log(n)
        if (!firstName) {
            setParentInput({...parentInput, firstName: false})
            return
        }
        if (!lastName) {
            setParentInput({...parentInput, lastName: false})
            return
        }
        if (!childName) {
            setParentInput({...parentInput, childName: false})
            return
        }
        if (!phone) {
            setParentInput({...parentInput, phone: false})
            return
        }
        if (!email) {
            setParentInput({...parentInput, email: false})
            return
        }
        if (!address) {
            setParentInput({...parentInput, address: false})
            return
        }

        setParent(
            [...parent, {id: nextId++, firstName, lastName, children: (inputField.map((input) => input.value)), phone, email, address, gender}]
        )
        console.log(parent)
    }

    const handleOnChange = (e) => {
        const { name } = e.target
        setParentInput({...parentInput, [name]: true})
    }
    const handleInputField = (e, inputId) => {
        if (e.target.value) {
            setParentInput({...parentInput, childName: true})
        }
        setInputField(inputField.map((input) => 
            input.id === inputId ? {...input, value: e.target.value} : input
        ))
        console.log(inputField)
    }

    const handleAddChild = () => {
        setInputField( 
            [...inputField, {
                id: nextId++, num: newNum++, value: ""
            }]
        )
    }

    const handleRemoveChild = (inputId) => {
        setInputField(
            inputField.filter((input) => input.id !== inputId )
        )
    }
    return (
        <>
            <form onSubmit={(e) => createParent(e)}
                className="bg-white w-[90%] md:w-[65%] lg:w-[55%] xl:w-[45%] h-[83vh] md:h-[82vh] flex flex-col gap-y-3 items-center 
                py-8 px-4 md:px-6 rounded-lg shadow-xl relative overflow-y-scroll">
                <div className="w-full ">
                    <div onClick={() => setShow(false)}
                        className="absolute top-2 right-2 text-center">
                        <IoClose size={25}/>
                    </div>
                    <h2 className="my-4 font-medium">
                        Create new {table}
                    </h2>
                    <section className="flex justify-between flex-col md:flex-row flex-wrap gap-y-4 gap-x-1 md:gap-y-8 text-sm">
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!parentInput.firstName && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                className="w-full outline-none"
                                type="text" 
                                name="firstName" 
                                placeholder="First name"
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded ${!parentInput.lastName && "border-red-500 border-2"}`}>
                            <div>
                                <FaUser color="black"/>
                            </div>
                            <input 
                                className="w-full outline-none"
                                type="text" 
                                name="lastName"
                                placeholder="Last name" 
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="w-full">
                            <h5 className="mt-2 mb-1">
                                Child:
                            </h5>
                            {
                                inputField.map((field) => 
                                    <section key={field.id} className="w-full mt-3">
                                        <div className={`flex items-center gap-x-0 w-full h-9 border-0 bg-purple-50 border-gray-600 
                                             rounded ${!parentInput.childName && "border-red-500 border-2"}`}>
                                            <div className="px-2">
                                                <FaUser color="black"/>
                                            </div>
                                            <input 
                                                type="text" 
                                                name="childName"
                                                className="outline-none w-full"
                                                placeholder="First and Last name"
                                                onChange={(e) => handleInputField(e, field.id)}
                                            />
                                            <div className={`w-[15%] h-[inherit] bg-purple-200 flex justify-center items-center ${field.num === 1 && "hidden"}`}>
                                                <button onClick={() => handleRemoveChild(field.id)}
                                                    type="button" className="w-full flex justify-center items-center">
                                                    <RiDeleteBin5Line />
                                                </button>
                                            </div>
                                        </div>
                                    </section>
                                )
                            }
                            <div onClick={handleAddChild}
                                className="flex items-center gap-x-2 w-[max-content] h-auto px-2 py-2 bg-purple-200 mt-4 rounded" >
                                <FaPlus />
                                <button type="button" className="w-full">
                                    Add another child
                                </button>
                            </div>
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!parentInput.phone && "border-red-500 border-2"}`}>
                            <div>
                                <FaPhone color="black"/>
                            </div>
                            <input 
                                className="w-full outline-none"
                                type="number" 
                                name="phone"
                                placeholder="Phone" 
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!parentInput.email && "border-red-500 border-2"}`}>
                            <div>
                                <IoIosMail color="black"/>
                            </div>
                            <input 
                                className="w-full outline-none"
                                type="email" 
                                name="email"
                                placeholder="Email" 
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className={`flex items-center gap-x-2 w-full md:w-[100%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded ${!parentInput.address && "border-red-500 border-2"}`}>
                            <div>
                                <FaAddressCard color="black"/>
                            </div>
                            <input 
                                className="w-full outline-none"
                                type="text" 
                                name="address"
                                placeholder="Address" 
                                onChange={handleOnChange}
                            />
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[48%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <PiGenderMaleBold color="black"/>
                            </div>
                            <select id="gender" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="">Male</option>
                                <option value="">Female</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-x-2 w-34 md:w-[55%] h-9 border-0 border-gray-600 px-2 rounded">
                            <div>
                                <IoIosCloudUpload color="black"/>
                            </div>
                            <label htmlFor="Photo" className="text-sm">Upload photo</label>
                            <input 
                                className="outline-none hidden"
                                type="file" 
                                id="Photo"
                                name="lastName" 
                                onChange={handlePhoto}
                            />
                            
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
                            <button type="submit" className="w-full"> 
                                Create {table}
                            </button>
                        </div>
                    </section>
                </div>
            </form>
        </>
    )
}