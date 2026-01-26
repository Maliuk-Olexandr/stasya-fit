import css from "./Logo.module.css";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className={css.logo}>
      stasya<span className={css.fit}>fit</span>
    </Link>
  );
}
