import { MdSearch } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const navigate = useNavigate()
    // ========= class function for active link =============
    const linkClass = ({ isActive }) =>
        isActive
            ? "underline underline-offset-8 decoration-[#f08b2c]"
            : "hover:underline underline-offset-8 decoration-[#f08b2c]";

    return (
        <div className="w-full border-b border-b-gray-300">
            <nav className="h-16 px-6  mx-auto max-w-7xl flex items-center justify-between">

                {/* Logo */}
                <Link to="/"><h1 className="text-2xl font-thin">Planora</h1></Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center justify-between gap-8 ">
                    {/* Search */}
                    <div className="relative border border-gray-300">
                        <input
                            type="text"
                            placeholder="Search events"
                            className="outline-none px-8 py-1 w-96"
                        />
                        <MdSearch className="absolute left-2 top-2 text-gray-400 text-lg" />
                    </div>

                    {/* Links */}
                    <ul className="flex items-center gap-6 font-thin ">
                        <NavLink to="/" className={linkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/events" className={linkClass}>
                            Events
                        </NavLink>

                        <NavLink to="/about" className={linkClass}>
                            About
                        </NavLink>

                        <NavLink to="/contact" className={linkClass}>
                            Contact
                        </NavLink>

                        <NavLink
                            to="/create-events"
                            className="bg-[#f08b2c] px-3 py-1 rounded shadow hidden lg:block"
                        >
                            Create events
                        </NavLink>

                    </ul>

                    {/* Auth */}
                    {
                        // ========= Based on the Authentication we will display the profile or login or logout button
                        isAuthenticated ? <div className="relative" onClick={() => setOpenMenu(!openMenu)}>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALsAAACUCAMAAAD8tKi7AAAARVBMVEX6+vqPj4////+JiYm0tLSMjIyGhobw8PD39/e8vLypqanz8/Ps7OyAgICwsLChoaHe3t7IyMjOzs6ZmZnV1dXm5ubCwsI/3RezAAAEDElEQVR4nO2c2bajIBBFoRAQHFDR/P+nNiS53RmMA/FC2Yv91P22L6uYimMIyWQymUwmk8lkMplMZhcApKpkXdeyqvx/TgNA3Q1KG2uptaa9DJ08iT6QsTCUCcY5pZRz9y9qiu4E9kAGS5m3fsT9GWZAbu/MmaCzcMHH1HqLTKaZN7/S6Cm14Ceg7ClbUKeU2SG15DxAWv5a52+Fw4vUmnMA2OVBvw+9wTdjoVyplx+ESa36Cki9Td2NfFumtn2mLLaqu6K/pLZ9Ztiu7kZ+xFTz9YcN6RMytfA/wKwtji8Dr9EMPIxLu+kczYRG3u5UpxzLKg/DXnUn3+GQL3dW+9UdR8VDt7tknLvFUfGXPWv7X/keg3u1+TTwCCsQnAxgCigZv9LUqc19ue/cU3/kMaw0fZi7wHCoUSHl7tz71OKONtBdpRZ3O5PevzN5MCw0Ibvq1b1NbX5y9xPXzJnnKlGB6zuCNRKG8+5N0IXVDEVwCHZnsZDJiuIsRqqgycpQNFWhD7p7DOlL5nrnC7iv2hqDOyEBuxNvcajDEOCO4ebhgd1Fg6TFQXzF7+7pIal2B+xsFYgCjToh9eor2SPcIuphExj3HGoYlol6Z0dzjKHYlh7Y/uDEMBzcn4BKbyubBsVB5hko9ZaVEqO6R71lT17hDEX7dwYYVp7lmUW2wjwAU8E+2zOu8Gyn7wAZtZgvHCZ0RxCrE2/fmeZt7LlodFfiNvcAVMr6acmvMD+BTV8iT4v9BaAeVau1MUbrVo1niRjeAYCyklJWbsBPJZ7JZDABx5BCver64nv6Lvbzh9v5W9YI9j2ioSpqStjt+jyw6z6DoCreIQ3qjfe7jXDRVpHkQZrjBv1GvKxqceioX4n16teFPaguwmmcCRuUU1pDROkfVMdXjIdHqPjQ99Q1mggtBNiRFt+DiNC5gcDswxpMZff/1/136j2Ke2BeZg1xieAemClcdY/wGgKBWc5V9wh5mv2PqduI8RkFyF86E/y6uSco67OqrqO4B4bblokUfQsMjS/D4sTHZGASdVFdVzHUAz/wWCZWBCswmbeobmKlI0AdXjTxnl3Lg825jdeVDP0+5RMi5rsrHLrGx7juPdIeJy8inNyfkOYo+fjfnh/WlEzx2Twc0h/jaSJ74Jb5b9d5RiPc9OYZ7XdFL0y6PA3I4otLFG9UpAPYB/vaBhYO51YmDhoADPr9N4pWxRnVI4KMBJSjoh/CSvMwYRWWDBOQadBioz5rWDvWSMw9/qfQRiMasVj8nIuG6RHBt3CvAEDdt9ZeJdk9cXWPXfkJYa0tBok2CeTjAXIae1XcAlc3tG4L1Y9TlSo9sJ2bYel/TG+aav+TeiVJFnoI5nzGmUwmk8lkMplMJpPBwh+CajELbbXaoQAAAABJRU5ErkJggg=="
                                alt="" className="w-12 h-12 rounded-full border border-gray-300 object-cover" />

                            <div
                                className={`
                             absolute right-4 mt-2 w-48 rounded-2xl bg-white border shadow-lg
                              transition-all duration-200 ease-out cursor-pointer
                                 origin-top-right
                                 ${openMenu
                                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                                    }
                                `}
                            >
                                <p className="p-2 hover:bg-gray-100 rounded-t-2xl">Profile</p>
                                <p className="p-2 hover:bg-gray-100">Events</p>
                                <p className="p-2 hover:bg-gray-100">Favourite</p>
                                <p className="p-2 text-red-600 hover:bg-gray-100 rounded-b-2xl">
                                    Sign Out
                                </p>
                            </div>

                        </div> : <div className="flex gap-4">
                            <button className="px-4 py-1 border font-thin cursor-pointer" onClick={() => navigate("/login")}>Login</button>
                            <button className="px-4 py-1 bg-[#f08b2c] hover:scale-105 transition font-thin cursor-pointer" onClick={() => navigate("/register")}>
                                Register
                            </button>
                        </div>
                    }
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-2xl"
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    {openMenu ? <RxCross1 /> : <RxHamburgerMenu />}
                </button>
            </nav >


            {/* Mobile Menu */}
            {
                openMenu && (
                    <div className="lg:hidden absolute top-16 left-1/2 -translate-x-1/2 
                w-full max-w-7xl bg-gray-100 border-t z-50">
                        <ul className="flex flex-col h-full items-center justify-center gap-6 py-6 font-thin hover:cursor-pointer">
                            <NavLink to="/" className={linkClass}>
                                Home
                            </NavLink>

                            <NavLink to="/events" className={linkClass}>
                                Events
                            </NavLink>

                            <NavLink to="/about" className={linkClass}>
                                About
                            </NavLink>

                            <NavLink to="/contact" className={linkClass}>
                                Contact
                            </NavLink>


                            <NavLink to={'/create-events'} className="bg-[#f08b2c] px-4 py-2 rounded shadow">
                                Create Events
                            </NavLink>
                        </ul>
                    </div>
                )
            }
        </div >
    );
};

export default Navbar;
