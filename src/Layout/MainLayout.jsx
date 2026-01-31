import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Page content */}
      <main className="flex-1">
        <div className="mx-auto  w-full max-w-7xl px-4 sm:px-6 lg:px-6 bg-[#c8b474]">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
