"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { RxCodesandboxLogo } from "react-icons/rx";
import { BsChatDots } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const onClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className=" backdrop-blur bg-opacity-50 2xl:px-20 lg:flex lg:justify-center min-w-screen max-w-[120rem] lg:px-6 lg:py-5 hidden z-10 h-[12vh]">
        <div className="2xl:gap-24  2xl:max-w-full 2xl:w-full w-screen flex g-8 justify-between items-center text-sm  px-2 lg:px-4 ">
          <div className="LOGO flex items-center">
            <RxCodesandboxLogo className="text-color-1  text-xl sm:text-2xl lg:text-5xl justify-self-start"></RxCodesandboxLogo>
            <h1 className="text-color-2 hover:text-white text-lg lg:text-xl ml-1 lg:ml-4 font-medium lg:font-semibold ">TSS</h1>
          </div>
          <div className="flex text-sm lg:gap-12 md:gap-9 justify-between items-center">
            <Link
              href="/"
              className={`flex justify-center text-color-2 hover:text-white  gap-2 hover:scale-105 text-center
               ${
                usePathname() === "/"
                  ? " border-color-1 border-b-2 px-2 pt-2 pb-2 bg-color-4  bg-opacity-25  backdrop-blur-sm"
                  : ""
              }
              `
            }
            >
              Home
            </Link>

            <Link
              href="#WhatWeDo"
              className={`flex 2xl:ml-auto justify-center text-color-2 hover:text-white  gap-2 hover:scale-105 ${
                usePathname() === "#WhatWeDo"
                  ? "border-color-1 border-b-2 px-2 pt-2 pb-2 bg-color-4  bg-opacity-25  backdrop-blur-sm"
                  : ""
              }`}
            >
              About Us
            </Link>
            <Link
              href="/websitebuilders"
              className={`flex justify-center text-color-2 hover:text-white  gap-2 hover:scale-105 ${
                usePathname() === "/websitebuilders"
                  ? "border-color-1 border-b-2 px-2 pt-2 pb-2 bg-color-4  bg-opacity-25  backdrop-blur-sm"
                  : ""
              }`}
            >
              Website Builders
            </Link>
            <Link
              href="/deals"
              className={`flex justify-center text-color-2 hover:text-white  gap-2 hover:scale-105 ${
                usePathname() === "/deals"
                  ? "border-color-1 border-b-2 px-2 pt-2 pb-2 bg-color-4  bg-opacity-25  backdrop-blur-sm"
                  : ""
              }`}
            >
              Explore
            </Link>
          </div>
          <div className="login flex items-center lg:gap-6">
            <button className="bg-color-2 text-sm hover:bg-color-1 hover:shadow-lg hover:text-white hover:scale-105 transition-all ease-in-out duration-200 font-medium text-black rounded-md outline-none lg:py-[6px] py-1 px-2 lg:px-3">
              Join Us
            </button>
            <Link href="/chat-with-us" className="rounded-lg p-1 lg:p-2 hover:bg-color-3">
            <BsChatDots className="text-3xl text-color-1"></BsChatDots>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-6 text-white  w-screen lg:hidden ">
        <IoMenuOutline onClick={onClick} />
      </div>
      <div
        className={`fixed top-0 left-0 w-3/5 h-full z-10  lg:hidden bg-[gray] bg-opacity-25  backdrop-blur-lg border-white border-opacity-25 border transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-0 right-0 z-30 text-color-2 m-4">
          <IoMdClose onClick={onClick} className="h-[40px] w-[40px]" />
        </div>

        <div className="mt-40 ">
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>

          <Link
            href="/"
            onClick={onClick}
            className="flex items-center text-color-2 gap-2 px-4 py-2 mr-6 ml-6 rounded hover:bg-color-1"
          >
            <IoHomeOutline />
            Home
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            onClick={onClick}
            className="flex items-center  text-color-2  gap-2 px-4 py-2 mr-6 ml-6 hover:bg-color-1"
          >
            <MdCategory />
            Categories
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            onClick={onClick}
            className="flex  text-color-2 items-center  gap-2 px-4 py-2 mr-6 ml-6  hover:bg-color-1"
          >
            <MdWeb />
            Website Builders
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
          <Link
            href="/"
            onClick={onClick}
            className="flex  text-color-2 items-center gap-2 px-4 py-2 mr-6 ml-6 hover:bg-color-1"
          >
            <MdOutlineLocalOffer />
            Explore
          </Link>
          <div className="my-4 border-t border-[#939393] mr-6 ml-6"></div>
        </div>
      </div>
      <hr className="hidden sm:block opacity-50"/>
    </>
  );
};

export default Navbar;
