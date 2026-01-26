import css from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export function Button({ onClick, children, type = "button" }: ButtonProps) {
  return (
    <button className={css.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};