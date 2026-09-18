import { Navigate, Outlet } from "react-router"

export default function ProtectedRoute(){
    const nickname = localStorage.getItem("Nickname")
    if(!nickname){
         return <Navigate to={"/"} />
        
    }
    return <Outlet />




}