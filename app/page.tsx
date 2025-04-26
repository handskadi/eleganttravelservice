import AboutSection from "@/components/Blocks/AboutSection";
import FeaturedTours from "@/components/Blocks/FeaturedTours";
import Hero from "@/components/Blocks/Hero";
import PopularDestinationsSection from "@/components/Blocks/PopularDestinationsSection";
import PriceSection from "@/components/Blocks/PriceSection";
import RecentBlogSection from "@/components/Blocks/RecentBlogSection";
import TestimonialSection from "@/components/Blocks/TestimonialSection";


export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinationsSection />
      <FeaturedTours />
      <PriceSection />
      <AboutSection />
      <TestimonialSection />
      <RecentBlogSection />

    </>
  );
}
