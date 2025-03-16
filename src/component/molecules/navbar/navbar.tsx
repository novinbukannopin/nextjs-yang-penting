import React, { Suspense } from "react";
import { getSettings } from "@/services/queries/settings";
import { NavItem } from "@/component/molecules/navbar/nav-item";
import { getNavigationItem } from "@/services/queries/navigation";

export async function Navbar() {
  const settings = await getSettings();
  const navItems = getNavigationItem();

  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">{settings.siteName}</h1>
        <Suspense fallback={<SuspenseLoading />}>
          <NavItem itemsPromise={navItems} />
        </Suspense>
      </nav>
    </>
  );
}

const SuspenseLoading = () => {
  return <div className={"text-white"}>Loading...</div>;
};
