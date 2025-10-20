import { createContext, useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { getDocs, collection, addDoc } from "firebase/firestore";
import { toastContext } from "./ToastProvider";

export const auth = getAuth(app);

export const authContext = createContext(null)

export const AuthProvider = ({ children }) => {

    const { toast, addToast, removeToast } = useContext(toastContext)
    const getUserStatus = () => {
        const user = window.localStorage.getItem("userStatus")
        if (user) {
            return user
        } else {
           return false 
        }
    }

    const getDbUserDetails = () => {
        const data = window.localStorage.getItem("dbUsers")
        if (data) {
            const users = JSON.parse(data)
            return users
        } else {
           return "users not found"
        }
    }

    const getUserInfo = () => {
        const data = window.localStorage.getItem("userInfo")
        if (data) {
            const user = JSON.parse(data)
            return user
        } else {
           return "user not found"
        }
    }
    const deleteUserInfo = () => {
            window.localStorage.removeItem("userInfo")
        }
    const deletedbUsers = () => {
            window.localStorage.removeItem("dbUsers")
        }

    // deleteUserInfo()

    const navigate = useNavigate()
    const [view, setView] = useState(false)
    const [selectedRole, setSelectedRole ] = useState("")
    const [retrievedUsers, setRetrievedUsers] = useState(getDbUserDetails())
    const [userDetails, setUserDetails] = useState(getUserInfo())
    
    console.log(retrievedUsers)

    const [isLoggedIn, setIsLoggedIn] = useState(getUserStatus())
    const [isLoading, setIsLoading] = useState(false)
    const [login, setLogin] = useState({
        email: true, password: true
        })
    const [signup, setSignup] = useState({
        firstName: true, lastName: true, email: true, password: true, role: true
        })

    const setUserStatus = () => {
        window.localStorage.setItem("userStatus", isLoggedIn)
    }

    const setDbUserDetails = () => {
        window.localStorage.setItem("dbUsers", JSON.stringify(retrievedUsers))
        // console.log(data)
    }

    const setUserInfo = () => {
        window.localStorage.setItem("userInfo", JSON.stringify(userDetails))
        // console.log(data)
    }

    useEffect(() => {
        setUserStatus()
        setDbUserDetails()
        setUserInfo()
    }, [isLoggedIn])

    const setDetails = (email) => {
        retrievedUsers.map((user) => {
            if (user.email === email) {
                setUserDetails({id: user.id, fName: user.firstName, lName: user.lastName, email:user.email, role: user.selectedRole})
                return
            } else {
                return
            }
        }
        )
    }

    console.log(userDetails)

    const usersCollectionRef = collection(db, "users")
    
    const createNewUser = async(e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const firstName = formData.get("first name")
        const lastName = formData.get("last name")
        const email = formData.get("email")
        const password = formData.get("password")

        if (!firstName) {
            setSignup({
                ...signup, firstName: false
            })
            return
        }
        if (!lastName) {
            setSignup({
                ...signup, lastName: false
            })
            return
        }
        if (!email) {
            setSignup({
                ...signup, email: false
            })
            return
        }
        if (!password) {
            setSignup({
                ...signup, password: false
            })
            return
        }
        if (!selectedRole) {
            setSignup({
                ...signup, role: false
            })
            return
        }
        
        try {
            setIsLoading(true)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            await addDoc(usersCollectionRef, {email, firstName, lastName, selectedRole})
            const data = await getDocs(usersCollectionRef)
            const usersData = data.docs.map((doc) =>
                ({...doc.data(), id: doc.id})
            )
            setRetrievedUsers(usersData)
            // setIsLoggedIn(true)
            navigate("/login")
            const user = userCredential
            // console.log(user, user.user.email, user.user.uid)
        } catch (error) {
            if (error.message === "Firebase: Error (auth/network-request-failed).") {
                addToast(toast, "network")
                removeToast()
                return
            } 
            if (error.message === "Firebase: Error (auth/email-already-in-use).") {
                addToast(toast, "emailUsed")
                removeToast()
                return
            } 
            if (error.message === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
                addToast(toast, "passwordLength")
                removeToast()
                return
            }
            console.log(error.message)
        } finally {
            setIsLoading(false)
            return
        }

    }
    // useEffect(() => {
    //     console.log(input)
    // }, [input])

    const signUserIn = async(e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const email = formData.get("email")
        const password = formData.get("password")

        if (!email) {
            setLogin({
                ...login, email: false
            })
            return
        }
        if (!password) {
            setLogin({
                ...login, password: false
            })
            return
        }

        try {
            setIsLoading(true)
            
            setDetails(email)
            // console.log(usersData)
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            
            setIsLoggedIn(true)
            navigate("/")
            const user = userCredential
            // console.log(user, user.user.email, user.user.uid)
            
        } catch (error) {
            if (error.message === "Firebase: Error (auth/network-request-failed).") {
                addToast(toast, "network")
                removeToast()
                return
            } 
            if (error.message === "Firebase: Error (auth/invalid-credential).") {
                addToast(toast, "credentials")
                removeToast()
                return
            }

            console.log(error.message)
        } finally {
            setIsLoading(false)
            return
        }
    }

    const signUserOut = () => {
        signOut(auth).then(() => {
            setIsLoggedIn(false)
            
            console.log("Sign-out successful.")
            }).catch((error) => {
            // An error happened.
        });
    }

    const observeUserStatus = () => {
        onAuthStateChanged (auth, (user) => {
            if (user) {
                setIsLoggedIn(true)
                console.log(user.email + "is signed in.")
            } else {
                console.log("no user is signed in.")
            }
        })
    }

    // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    // const usersCollectionRef = collection(db, "users")
    // const [ userList, setUserList] = useState([])
    // const storeUser = async() => {
    //     try {
    //         await addDoc(usersCollectionRef, {email, firstName, lastName, role})
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // const getUsersList = async() => {
    //     try {
    //         const data = await getDocs(usersCollectionRef)
    //         const newData = data.docs.map((doc) =>
    //         ({...doc.data(), id: doc.id})
    //         )
    //         console.log(newData)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // useEffect(() => {
    //     getUsersList()
    // }, [])
    

    useEffect(() => {
        observeUserStatus()
    }, [])

    // console.log(isLoggedIn, userStatusRef.current)

    const authValues = {
        auth,
        createNewUser, 
        signUserIn, 
        signUserOut, 
        isLoading,
        login,
        signup, 
        setLogin, 
        setSignup, 
        isLoggedIn,
        setIsLoggedIn,
        observeUserStatus,
        view,
        setView,
        selectedRole,
        setSelectedRole,
        retrievedUsers,
        setRetrievedUsers,
        userDetails
    }

    return <authContext.Provider value={authValues}>
        {children}
    </authContext.Provider>
}