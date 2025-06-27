// services/auth/checkAuth.ts
import { account } from "@/lib/appwrite";

export async function checkAuth() {
  try {
    const user = await account.get();
    return user;
  } catch (err) {
    return null;
  }
}
