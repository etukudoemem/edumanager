export const Input = ({ inputName, inputType, handlePhoto, handleInput, table }) => {
    return (
        <>
            <div className="w-full">
                <input className={`w-full outline-none text-sm bg-transparent ${inputType === "file" ? "hidden" : inputType === "date" && "opacity-100"} `}
                    type={inputType} 
                    id={inputName}
                    placeholder={inputName}
                    accept={inputType === "file" ? "/image*/" : null}
                    onChange={(e) => 
                        {
                            if (inputType === "file") {
                                handlePhoto(e)
                            } else {
                                handleInput(e)
                            }
                        }
                    }
                />
            </div>
        </>
    )
}