"use client";
import TitleGreen from "../ui/TitleGreen";
import MembersCardMap from "./MembersCardMap";
import MembersCardMapSwiper from "./MembersCardMapSwiper";
import { motion } from "framer-motion";
export default function OurTeam() {
  return (
    <div className="flex py-16 lg:py-28 flex-col items-center">
      <motion.div
        // initial={{
        //   opacity: 0,
        //   x: 300,
          
        // }}
        // whileInView={{
        //   opacity:1,
        //   x:0
        // }}
        // transition={{type:"tween",duration:1}}
        // viewport={{once:true}}
      >
        <TitleGreen title="Our Team" />
      </motion.div>
      <MembersCardMap></MembersCardMap>
      {/* <MembersCardMapSwiper></MembersCardMapSwiper> */}
    </div>
  );
}
