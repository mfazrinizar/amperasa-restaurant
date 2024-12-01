
import Footer from "@/components/layout/Footer";
import ForgotPassword from "@/components/layout/ForgotPassword";
import MainWrapper from "@/components/layout/MainWrapper";

export default function ContactPage() {
  return (
    <MainWrapper className="flex flex-col min-h-screen bg-light-ivory">
      <div className="flex-grow flex flex-col justify-center">
        <ForgotPassword />
      </div>
      <Footer />
    </MainWrapper>
  );
}
