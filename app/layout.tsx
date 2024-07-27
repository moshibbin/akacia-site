import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Counter from "./components/counter";
import Footer from "./components/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akacia",
  description: "Akacia Cosmetology and Hair Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Link to the favicon */}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="layout">  {children}</div>
        <Counter />
        <Footer />
      </body>
    </html>
  );
}
