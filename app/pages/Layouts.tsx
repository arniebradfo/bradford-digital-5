import { cx } from "../utils/joinClassNames";
import style from "./layout.module.css";

type HtmlProps<T extends keyof JSX.IntrinsicElements = "div"> =
  React.ComponentProps<T>;

const ColumnFull: React.FC<HtmlProps> = ({ className, ...props }) => (
  <div className={cx(className, style.ColumnFull)} {...props} />
);

const ColumnMax: React.FC<HtmlProps> = ({ className, children, ...props }) => (
  <div className={cx(className, style.ColumnMax)} {...props}>
    {children}
  </div>
);

const Columns: React.FC<
  HtmlProps & { wrap?: boolean; count?: 1 | 2 | 3 | 4 | 5 | 6 }
> = ({ className, children, wrap = true, count = 3, ...props }) => {
  // console.log({ children });

  // const childCount = Array.isArray(children) ? children.length : 1;

  return (
    <div
      className={cx(
        className,
        style.ColumnMax,
        style.Columns,
        styleColumnCount[count - 1]
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const styleColumnCount = [
  style.Columns1,
  style.Columns2,
  style.Columns3,
  style.Columns4,
  style.Columns5,
  style.Columns6,
];

export const Layouts = {
  ColumnFull,
  ColumnMax,
  Columns,
};
