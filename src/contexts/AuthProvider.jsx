import { createContext, useEffect, useRef } from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase/config";
import { useNavigate } from "react-router-dom";

export const auth = getAuth(app);

export const authContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const getUserStatus = () => {
        const user = window.localStorage.getItem("userStatus")
        if (user) {
            return user
        } else {
           return false 
        }
    }
 
    const navigate = useNavigate()
    const userStatusRef = useRef(null)
    const [isLoggedIn, setIsLoggedIn] = useState(getUserStatus())
    const [isLoading, setIsLoading] = useState(false)
    const [login, setLogin] = useState({
        email: true, password: true
        })
    const [signup, setSignup] = useState({
        firstName: true, lastName: true, email: true, password: true
        })

    const setUserStatus = () => {
        window.localStorage.setItem("userStatus", isLoggedIn)
    }

    useEffect(() => {
        setUserStatus()
        // console.log(isLoggedIn)
    }, [isLoggedIn])

    const toastMessage = {
        signupSuccess: "Sign up successful!",
        loginSuccess: "Login successful!",
        logoutSuccess: "Logout successful!",
    }

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
        
        try {
            setIsLoading(true)
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            setIsLoggedIn(true)
            const user = userCredential
            console.log(user, user.user.email, user.user.uid)
        } catch (error) {
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
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            setIsLoggedIn(true)
            navigate("/")
            const user = userCredential
            console.log(user, user.user.email, user.user.uid)
            
        } catch (error) {
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
        observeUserStatus
    }

    return <authContext.Provider value={authValues}>
        {children}
    </authContext.Provider>
}