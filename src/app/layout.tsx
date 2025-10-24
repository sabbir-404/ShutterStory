import type { Metadata } from "next";
import "./globals.css";              // import ONCE at the root
import Nav from "@/components/Nav";
import Loader from "@/components/Loader";
import FooterContact from "@/components/FooterContact";

export const metadata: Metadata = {
  title: "shutterstory",
  description: "Moments. Light. Story.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* keep data-theme on body so your CSS continues to work */}
      <body data-theme="dark">
        <Loader />
        <Nav />
        {children}
        <FooterContact />
      </body>
    </html>
  );
}
