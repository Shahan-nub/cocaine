import MemberCard from "./MemberCard";
import { motion } from "framer-motion";
const MEMBERS = [
  {
    id: 1,
    name: "Shahan Ali Anwer",
    designation: "President",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 2,
    name: "Shahan Ali Anwer",
    designation: "Vice President",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 3,
    name: "Shahan Ali Anwer",
    designation: "Operations Director",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 4,
    name: "Shahan Ali Anwer",
    designation: "Marketing Director",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 5,
    name: "Shahan Ali Anwer",
    designation: "Executive",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 6,
    name: "Shahan Ali Anwer",
    designation: "Executive",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 7,
    name: "Shahan Ali Anwer",
    designation: "Executive",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 8,
    name: "Shahan Ali Anwer",
    designation: "Executive",
    src: "/assets/members/shahan.jpg",
  },
];

export default function MembersCardMap() {
  return (
    <motion.div
      className="flex gap-3 justify-center lg:gap-9 flex-wrap "
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
