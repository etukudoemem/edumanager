import { IoClose, IoTime } from "react-icons/io5"
import { MdDateRange, MdDescription } from "react-icons/md"
import { SiGoogleclassroom } from "react-icons/si"
import { BsCalendarFill } from "react-icons/bs"
import { useContext, useEffect } from "react"
import { creationContext } from "../../contexts/CreationProvider"

let nextId = 0

export const CreateEvent = ({ table, type, setShow }) => {
    
    const {event, setEvent} = useContext(creationContext)
    
    const createEvent = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const title = formData.get("title")
        const classe = formData.get("classe")
        const starts = formData.get("starts")
        const ends = formData.get("ends")
        const date = formData.get("date")
        const description = formData.get("description")
        setEvent(
            [...event, {id: nextId++, title, description, classe, date, starts, ends}]
        )
    }
    

    // useEffect(() => {
    //     console.log(event)
    // }, [event])

    return (
        <>
            <form onSubmit={(e) => createEvent(e)} 
                className="bg-white w-[90%] md:w-[65%] lg:w-[55%] xl:w-[45%] h-auto flex flex-col gap-y-3 items-center 
                py-8 px-4 md:px-6 rounded-lg shadow-xl relative overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ">
                <div className="w-full ">
                    <div onClick={() => setShow(false)}
                        className="absolute top-2 right-2 text-center">
                        <IoClose size={25}/>
                    </div>
                    <h2 className="my-4 font-medium">
                        Create new {table}
                    </h2>
                    <section className="flex justify-between flex-col md:flex-row flex-wrap gap-y-4 gap-x-1 md:gap-y-8">
                        <div className="flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded">
                            <div>
                                <BsCalendarFill color="black"/>
                            </div>
                            <input type="text" name="title" className="w-full outline-none" />
                            {/* <Input inputName={"title"} inputType={"text"} handleInput={handleInput} table={table}/> */}
                        </div>
                        
                        <div className="flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <SiGoogleclassroom color="black"/>
                            </div>
                            <label htmlFor="classe" className="text-sm">Class</label>
                            <select id="classe" name="classe" className="flex items-center justify-between text-sm w-[25%] md:w-[40%] outline-none">
                                <option value="1A">1A</option>
                                <option value="2B">2B</option>
                                <option value="3C">3C</option>
                                <option value="4B">4B</option>
                                <option value="5A">5A</option>
                            </select>
                        </div>
                        
                        <div className="flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <IoTime color="black"/>
                            </div>
                            <label htmlFor="starts" className="text-sm opacity-50">Starts</label>
                            <input type="time" name="starts" className="w-full outline-none" /> 
                            {/* <Input inputName={"starts"} inputType={"time"} handleInput={handleInput} table={table}/> */}
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <IoTime color="black"/>
                            </div>
                            <label htmlFor="ends" className="text-sm opacity-50">Ends</label>
                            <input type="time" name="ends" className="w-full outline-none" /> 
                            {/* <Input inputName={"ends"} inputType={"time"} handleInput={handleInput} table={table}/> */}
                        </div>
                        <div className="flex items-center gap-x-2 w-full md:w-[49%] h-9 border-0 bg-purple-50 border-gray-600 
                            px-2 rounded">
                            <div>
                                <MdDateRange color="black"/>
                            </div>
                            <input type="date" name="date" className="w-full outline-none" />
                            {/* <Input inputName={"date"} inputType={"date"} handleInput={handleInput} table={table}/> */}
                        </div>
                        <div className="flex items-center gap-x-2 w-full h-9 border-0 bg-purple-50 bg-purple-50 
                            border-gray-600 px-2 rounded">
                            <div>
                                <MdDescription color="black"/>
                            </div>
                            <input type="text" name="description" className="w-full outline-none" />
                            {/* <Input inputName={"description"} inputType={"text"} handleInput={handleInput} table={table}/> */}
                        </div>
                    </section>
                    <section className="mt-6">
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