import css from "./LinkButton.module.css";
import Link from "next/link";
import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type LinkButtonProps = {
  children: ReactNode;
} & ComponentProps<typeof Link>;

export function LinkButton({ className, children, ...props }: LinkButtonProps) {
  return (
    <Link {...props} className={clsx(css.link, className)}>
      {children}
    </Link>
  );
}
