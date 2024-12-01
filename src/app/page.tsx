import ContactUs from "@/components/layout/ContactUs";
import Divider from "@/components/layout/Divider";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import MainWrapper from "@/components/layout/MainWrapper";
import MenuFeaturedSwipes from "@/components/layout/MenuFeaturedSwipes";
import Showcase from "@/components/layout/Showcase";
import Testimonial from "@/components/layout/Testimonial";

export default function Home() {
  return (
    <MainWrapper className="overflow-x-hidden">
      <Hero />
      <Showcase />
      <Testimonial />
      <Divider className="m-0 p-0" /> {/* Adjust the margin and padding */}
      <MenuFeaturedSwipes />
      <ContactUs />
      <Footer />
    </MainWrapper>
  );
}
