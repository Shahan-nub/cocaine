"use client";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import MemberCard from "./MemberCard";
import { IoMdArrowDropleft,IoMdArrowDropright } from "react-icons/io";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MEMBERS } from "@/CONSTANTS/MembersList";

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
