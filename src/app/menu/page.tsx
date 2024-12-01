import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";
import Menu from "@/components/layout/Menu";
import MenuFeaturedSwipes from "@/components/layout/MenuFeaturedSwipes";

export default function MenuPage() {
  return (
    <MainWrapper className="bg-neutral-900">
      <MenuFeaturedSwipes pb="xl" />
      <Menu pt="xl" pb="xl" />
      <Footer />
    </MainWrapper>
  );
}
