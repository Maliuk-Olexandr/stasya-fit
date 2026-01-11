import css from "./Footer.module.css";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className={clsx("section", css.footer)}>
      <div className="container">
      <p className={css.text}>© 2024 Stasya Fit. All rights reserved.</p>
      </div>
    </footer>
  );
}