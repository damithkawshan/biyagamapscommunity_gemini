import { Hero } from "../components/Hero";
import { ServicesHome } from "../components/ServicesHome";
import { AnnouncementsCarousel } from "../components/AnnouncementsCarousel";
import { LatestUpdates } from "../components/LatestUpdates";

export function Home() {
  return (
    <div className="relative">
      <Hero />
      <div className="relative -mt-32 z-10">
        <ServicesHome />
      </div>
      <AnnouncementsCarousel />
      <LatestUpdates />
    </div>
  );
}
