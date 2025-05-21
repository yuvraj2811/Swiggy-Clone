import React, { useState } from "react";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { FaHandsHelping } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { IoMdMenu } from "react-icons/io";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  const links =[

  {
    icon:<IoIosSearch/>,
    name:"Search"
  },
  {
    icon:<CiDiscount1/>,
    name:"Offer",
    sup: "new"
  },
  {
    icon: <FaHandsHelping/>,
    name:"Help"
  },
  {
    icon:<GrUserManager/>,
    name:"Sign in"
  },
  {
    icon:< MdOutlineShoppingCart />,
    name:"Cart",
    sup:"0"
  }

  ]

  return (
    <div >
      <div
        className="black-overlay w-full h-full fixed duration-500"
        onClick={hideSideMenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-[500px] h-full bg-white absolute duration-700 "
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>

      <header className="p-3 shadow-xl sticky top-0  bg-white z-[50]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px] ">
            <img
              src="images/swiggy-icon.png"
              alt="swiggy icon"
              className="w-full"
            />
          </div>

          <div>
            <span className="font-bold underline decoration-red-500">
              {" "}
              Boring Road
            </span>{" "}
            Patna ,Bihar,India{" "}
            <RxCaretDown
              onClick={showSideMenu}
              className="inline  text-[#fc8019] font-bold text-2xl cursor-pointer"
            />
          </div>


           <div className="ml-auto">
            <div className="md:hidden "><IoMdMenu className="text-[1.4rem]"/></div>
          <nav className=" hidden md:flex list-none gap-10  text-[1.2rem]"> 
               {
                links.map(
                  (link,index)=>{
                    return <li key={index} className="flex items-center hover:text-[#fc8019] duration-500 ease-in-out cursor-pointer gap-2">
                          {link.icon}
                          {link.name}
                          <sup>{link.sup}</sup>
                    </li>
                  }
                )
               }
          </nav>
        </div>
        </div>

       
      </header>
    </div>
  );
};

export default Header;
