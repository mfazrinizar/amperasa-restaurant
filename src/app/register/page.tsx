
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";
import Register from "@/components/layout/Register";

export default function ContactPage() {
  return (
    <MainWrapper className="flex flex-col min-h-screen bg-light-ivory">
      <div className="flex-grow flex flex-col justify-center">
        <Register />
      </div>
      <Footer />
    </MainWrapper>
  );
}
