
import { Routes, Route } from "react-router"
import Register from "./pages/Register"
import Login from "./pages/Login"



const App = () => {

  return (
    <div className="text-center  w-full h-screen">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}




export default App
