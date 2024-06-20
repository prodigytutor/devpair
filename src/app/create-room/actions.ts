"use server";

import { createRoom } from "@/data-access/rooms";
import { Room } from "@/db/schema";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";
export async function createRoomAction(roomData: Omit<Room, "id" | "userId">) {
  const userId = auth();

  if (!userId) {
    throw new Error("you must be logged in to create this room");
  }

  const room = await createRoom(roomData, userId);

  revalidatePath("/browse");

  return room;
}
