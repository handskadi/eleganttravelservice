import FeaturedTours from "@/components/FeaturedTours";
import Hero from "@/components/Hero";
import PopularDestinationsSection from "@/components/PopularDestinationsSection";
import PriceSection from "@/components/PriceSection";
import RecentBlogSection from "@/components/RecentBlogSection";
import TestimonialSection from "@/components/TestimonialSection";


export default function Home() {
  return (
    <>
      <Hero />
      <PopularDestinationsSection />
      <FeaturedTours />
      <PriceSection />
      <TestimonialSection />
      <RecentBlogSection />

    </>
  );
}
