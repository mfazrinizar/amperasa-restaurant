import AboutMore from "@/components/layout/AboutMore";
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";
// import Team from "@/components/layout/Team";
// import  Testimonial  from "@/components/layout/Testimonial";

export default function AboutPage() {
  return (
    <MainWrapper className="bg-light-ivory">
      <AboutMore />
      {/* <Team /> */}
      {/* <Testimonial /> */}
      <Footer />
    </MainWrapper>
  );
}
