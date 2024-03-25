import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";
import Hero from "@/components/HERO/Hero";
import Navbar from "@/components/Navbar";
import  ParticlesComponent  from "@/components/HERO/Particles";
import Image from "next/image";
import OurTeam from "@/components/TEAM/OurTeam";
import Footer from "@/components/FOOTER/Footer";
export default function Home() {
  return (
    <div className="flex flex-col ">
      {/* <ParticlesComponent className="BG z-[-1]"></ParticlesComponent> */}
      <Navbar></Navbar>
      <Hero></Hero>
      <WhatWeDo></WhatWeDo>
      <OurTeam></OurTeam>
      <Footer></Footer>
    </div>
  );
}
