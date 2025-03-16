"use client";

import Link from "next/link";
import { NavigationItem } from "@/types/nav";
import { use } from "react";

export function NavItem({
  itemsPromise,
}: {
  itemsPromise: Promise<NavigationItem[]>;
}) {
  const item = use(itemsPromise);

  return (
    <ul className="flex space-x-4">
      {item.map((item, index) => (
        <li key={index}>
          <Link href={item.url} className="text-white hover:text-gray-400">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
