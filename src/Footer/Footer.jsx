import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer-container font-thin w-full ">
            <footer className="max-w-7xl  h-16 flex items-center justify-around">
                <p> Made with ❤️by <span className="text-[#f08b2c] font-medium">@lezyCoder</span></p>
                <ul className="icons items-center justify-between gap-4 hidden lg:flex text-[#f08b2c]">
                    <li className="text-3xl p-2 rounded-full transition-all duration-300 ease-in-out 
                 hover:bg-[#1877F2] hover:text-white">
                        <RiFacebookLine />
                    </li>

                    <li className="text-3xl p-2 rounded-full transition-all duration-300 ease-in-out 
                 hover:bg-black hover:text-white">
                        <RiTwitterXFill />
                    </li>

                    <li className="text-3xl p-2 rounded-full transition-all duration-300 ease-in-out 
                 hover:bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] 
                 hover:text-white">
                        <FaInstagram />
                    </li>
                </ul>

            </footer>
        </div>
    )
}

export default Footer