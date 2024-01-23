import React from "react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { TiSocialFacebook } from "react-icons/ti";
import { LuGithub } from "react-icons/lu";

import { LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-slate-800 p-8 xl:p-20 flex flex-col">
      <div className="flex flex-col items-center justify-between  md:flex-row gap-6 border-b border-gray-500 pb-8 ">
        {/* Logo */}
        <div className="w-1/6">
          <a
            href="#"
            className="text-2xl font-bold text-white relative right-2 md:right-0 z-10"
          >
            Power<span className="text-primary text-5xl">.</span>{" "}
          </a>
        </div>
        {/* Social Media */}
        <nav className="flex items-center gap-3">
          <a href="#" className="block text-white p-3 bg-primary rounded-full">
            <IoLogoInstagram />
          </a>{" "}
          <a href="#" className="block text-white p-3 bg-primary rounded-full">
            <TiSocialFacebook />
          </a>{" "}
          <a href="#" className="block text-white p-3 bg-primary rounded-full">
            <LuGithub />
          </a>{" "}
          <a href="#" className="block text-white p-3 bg-primary rounded-full">
            <LuTwitter />
          </a>
        </nav>{" "}
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-bold text-gray-300 text-center md:text-left">Company</h3>
        <nav className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4 ">
          <a href="#" className="text-gray-300 text-center">
            About
          </a>
          <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">
            About Us
          </a>
          <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">
            Press
          </a>
          <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">
            Investors
          </a>
          <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">
            Events
          </a>
          <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">
            Terms of use
          </a>
          <a href="#" className="text-gray-300 mt-4 hover:text-white transition-colors">
            Privacy policy
          </a>
          <button
              type="button"
              className="font-semibold py-2 px-6 bg-primary text-white rounded-xl top-1/2"
            >
              Contact Us
            </button>
        </nav>
      </div>
      <div className="mt-20">
        <p className="text-gray-300 text-center">
          Power 2022 - All rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
