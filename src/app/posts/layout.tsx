import { Navbar } from "@/component/molecules/navbar/navbar";
import React from "react";
import { Footer } from "@/component/molecules/footer";

export default function PostLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className={"p-4"}>{children}</div>
      <Footer />
    </>
  );
}
