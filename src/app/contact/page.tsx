import ContactUs from "@/components/layout/ContactUs";
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";

export default function ContactPage() {
  return (
    <MainWrapper className="flex flex-col min-h-screen bg-neutral-900">
      <div className="flex-grow flex flex-col justify-center">
        <ContactUs />
      </div>
      <Footer />
    </MainWrapper>
  );
}
