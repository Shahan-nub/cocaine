// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import MemberCard from "./MemberCard";
// import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// const MEMBERS = [
//   {
//     name: "Shahan Ali Anwer",
//     designation: "President",
//     src: "/assets/members/shahan.jpg",
//   },
//   {
//     name: "Shahan Ali Anwer",
//     designation: "Vice President",
//     src: "/assets/members/shahan.jpg",
//   },
//   {
//     name: "Shahan Ali Anwer",
//     designation: "Operations Director",
//     src: "/assets/members/shahan.jpg",
//   },
//   {
//     name: "Shahan Ali Anwer",
//     designation: "Marketing Director",
//     src: "/assets/members/shahan.jpg",
//   },
//   {
//     name: "Shahan Ali Anwer",
//     designation: "Executive",
//     src: "/assets/members/shahan.jpg",
//   },
// ];

// export default function MembersCardMapSwiper() {
//   return (
//     <div className="w-[90%] overflow-hidden">
//     <Swiper
//     className="overflow-hidden"
//       spaceBetween={100}
//       modules={[Navigation, Pagination,Scrollbar]}
//       slidesPerView={3}
//       navigation={true}
//       loop={false}
//       scrollbar={{ draggable: true }}
//     >
//       {MEMBERS.map((member) => {
//         const { name, designation, src } = member;
//         return (
//           <SwiperSlide>
//             <MemberCard
//               name={name}
//               designation={designation}
//               imgSrc={src}
//               ></MemberCard>
//           </SwiperSlide>
//         );
//     })}
//     </Swiper>
    // </div>
//   );
// }
