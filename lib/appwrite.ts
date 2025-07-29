//appwrite.ts
import { Account, Client, Databases, ID, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("68541ffd0029826e4958"); // Project ID

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { account, client, databases, ID, storage };

// Utility functions
export async function registerUser(email: string, password: string, name: string) {
  try {
    return await account.create(ID.unique(), email, password, name);
  } catch (error: any) {
    throw new Error(error?.message || "Registration failed");
  }
}

export async function loginUser(email: string, password: string) {
  try {
    return await account.createEmailPasswordSession(email, password);
  } catch (error: any) {
    throw new Error(error?.message || "Login failed");
  }
}

export async function logoutUser() {
  try {
    await account.deleteSession("current");
  } catch (error: any) {
    throw new Error(error?.message || "Logout failed");
  }
}

export async function getCurrentUser() {
  try {
    return await account.get();
  } catch (error: any) {
    console.warn("getCurrentUser error:", error?.message);
    return null;
  }
}
