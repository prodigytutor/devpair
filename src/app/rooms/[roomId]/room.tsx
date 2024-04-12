"use client";

import { ReactNode } from "react";
import { RoomProvider } from "../../../../liveblocks.config";
import { ClientSideSuspense } from "@liveblocks/react";
import { LiveMap } from "@liveblocks/client";

export function Room({ children, roomId }: { children: ReactNode, roomId: string }) {
  return (
    <RoomProvider id={roomId} 
    initialPresence={{ cursor: null }}
    initialStorage={{ notes: new LiveMap() }}
    >
      <ClientSideSuspense fallback={<div>Loading…</div>}>
        {() => children}
      </ClientSideSuspense>
    </RoomProvider>
  );
}