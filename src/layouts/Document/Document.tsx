import clsx from "clsx";
import { ComponentProps, ReactNode, forwardRef } from "react";
import styles from "./Document.module.css";

interface Props extends ComponentProps<"div"> {
  header: ReactNode;
}

const DocumentLayout = forwardRef<HTMLElement, Props>(
  ({ children, header, className, ...props }, ref) => {
    return (
      <div className={clsx(className, styles.container)} {...props}>
        <header className={styles.header}>{header}</header>
        <main className={styles.main} ref={ref}>
          {children}
        </main>
      </div>
    );
  }
);
DocumentLayout.displayName = "DocumentLayout";

export default DocumentLayout;