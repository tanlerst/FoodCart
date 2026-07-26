import { getUserType } from "./getUserType";

export async function getRoute(authUserId: string): Promise<string> {
  const usertype = await getUserType(authUserId);
  if (usertype === 2) {
    return "/admin";
  }
  if (usertype === 1) {
    return "/recommendations";
  }

  throw new Error("Unknown user type");
}
