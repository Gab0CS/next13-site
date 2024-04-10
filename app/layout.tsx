import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Ansuz Net",
  description: "Consultores de software Ansuz Net",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
