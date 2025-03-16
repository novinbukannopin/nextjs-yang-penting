import { Settings } from "@/types/setting";

export async function getSettings(): Promise<Settings> {
  const response = await fetch("http://localhost:3001/settings");
  return await response.json();
}
