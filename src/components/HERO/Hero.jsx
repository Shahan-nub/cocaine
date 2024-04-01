"use client";
import ParticlesContainer from "./Particles";
import { motion } from "framer-motion";
import SplineBG from "./Spline";

export default function Hero() {
  return (
    <>
      <div className="HERO h-[84vh] overflow-hidden w-full flex flex-col justify-center items-center">
        <ParticlesContainer id="BG"></ParticlesContainer>
        
        <div className="HERO_TEXT overflow-hidden flex flex-wrap">
          <h1 className="bg-gradient-to-r from-color-1 via-green-800 to-color-1 inline-block text-transparent bg-clip-text font-semibold  lg:text-7xl text-3xl">
            THE{" "}
          </h1>
          <h1 className="bg-gradient-to-r from-color-1 via-green-800 to-color-1 inline-block text-transparent bg-clip-text font-semibold  lg:text-7xl text-3xl lg:mx-10 mx-4">
            STAGE{" "}
          </h1>
          <h1 className="bg-gradient-to-r from-color-1 via-green-800 to-color-1 inline-block text-transparent bg-clip-text font-semibold  lg:text-7xl text-3xl">
            SETTERS{" "}
          </h1>
        </div>
        <h1 className="HERO_TEXT_2 bg-gradient-to-r from-color-2 via-slate-400 to-color-2 text-transparent bg-clip-text font-semibold font-mono lg:text-5xl text-xl">
          Make it happen!{" "}
        </h1>
        {/* <SplineBG></SplineBG> */}
      </div>
    </>
  );
}
