import FloorSwipes from "@/components/layout/FloorSwipes";
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";

export default function MenuPage() {
  return (
    <MainWrapper className="bg-neutral-900">
      <FloorSwipes pb="xl" />
      <Footer />
    </MainWrapper>
  );
}
