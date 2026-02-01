
import { Routes, Route } from "react-router"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import ProtectedRoutes from "./Routes/ProtectedRoutes"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import Events from "./pages/Events"
import AuthLayout from "./Layout/AuthLayout"
import MainLayout from "./Layout/MainLayout"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { checkAuthState, logoutUser } from './Store/Features/auth/AuthSlice';
import { app } from './Store/Firebase/Config';

function App() {
  const dispatch = useDispatch();
  const auth = getAuth(app);

  useEffect(() => {
    // Listen to auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        dispatch(checkAuthState(user.email));
      } else {
        // User is logged out
        dispatch(logoutUser());
      }
    });

    return () => unsubscribe(); // Cleanup
  }, [dispatch]);
  return (
    <div className="text-center  w-full h-screen">
      {/* <Navbar /> */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Protected Routes  */}
          <Route element={<ProtectedRoutes />} >
            <Route path="/events" element={<Events />} />
          </Route>
        </Route>

        {/* Authentication Layout  */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

      </Routes>
      {/* <Footer /> */}
    </div>
  )
}




export default App
