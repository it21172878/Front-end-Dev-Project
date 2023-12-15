// import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <div className=" fixed w-full ">
      <div>
        <div className=" flex flex-row justify-between p-4 px-20 bg-primaryColor shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer">
            <img
              src={logo}
              alt="At-Digital"
              className="w-[124px] h-[32px] cursor-pointer"
            />
          </div>
          <nav className=" hidden md:flex flex-row items-center font-medium gap-5">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" text-white hover:text-textColorSubtitle  transition-all cursor-pointer"
            >
              SERVICES
            </Link>
            <Link
              to="about us"
              spy={true}
              smooth={true}
              duration={500}
              className=" text-white hover:text-textColorSubtitle  transition-all cursor-pointer"
            >
              ABOUT US
            </Link>
            <Link
              to="contact us"
              spy={true}
              smooth={true}
              duration={500}
              className=" text-white hover:text-textColorSubtitle  transition-all cursor-pointer"
            >
              CONTACT US
            </Link>
            <Link
              to="careers"
              spy={true}
              smooth={true}
              duration={500}
              className=" text-white hover:text-textColorSubtitle  transition-all cursor-pointer"
            >
              CAREERS
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
