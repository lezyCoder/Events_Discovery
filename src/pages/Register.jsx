import { registerWithEmail } from "../Store/Features/auth/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { authStart, authFailure } from "../Store/Features/auth/AuthSlice"


const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.auth);

    const registerUser = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            dispatch(authFailure("Passwords don't match"));
            return;
        }
        dispatch(authStart());
        try {
            await registerWithEmail(email, password);
            navigate("/login", { state: { email, password } });
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        } catch (error) {
            dispatch(authFailure(error.message));
        }
    };



    return (
        <div className='register-page w-full h-full bg-gray-600 '>
            <div className="login-form w-full h-full flex items-center justify-center bg-[url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat ">
                <form action="" className='opacity-85 bg-gray-100 flex flex-col items-center gap-4 border border-gray-800 rounded w-1/4 h-60 p-4 max-w-md  ' onSubmit={(e) => registerUser(e)}>
                    <input type="email" placeholder='Enter email' required className='border-b outline-none p-2 w-full' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Enter password' required className='border-b outline-none p-2 w-full' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder='confirm password' required className='border-b outline-none p-2 w-full' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        className="p-2 bg-black text-amber-100 rounded w-full transition-transform duration-200 ease-out hover:cursor-pointer hover:bg-gray-900 hover:scale-[1.02]"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Register