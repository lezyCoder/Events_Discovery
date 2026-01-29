import { MdSearch } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);


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
                            className="outline-none px-8 py-1 w-72"
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
                    <div className="flex gap-4">
                        <button className="px-4 py-1 border font-thin">Login</button>
                        <button className="px-4 py-1 bg-[#f08b2c] hover:scale-105 transition font-thin">
                            Register
                        </button>
                    </div>
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
