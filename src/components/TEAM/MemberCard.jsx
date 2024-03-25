"use client";
import { LuInstagram } from "react-icons/lu";
import { FaLink, FaLinkedin } from "react-icons/fa";
import Link from "next/link";


export default function MemberCard({ imgSrc, name, designation }) {
  return (
    <div className="group text-center border-t-4 sm:basis-[20%] basis-[30%] border-transparent hover:border-color-1 hover:rounded-xl hover:bg-color-3 transition-all duration-150 ease-in flex flex-col justify-between items-center p-4 lg:p-6">
      <img
        src={imgSrc}
        alt={name}
        className="rounded-full border-2 border-color-2 h-20 lg:h-32 w-20 lg:w-32  "
      />

      <h2 className="text-white font-medium text-base lg:text-lg lg:font-semibold my-3 lg:my-5">
        {name}
      </h2>

      <p className="text-color-2 font-normal lg:font-medium text-sm lg:text-base ">
        {designation}
      </p>
      <div
        className={`flex group-hover:visible invisible transition-all duration-150 ease-in text-base lg:text-xl text-color-1 gap-5 lg:gap-7 mt-5 lg:mt-8 `}
      >
        <Link target="_blank" href="/">
          <LuInstagram className="cursor-pointer hover:scale-110 "></LuInstagram>
        </Link>
        <Link target="_blank" href="/">
          <FaLinkedin className="cursor-pointer hover:scale-110"></FaLinkedin>
        </Link>
      </div>
    </div>
  );
}
