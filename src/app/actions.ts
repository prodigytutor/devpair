"use server";

import { deleteUser } from "@/data-access/users";
import { auth } from "@clerk/nextjs/server";

export async function deleteAccountAction() {
  const userId = auth();

  if (!userId) {
    throw new Error("you must be logged in to delete your account");
  }

  await deleteUser(userId);
}
