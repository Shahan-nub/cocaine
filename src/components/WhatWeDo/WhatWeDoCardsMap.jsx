import WhatWeDoCard from "./WhatWeDoCard";
import { motion } from "framer-motion";

const CARD_DETAILS = [
  { imgSrc: "assets/tick.gif", title: "Have a Business idea?" },
  { imgSrc: "assets/code.png", title: "Have a dream project?" },
  { imgSrc: "assets/convo.png", title: "Want to learn while working?" },
  { imgSrc: "assets/event.gif", title: "Want to organise an event?" },
  { imgSrc: "assets/graph.gif", title: "Want to grow and help others?" },
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
        return <WhatWeDoCard imgSrc={imgSrc} cardTitle={title}></WhatWeDoCard>;
      })}
    </motion.div>
  );
}
