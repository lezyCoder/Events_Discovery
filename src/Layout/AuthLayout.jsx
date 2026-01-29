import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="w-full h-screen">
            <Outlet />
        </div>
    )
}

export default AuthLayout