import MemberCard from "./MemberCard";
import { motion } from "framer-motion";
const MEMBERS = [
  {
    id: 1,
    name: "Dhritiman Talukdar",
    designation: "President",
    src: "/assets/members/dman.jpg",
  },
  {
    id: 2,
    name: "Shahan Ali Anwer",
    designation: "Tech Lead",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 3,
    name: "Atul Srivastav",
    designation: "Design Lead",
    src: "/assets/members/atul.jpg",
  },
  {
    id: 4,
    name: "Shivanand Giri",
    designation: "Research Lead",
    src: "/assets/members/shahan.jpg",
  },
  {
    id: 5,
    name: "Karan Buragohain",
    designation: "Marketing Lead",
    src: "/assets/members/karan.jpg",
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
