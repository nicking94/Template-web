import React, { useState } from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoMdMenu } from "react-icons/io";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {

const [showMenu, setShowMenu] = useState(false);



  return (
    <header className="flex items-center justify-between xl:justify-start w-full h-[10vh] py-4 px-8 z-50">
      <div className="xl:w-1/6 text-center -mt-4">
        <a href="#" className="text-2xl font-bold relative -p-1 bg-white">
          Power<span className="text-primary text-5xl">.</span>{" "}
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 text-primary -z-10" />
        </a>
      </div>
      
      <nav className={`text-white xl:text-black fixed z-10 w-[50%] md:w-[90%] xl:w-full h-full ${showMenu ? "bg-slate-700 left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row justify-center items-center gap-10 transition-all duration-500`}>
     
        <a href="#" className="">
          HOME
        </a>
        <a href="#" className="">
          About Us
        </a>
        <a href="#" className="">
          Services
        </a>
        <a href="#" className="">
          Products
        </a>
      </nav>
      <button onClick={() => setShowMenu(!showMenu)} className="text-2xl p-2 xl:hidden" >
      {showMenu ?  <RiCloseFill /> :  <IoMdMenu />}
       
      </button>
    </header>
  );
};

export default Header;
