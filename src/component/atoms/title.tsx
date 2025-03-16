import React from "react";

export function Title({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <h1 className={"text-3xl font-bold"}>{children}</h1>;
}
