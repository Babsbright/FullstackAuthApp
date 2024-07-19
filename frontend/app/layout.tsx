import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
const inter = Inter({ subsets: ["latin"], display: "swap", adjustFontFallback: false,

  weight: ["100", "200", "400", "700"],

 });



export const metadata: Metadata = {
  title: "Authentication",
  description: "Authorize to access an admin dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
