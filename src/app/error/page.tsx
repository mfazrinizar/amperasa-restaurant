// src/app/error/page.tsx
import Footer from "@/components/layout/Footer";
import MainWrapper from "@/components/layout/MainWrapper";
import LogoSVG from "@/components/svg/LogoSVG";
import Button from "@/components/ui/Button";
// import { NextPageContext } from "next";
import Link from "next/link";

// type ErrorPageProps = {
//   statusCode: string;
// };

// ({ statusCode }: ErrorPageProps)
const ErrorPage = () => {
  return (
    <MainWrapper className="flex flex-col min-h-screen bg-neutral-900">
      <div className="container flex flex-col items-center justify-center h-screen space-y-4">
        <LogoSVG height={128} width={128} bg={true} />
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p className="text-2xl text-center">Sorry, an unexpected error has occurred.</p>
        <p className="text-red-500">
          <b>Error</b>
        </p>
        <Link href="/">
          <Button variant="outlined">Go Back Home</Button>
        </Link>
      </div>
      <Footer />
    </MainWrapper>
  );
};

// ErrorPage.getInitialProps = ({ query }: NextPageContext) => {
//   const statusCode = query.statusCode || "404";
//   return { statusCode };
// };

export default ErrorPage;
