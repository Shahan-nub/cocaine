import WhatWeDoCard from "./WhatWeDoCard";
import { motion } from "framer-motion";

const CARD_DETAILS = [
  { imgSrc: "assets/tick.gif", title: "Idea?", cardDesc:"Are you ready to take on new challenges and explore new avenues? Then join us and become a student entrepreneur. With Stage Settler, we will empower your knowledge and transform you into a business tycoon." },
  { imgSrc: "assets/code.png", title: "Project?",cardDesc:"Share your ideas with Stage Settler and let us provide the resources, guidance, and support to help you succeed." },
  { imgSrc: "assets/convo.png", title: "Need to upskill?",cardDesc:"Learn from experienced professionals, observe their techniques and strategies, and take on challenging tasks. We encourage you to request feedback from clients & attend meetings and seminars." },
  { imgSrc: "assets/event.gif", title: "New event?",cardDesc:"With Stage Settler, you don't have to worry about a thing. We'll work hand-in-hand with you to provide all the necessary details and resources. So, let's start planning an extraordinary event together." },
  { imgSrc: "assets/graph.gif", title: "Improve and Empower?",cardDesc:"Our event organizing society isn't just about putting on amazing events - we foster a learning environment where every member can develop their skills, and discover their passion for event planning." },
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
      {CARD_DETAILS.map(({ imgSrc, title, cardDesc }) => {
        return <WhatWeDoCard key={imgSrc} imgSrc={imgSrc} cardTitle={title} cardDesc={cardDesc}></WhatWeDoCard>;
      })}
    </motion.div>
  );
}
