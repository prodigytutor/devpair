"use server";

import { getSession } from "@/lib/auth";
import { StreamChat } from "stream-chat";
import { auth, currentUser } from "@clerk/nextjs";
export async function generateTokenAction() {
  const { userId } = auth();

  if (!userId) {
    throw new Error("No session found");
  }

  const api_key = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
  const api_secret = process.env.GET_STREAM_SECRET_KEY!;
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(userId);
  console.log("token", token);
  return token;
}
