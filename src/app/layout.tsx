import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Container from "@/components/common/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Blog",
  description: "My Blog App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-zinc-600 bg-zinc-200  min-h-screen
      `}
      >
        <Container>
          <Header />
          {children}
          <Footer />
        </Container>
      </body>
    </html>
  );
}
