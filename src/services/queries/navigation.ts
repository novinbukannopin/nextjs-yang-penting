import { NavigationItem } from "@/types/nav";

export async function getNavigationItem(): Promise<NavigationItem[]> {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
  const response = await fetch("http://localhost:3001/nav");
  return await response.json();
}
