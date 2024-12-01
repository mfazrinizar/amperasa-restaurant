import Hero from "@/components/layout/Hero";
import MainWrapper from "@/components/layout/MainWrapper";
import Showcase from "@/components/layout/Showcase";
import Testimonial from "@/components/layout/Testimonial";

export default function Home() {
  return (
    <MainWrapper className="overflow-x-hidden">
      <Hero />
      <Showcase />
      <Testimonial />
    </MainWrapper>
  );
}
