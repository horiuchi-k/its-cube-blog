import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "50代ITエンジニアのAI実践記",
  description: "AIを仕事や経営に活かすための実践的な情報を発信します。",
  openGraph: {
    title: "50代ITエンジニアのAI実践記",
    description: "AIを仕事や経営に活かすための実践的な情報を発信します。",
    url: "https://its-cube.com/",
    images: [
      {
        url: "https://its-cube.com/ogp.png",
        width: 800,
        height: 600,
        alt: "50代ITエンジニアのAI実践記",
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
        <Hero title="AI実践記" sub="50代ITエンジニアK" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
