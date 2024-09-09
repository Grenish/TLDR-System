import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TLDR System",
  description: "Super sexy and simple TLDR system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
