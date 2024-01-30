import Hero from "./components/Hero";
import RSVPBanner from "./components/RSVPBanner";
import WhereAndWhen from "./components/WhereAndWhen";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WhereAndWhen />
      {/* <AboutUs /> */}
      <RSVPBanner />

      {/* Section for time and place white background, add to calendar, see on map */}
      {/* <WhereAndWhen />{" "} */}
      {/* Bride and Groom */}
      {/* Schedule */}
      {/* Places to stay */}
      {/* RSVP wallpaper background, white square in center */}
    </main>
  );
}
