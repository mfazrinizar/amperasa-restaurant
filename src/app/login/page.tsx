
import Footer from "@/components/layout/Footer";
import Login from "@/components/layout/Login";
import MainWrapper from "@/components/layout/MainWrapper";

export default function ContactPage() {
  return (
    <MainWrapper className="flex flex-col min-h-screen bg-light-ivory">
      <div className="flex-grow flex flex-col justify-center">
        <Login />
      </div>
      <Footer />
    </MainWrapper>
  );
}
