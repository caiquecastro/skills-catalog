import { Navbar } from "~/app/components/Navbar";
import "./globals.css";
import { PropsWithChildren } from "react";

export const metadata = {
  title: "Skills Catalog",
  description: "Catalog for professional skills",
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  );
}
