import { app } from "../Firebase/Config"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useEffect, useState } from "react";
const auth = getAuth(app);



const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();

  //================ Login User ==================
  const loginUser = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ===========after login navigate to home page ====================
        console.log(user)
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
      <div className="login-form w-full h-full flex items-center justify-center">
        <form action="" className=' flex flex-col items-center gap-4 border border-gray-800 rounded w-1/4 h-54 p-3 ' onSubmit={(e) => loginUser(e)}>
          <input type="email" placeholder='Enter email' required className='border-b outline-none p-2 w-full' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Enter password' required className='border-b outline-none p-2 w-full' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='p-2 bg-black text-amber-100 rounded w-full'>Login</button>
          <a href="">Don't have account ?</a>
        </form>
      </div>
    </div>
  )
}

export default Login
