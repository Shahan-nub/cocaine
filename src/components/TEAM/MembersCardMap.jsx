import MemberCard from "./MemberCard";
import { motion } from "framer-motion";
import { MEMBERS } from "@/CONSTANTS/MembersList";

export default function MembersCardMap() {
  return (
    <motion.div
      className="lg:hidden flex gap-3 justify-center lg:gap-9 mt-6 flex-wrap "
      initial={{
        opacity: 0,
        y: 120,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{ type: "tween", duration: 1 }}
      viewport={{ once: true }}
    >
      {MEMBERS.map((member) => {
        const { id, name, designation, src } = member;
        return (
          <MemberCard
            key={id}
            name={name}
            designation={designation}
            imgSrc={src}
          ></MemberCard>
        );
      })}
    </motion.div>
  );
}
