import React, {useState} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiRestaurant } from "react-icons/bi";
import { Link } from "react-scroll";

const Navbar = () => {

    const [menu , setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMene = () => {
        setMenu(false);
    };

    return (
        <div className="fixed w-full">
            <div>
                <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
                    <div className="flex flex-row items-center cursor-pointer">
                        {/* <span>
                            <BiRestaurant size={32} />
                        </span> */}
                        <h1 className="text-2xl font-semibold">Core</h1>
                    </div>
                    <nav className="hidden md:flex flex-row items-center text-md font-medium gap-8">
                        <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            About
                        </Link>
                        {/* <Link
                            to="deal"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Hot Deals
                        </Link> */}
                        <Link
                            to="product"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Our Products
                        </Link>
                        {/* <Link
                            to="service"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Services
                        </Link> */}
                    </nav>
                     <div className="md:hidden flex items-center ">
                        {menu ? (
                            <AiOutlineClose size={25} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                        )}
                    </div> 
                </div>

                <div className={`${menu ? "translate-x-0": "-translate-x-full"} lg:hidden flex flex-col bg-black text-white left-0 top-20 font-light px-5 text-left pt-8 pb-8 gap-8 w-full h-fit transition-transform duration-300`}>
                    <Link
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            About
                        </Link>
                        <Link
                            to="deal"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Hot Deals
                        </Link>
                        <Link
                            to="product"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Our Products
                        </Link>
                        {/* <Link
                            to="service"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="hover:text-brightColor transition-all cursor-pointer"
                        >
                            Services
                        </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
