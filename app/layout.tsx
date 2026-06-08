import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "IT Scube Blog",
  description: "ITに関する日々の備忘録",
  openGraph: {
    title: "IT Scube Blog",
    description: "ITに関する日々の備忘録",
    url: "https://blog.it-scube.com/",
    images: [
      {
        url: "https://blog.it-scube.com/ogp.png",
        width: 800,
        height: 600,
        alt: "IT Scube Blog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Hero title="日々の備忘録" sub="ITScube" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
