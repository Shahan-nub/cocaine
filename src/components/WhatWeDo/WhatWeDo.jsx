"use client";
import OurTeam from "../TEAM/ourTeam";
import TitleGray from "../ui/TitleGray";
import TitleGreen from "../ui/TitleGreen";
import WhatWeDoCardsMap from "./WhatWeDoCardsMap";
import ParticlesComponent from "../HERO/Particles";
import { motion } from "framer-motion";
// import { document } from "postcss";

export default function WhatWeDo() {

  return (
    <motion.div
      id="WhatWeDo"
      className="flex flex-col mt-6 lg:mt-2 justify-center items-center py-4 lg:py-6"
      initial={{y:500}}
      whileInView={{y:0}}
      transition={{type:"tween",duration:1}}
      viewport={{once:true}}
    >
      {/* <ParticlesComponent className="BG" ></ParticlesComponent> */}
      <TitleGray title="What we do?" />
      <TitleGreen title="We are your unofficial helping hand" />
      <WhatWeDoCardsMap></WhatWeDoCardsMap>
    </motion.div>
  );
}
