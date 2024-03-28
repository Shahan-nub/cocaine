import WhatWeDoCard from "./WhatWeDoCard";
import { motion } from "framer-motion";

const CARD_DETAILS = [
  { imgSrc: "assets/tick.gif", title: "Idea?" },
  { imgSrc: "assets/code.png", title: "Project?" },
  { imgSrc: "assets/convo.png", title: "Need to upskill?" },
  { imgSrc: "assets/event.gif", title: "New event?" },
  { imgSrc: "assets/graph.gif", title: "Improve and Empower?" },
];

const aboutUsAnimationVariant = {
  intial: {
    opacity: 0,
    y: 400,
  },
  animate: () => ({
    opacity: 1,
    y: 0,
  }),
};

export default function WhatWeDoCardsMap() {
  return (
    <motion.div
      className="flex flex-wrap gap-6 lg:gap-9 mt-8 lg:mt-10 px-5 lg:px-8 justify-center w-full"
      // variants={aboutUsAnimationVariant}
      initial={{ opacity: 0, scale:1.11,}}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{type:'tween',duration:.7}}
      viewport={{ once: true }}
    >
      {CARD_DETAILS.map(({ imgSrc, title }) => {
        return <WhatWeDoCard key={imgSrc} imgSrc={imgSrc} cardTitle={title}></WhatWeDoCard>;
      })}
    </motion.div>
  );
}
