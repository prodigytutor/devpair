"use server";

import { deleteRoom, getRoom } from "@/data-access/rooms";
import { getSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
export async function deleteRoomAction(roomId: string) {
  const userId = auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }

  const room = await getRoom(roomId);

  if (room?.userId !== userId.userId) {
    throw new Error("User not authorized");
  }

  await deleteRoom(roomId);

  revalidatePath("/your-rooms");
}
