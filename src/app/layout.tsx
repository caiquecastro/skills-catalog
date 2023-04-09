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
        {children}
      </body>
    </html>
  );
}
