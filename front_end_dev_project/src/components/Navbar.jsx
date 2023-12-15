// // import React from 'react';
// import { Link } from 'react-scroll';
// import logo from '../assets/logo.svg';
// import { useState } from 'react';

// import close from '../assets/close.svg';
// import menu from '../assets/menu.svg';

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div className=" fixed w-full ">
//       <div>
//         <div className=" flex flex-row justify-between p-4 px-20 bg-primaryColor shadow-[0_3px_10px_rgba(0,0,0,0.2)]">
//           <div className=" flex flex-row items-center cursor-pointer">
//             <img
//               src={logo}
//               alt="At-Digital"
//               className="w-[124px] h-[32px] cursor-pointer"
//             />
//           </div>
//           <nav className=" hidden md:flex flex-row items-center font-medium gap-5">
//             <Link
//               to="services"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" text-white hover:text-textColorSubtitle  transition-all cursor-pointer"
//             >
//               SERVICES
//             </Link>
//             <Link
//               to="about us"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" text-white hover:text-textColorSubtitle  transition-all cursor-pointer"
//             >
//               ABOUT US
//             </Link>
//             <Link
//               to="contact us"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" text-white hover:text-textColorSubtitle  transition-all cursor-pointer"
//             >
//               CONTACT US
//             </Link>
//             <Link
//               to="careers"
//               spy={true}
//               smooth={true}
//               duration={500}
//               className=" text-white hover:text-textColorSubtitle  transition-all cursor-pointer"
//             >
//               CAREERS
//             </Link>
//             <div className=" sm:hidden flex flex-1 justify-end items-center">
//               <img src={toggle ? close : menu} />
//             </div>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from 'react';

import close from '../assets/close.svg';
import menu from '../assets/menu.svg';
import logo from '../assets/logo.svg';
import { navLinks } from '../constants/index';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className=" bg-primaryColor w-full flex p-5 px-20 fixed justify-between items-center navbar 
    
    shadow-[0_3px_10px_rgb(0,0,0,0.5)]"
    >
      <img
        src={logo}
        alt="hoobank"
        className="w-[124px] h-[32px] cursor-pointer"
      />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-secondaryColor ${
              active === nav.title ? 'text-secondaryColor' : 'text-white'
            } ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className=" w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? 'hidden' : 'flex'}  text-2xl fixed w-full
transition-transform duration-300 left-52
           p-6 bg-primaryColor top-16
            my-1 min-w-[140px] sidebar`}
        >
          <ul className=" items-start list-none flex justify-end flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-poppins font-medium cursor-pointer text-[14px] hover:text-secondaryColor ${
                  active === nav.title ? 'text-secondaryColor' : 'text-white'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
