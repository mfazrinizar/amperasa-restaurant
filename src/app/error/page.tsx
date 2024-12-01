// src/app/error/page.tsx

import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";
import LogoSVG from "@/components/svg/LogoSVG";
import Button from "@/components/ui/Button";
import Link from "next/link";

const ErrorPage = ({ searchParams }: { searchParams: { statusCode?: string } })  => {
  const statusCode = searchParams?.statusCode || "404";

  return (
    <MainWrapper className="flex flex-col min-h-screen bg-neutral-900">
      <div className="container flex flex-col items-center justify-center h-screen space-y-4">
        <LogoSVG height={128} width={128} bg={true} />
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p className="text-2xl text-center">Sorry, an unexpected error has occurred.</p>
        <p className="text-red-500">
          <b>Error {statusCode}</b>
        </p>
        <Link href="/">
          <Button variant="outlined">Go Back Home</Button>
        </Link>
      </div>
      <Footer />
    </MainWrapper>
  );
};

export default ErrorPage;
