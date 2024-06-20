"use server";

import { getSession } from "@/lib/auth";
import { StreamChat } from "stream-chat";
import { auth } from "@clerk/nextjs/server";
export async function generateTokenAction() {
  const  userId  = auth();

  if (!userId) {
    throw new Error("No session found");
  }

  const api_key = process.env.NEXT_PUBLIC_GET_STREAM_API_KEY!;
  const api_secret = process.env.GET_STREAM_SECRET_KEY!;
  const serverClient = StreamChat.getInstance(api_key, api_secret);
  const token = serverClient.createToken(userId.userId || 'undefined');
  console.log("token", token);
  return token;
}
