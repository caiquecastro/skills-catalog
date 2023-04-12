import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import { Navbar } from "~/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Skills Catalog",
  description: "Catalog for professional skills",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <Navbar />
        <main className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
