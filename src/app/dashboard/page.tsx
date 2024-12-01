import DashboardBook from "@/components/layout/DashboardBook";
import FloorSwipes from "@/components/layout/FloorSwipes";
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";

export default function MenuPage() {
    return (
        <MainWrapper className="flex flex-col min-h-screen bg-neutral-900">
            <div className="flex-grow flex flex-col justify-center">
                <DashboardBook />
            </div>

            <Footer />
        </MainWrapper>
    );
}
