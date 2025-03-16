import React from "react";
import { getSettings } from "@/services/queries/settings";

export async function Footer() {
  const settings = await getSettings();

  return (
    <>
      <footer className={"p-4 border-t-2 border-black"}>
        Copyright &copy; {settings.siteName}
      </footer>
    </>
  );
}
