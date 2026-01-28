
import { Routes, Route } from "react-router"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import ProtectedRoutes from "./Routes/ProtectedRoutes"
import Navbar from "./Navbar/Navbar"

const App = () => {

  return (
    <div className="text-center  w-full h-screen">
      <Navbar />
      <Routes>

        <Route element={<ProtectedRoutes />} >
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}




export default App
