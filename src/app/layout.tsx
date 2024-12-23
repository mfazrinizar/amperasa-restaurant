import Header from "@/components/layout/Header";
import "../styles/main.scss";
import { Toaster } from "@/components/ui/Toaster";

export const metadata = {
  title: "AmpeRASA Restaurant",
  description: "Palembang Cuisine Restaurant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Header />
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
