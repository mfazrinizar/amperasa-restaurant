import Header from "@/components/layout/Header";
import "../styles/main.scss";

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
      </body>
    </html>
  );
}
