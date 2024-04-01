"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import MemberCard from "./MemberCard";
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
    src: "/assets/members/atul.jpeg",
  },
  {
    id: 4,
    name: "Shivanand Giri",
    designation: "Research Lead",
    src: "/assets/members/shiv.jpg",
  },
  {
    id: 5,
    name: "Karan Buragohain",
    designation: "Marketing Lead",
    src: "/assets/members/karan.jpg",
  },
];

export default function MembersCardMapSwiper() {
    const swiper=useSwiper();
  return (
    <div className="hidden lg:inline-block mt-10">

    <Swiper
      // install Swiper modules
      className=" max-w-[95vw] relative lg:max-w-[90vw] "
      style={{paddingInline:'40px'}}

    modules={[Navigation, Pagination]}
    slidesPerView={4} 
    spaceBetween={40}
     navigation={true}
    loop={true} 
    scrollbar={{ draggable: true }}
    >
      {MEMBERS.map((member) => {
        const { id, name, designation, src } = member;
        return (
          <SwiperSlide key={id}>
            <MemberCard
            //   key={id}
              name={name}
              designation={designation}
              imgSrc={src}
            ></MemberCard>
          </SwiperSlide>
        );
      })}
    </Swiper>
      </div>
  );
}
