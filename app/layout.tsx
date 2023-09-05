import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trello 2.0 Clone",
  description: "Generated by Abhishek",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body> {children}</body>
    </html>
  );
}
