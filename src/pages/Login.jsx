import { app } from "../Store/Firebase/Config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
const auth = getAuth(app);



const Login = () => {
  const navigate = useNavigate()
  const location = useLocation();

  const { email: navEmail, password: navPassword } = location.state || []
  const [email, setEmail] = useState(navEmail || "")
  const [password, setPassword] = useState(navPassword || "");

  //================ Login User ==================
  const loginUser = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ===========after login navigate to home page ====================
        console.log(user)
        navigate('/')
        resetFields()
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  // ============== Resetting Input Fields ==========
  function resetFields() {
    setEmail("")
    setPassword("");
  }

  return (
    <div className='login-page w-full h-full bg-gray-600 '>
      <div className="login-form w-full h-full flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat ">
        <form action="" className='opacity-85 bg-gray-100 flex flex-col items-center gap-4 border border-gray-800 rounded w-1/4  p-4 max-w-md  ' onSubmit={(e) => loginUser(e)}>
          <input type="email" placeholder='Enter email' required className='border-b outline-none p-2 w-full' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Enter password' required className='border-b outline-none p-2 w-full' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="p-2 bg-black text-amber-100 rounded w-full
  transition-transform duration-200 ease-out
  hover:cursor-pointer hover:bg-gray-900 hover:scale-[1.02]">
            Login
          </button>
          <Link to={"/register"}>Don't have account ?</Link>
        </form>
      </div>
    </div>
  )
}

export default Login
