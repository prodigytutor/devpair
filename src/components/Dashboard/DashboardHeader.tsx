import clsx from "clsx";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { ComponentProps, MouseEventHandler } from "react";
import { CrossIcon, MenuIcon, SignOutIcon } from "../../icons";
import { Avatar } from "../../primitives/Avatar";
//import { Button } from "../../primitives/Button";
import Button from "@/primitives/Button/Button";
import { Popover } from "../../primitives/Popover";
import { InboxPopover } from "../../components/Inbox";
import { Logo } from "../../components/Logo";
import styles from "./DashboardHeader.module.css";
import { auth, currentUser } from "@clerk/nextjs/server";

interface Props extends ComponentProps<"header"> {
  isOpen: boolean;
  onMenuClick: MouseEventHandler<HTMLButtonElement>;
}

export async function DashboardHeader({
  isOpen,
  onMenuClick,
  className,
  ...props
}: Props) {
  const user = await currentUser();

  return (
    <header className={clsx(className, styles.header)} {...props}>
      <div className={styles.menu}>
        <button className={styles.menuToggle} onClick={onMenuClick}>
          {isOpen ? <CrossIcon /> : <MenuIcon />}
        </button>
      </div>
      <div className={styles.logo}>
        <Link href="/" className={styles.logoLink}>
          <Logo />
        </Link>
      </div>
      <div className={styles.profile}>
        {user && (
          <Popover
            align="end"
            alignOffset={-6}
            content={
              <div className={styles.profilePopover}>
                <div className={styles.profilePopoverInfo}>
                  <span className={styles.profilePopoverName}>
                    {user.username}
                  </span>
                  <span className={styles.profilePopoverId}>
                    {user.id}
                  </span>
                </div>
                <div className={styles.profilePopoverActions}>
                  <Button
                    className={styles.profilePopoverButton}
                    icon={<SignOutIcon />}
                    onClick={() => signOut()}
                  >
                    Sign out
                  </Button>
                </div>
              </div>
            }
            side="bottom"
            sideOffset={6}
          >
            <button className={styles.profileButton}>
              <Avatar
                className={styles.profileAvatar}
                name={user.username}
                size={32}
                src={user.imageUrl}
              />
            </button>
          </Popover>
        )}
        <div className={styles.profileInbox}>
          <InboxPopover align="end" sideOffset={4} />
        </div>
      </div>
    </header>
  );
}
