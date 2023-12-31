import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trello 2.0 Clone",
  description: "Generated and Produced by Abhishek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F5F6F8]"> {children}</body>
    </html>
  );
}
