"use client"
import { ClientSideSuspense } from "@liveblocks/react";
import { useRouter } from "next/router";
import { ComponentProps, useEffect, useState } from "react";
import { InboxIcon } from "../../icons";
import { useUnreadInboxNotificationsCount } from "../../../liveblocks.config";
import { Button } from "../../primitives/Button";
import { Popover } from "../../primitives/Popover";
import { Inbox } from "./Inbox";
import styles from "./InboxPopover.module.css";

function InboxPopoverUnreadCount() {
  const { count } = useUnreadInboxNotificationsCount();

  return count ? (
    <div className={styles.inboxPopoverUnreadCount}>{count}</div>
  ) : null;
}

export function InboxPopover(
  props: Omit<ComponentProps<typeof Popover>, "content">
) {
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <Popover
      open={isOpen}
      onOpenChange={setOpen}
      content={<Inbox className={styles.inboxPopover} />}
      {...props}
    >
      <Button variant="secondary" icon={<InboxIcon />} iconButton>
        <ClientSideSuspense fallback={null}>
          {() => <InboxPopoverUnreadCount />}
        </ClientSideSuspense>
      </Button>
    </Popover>
  );
}
