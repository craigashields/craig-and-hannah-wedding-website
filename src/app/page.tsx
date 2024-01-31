import Schedule from "./components/Schedule";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import RSVPBanner from "./components/RSVPBanner";
import WhereAndWhen from "./components/WhereAndWhen";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhereAndWhen />
      <Schedule />
      {/* <AboutUs /> */}
      <RSVPBanner />
      <Faqs />
      {/* Section for time and place white background, add to calendar, see on map */}
      {/* <WhereAndWhen />{" "} */}
      {/* Bride and Groom */}
      {/* Schedule */}
      {/* Places to stay */}
      {/* RSVP wallpaper background, white square in center */}
    </div>
  );
}
