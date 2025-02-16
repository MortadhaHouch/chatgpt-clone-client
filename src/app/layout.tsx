import type { Metadata } from "next";
import "./globals.css";
import HomeLayout from "./HomeLayout";


export const metadata: Metadata = {
  title: "Chatterly",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HomeLayout>{children}</HomeLayout>
  );
}
