import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { authContext } from "../contexts/AuthProvider"


export const ProtectedRoute = () => {
    const { isLoggedIn } = useContext(authContext)

    return isLoggedIn ? <Outlet /> : <Navigate to="login" />
}