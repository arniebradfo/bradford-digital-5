import style from "./Button.module.css";

export const Button: React.FC<React.ComponentProps<"button">> = ({
  children,
  ...props
}) => {
  return (
    <button className={style.primaryButton} {...props}>
      {children}
      <span className={style.child}>white</span>
    </button>
  );
};
