"use client"

export default function WhatWeDoCard({imgSrc,cardTitle,cardDesc}) {
  
  return (
    <div className="rounded-2xl group transition-all duration-300 ease-in-out  md:basis-[28%] basis-[80%] font-serif flex flex-col lg:px-6 lg:py-8 px-4 py-6 lg:bg-gradient-to-b bg-color-3 from-color-3 via-[#000000] to-[#000000] ">
      <img src={imgSrc} alt="icon" className="h-6 lg:h-10 w-6 lg:w-10 rounded-lg p-1 lg:p-[6px] bg-blend-multiply bg-color-3 group-hover:shadow-[0_0_15px_rgb(16_185_129)]" />

      <h2 className="text-white font-semibold my-[5px] lg:my-[9px] text-base lg:text-lg">
        {cardTitle}
      </h2>

      <h4 className="text-gray-300 text-sm lg:text-base lg:-translate-y-12 group-hover:translate-y-0 lg:group-hover:opacity-100 lg:opacity-0 transition-all duration-[600ms] ">
        {cardDesc}
      </h4>
    </div>
  )
}
