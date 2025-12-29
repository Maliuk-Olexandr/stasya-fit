import css from "./LinkButton.module.css";
import Link from "next/link";
import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

type LinkProps = { label: ReactNode } & ComponentProps<typeof Link>;

export function LinkButton({ className, label, ...props }: LinkProps) {

  return (
    <Link {...props} className={clsx(css.link, className)}>
      {label}
    </Link>
  );
}
