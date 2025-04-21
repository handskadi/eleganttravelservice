import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";



const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elegant Travel Service - ETS Travel",
  description: "Travel App for your next adventure in Morocco and beyond. Book your trip now! ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body
        className="antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
