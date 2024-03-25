"use client"

export default function WhatWeDoCard({imgSrc,cardTitle}) {
  
  return (
    <div className="rounded-2xl hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out hover:shadow-[2px_2px_0_0_rgb(16_185_129)] md:basis-[28%] basis-[80%] font-serif flex flex-col lg:px-6 lg:py-8 px-4 py-6 bg-color-3 hover:from-color-3 hover:to-slate-500 ">
      <img src={imgSrc} alt="icon" className="h-6 lg:h-10 w-6 lg:w-10 rounded-lg p-1 lg:p-[6px] bg-blend-multiply bg-color-3" />

      <h2 className="text-white font-semibold my-[5px] lg:my-[9px] text-base lg:text-lg">
        {cardTitle}
      </h2>

      <h4 className="text-gray-300 text-sm lg:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex repudiandae, cupiditate quis atque soluta aspernatur mollitia repellendus libero, obcaecati officia! Aliquid voluptatum dicta aut quas ut accusamus nulla soluta eius minima! Ea, itaque fugiat eaque assumenda rerum ipsa eius.
      </h4>
    </div>
  )
}
