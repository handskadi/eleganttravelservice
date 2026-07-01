"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Blocks/Footer";
import SupportPanel from "@/components/SupportPanel";
import LoginModal from "@/components/Modals/LoginModal";

export default function PathAwareShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  // Match /login, /signup AND locale-prefixed variants like /ar/login, /fr/login
  const isAuth = pathname === "/login" || pathname === "/signup" ||
                 pathname.endsWith("/login") || pathname.endsWith("/signup");

  if (isAuth) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <SupportPanel />
      <LoginModal />
      <Footer />
    </>
  );
}
