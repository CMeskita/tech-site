import { Header } from "./commponents/section/Header";
import { Testimonial } from "./commponents/section/Testimonial";
import { Audience } from "./commponents/section/Audience ";
import PlansSection from "./commponents/section/PlansSection";
import NaveMenu from "./commponents/common/NaveMenu";
import { Footer } from "./commponents/common/Footer";
import Benefits from "./commponents/section/Benefits";

export default function Home() {
  return (
   <div className="bg-gray-50 text-gray-800">

      <NaveMenu />
      <Header />
      <Benefits />
      <PlansSection />
      <Audience />
      <Testimonial />
      <Footer />
    </div>
  );
}
