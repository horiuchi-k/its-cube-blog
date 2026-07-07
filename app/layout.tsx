import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title: "50代ITエンジニアのAI実践記",
  description: "AIを仕事や経営に活かすための実践的な情報を発信します。",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://blog.hiraku-ai.com/" },
  openGraph: {
    title: "50代ITエンジニアのAI実践記",
    description: "AIを仕事や経営に活かすための実践的な情報を発信します。",
    url: "https://blog.hiraku-ai.com/",
    siteName: "50代ITエンジニアのAI実践記",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "https://blog.hiraku-ai.com/ogp.png",
        width: 1200,
        height: 630,
        alt: "50代ITエンジニアのAI実践記",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "50代ITエンジニアのAI実践記",
    description: "AIを仕事や経営に活かすための実践的な情報を発信します。",
    images: ["https://blog.hiraku-ai.com/ogp.png"],
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
        <GoogleAnalytics />
        <Header />
        <Hero title="AI実践記" sub="50代ITエンジニアK" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
