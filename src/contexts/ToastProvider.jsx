import { createContext, useState } from "react"

export const toastContext = createContext(null)

export const ToastProvider = ({ children }) => {
    const [showToast, setShowToast] = useState(false)
    const [toast, setToast] = useState({
        create: false,
        delete: false,
        edit: false
    })

    const addToast = (toast, action) => {
        toast[action] = true
            setTimeout(() => {
                setToast({...toast, action})
            }, [2000])
    }

    const removeToast = () => {
        // toast[action] = false
        setTimeout(() => {
            setToast({create: false, edit: false, delete: false})
        }, [5000])
    }


    const toastValues = {showToast, setShowToast, addToast, removeToast, toast, setToast}

    return(
        <toastContext.Provider value={toastValues}>
            {children}
        </toastContext.Provider>
    )
}