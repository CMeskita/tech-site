import { Header } from "./commponents/section/Header";
import { Testimonial } from "./commponents/section/Testimonial";
import { Audience } from "./commponents/section/Audience ";
import PlansSection from "./commponents/section/PlansSection";
import NavMenu from "./commponents/common/NavMenu";
import { Footer } from "./commponents/common/Footer";
import Benefits from "./commponents/section/Benefits";
import { Apresentation } from "./commponents/section/Apresentarion";
import { WhatsFlutuante } from "./commponents/common/WhatsFlutuante";

export default function Home() {
  return (
   <div className="bg-gray-50 text-gray-800">
      <NavMenu />
      <Header/>
      <div className="p-6"><Apresentation/></div>
      
      <Benefits />
      <PlansSection />
      <Audience />
      <Testimonial />
      <Footer />
    <WhatsFlutuante/>
    </div>
  );
}
