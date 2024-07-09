import Image, { ImageProps } from "next/image";
import { cx } from "../utils/joinClassNames";
import style from "./layout.module.css";

type HtmlProps<T extends keyof JSX.IntrinsicElements = "div"> =
  React.ComponentProps<T>;

const ColumnFull: React.FC<HtmlProps> = ({ className, ...props }) => (
  <div
    className={cx(className, style.ColumnFull, style.ColumnContainer)}
    {...props}
  />
);

const ColumnMax: React.FC<HtmlProps> = ({ className, children, ...props }) => (
  <div
    className={cx(className, style.ColumnMax, style.ColumnContainer)}
    {...props}
  >
    {children}
  </div>
);

const Columns: React.FC<
  HtmlProps & { wrap?: boolean; count?: 1 | 2 | 3 | 4 | 5 | 6 }
> = ({ className, children, wrap = true, count = 1, ...props }) => (
  <div
    className={cx(className, style.Columns, styleColumnCount[count - 1])}
    {...props}
  >
    {children}
  </div>
);

const styleColumnCount = [
  style.Columns1,
  style.Columns2,
  style.Columns3,
  style.Columns4,
  style.Columns5,
  style.Columns6,
];

const FigureCaption: React.FC<HtmlProps & { imageProps: ImageProps }> = ({
  className,
  children,
  imageProps,
  ...props
}) => (
  <figure
    className={cx(
      className,
      style.ColumnFull,
      style.ColumnContainer,
      style.Figure
    )}
    {...props}
  >
    <Image {...imageProps} />
    <figcaption>{children}</figcaption>
  </figure>
);

const Graphic: React.FC<HtmlProps & { imageProps: ImageProps }> = ({
  className,
  imageProps,
  ...props
}) => (
  <div className={cx(className, style.Graphic)} {...props}>
    <Image {...imageProps} />
  </div>
);

export const Layouts = {
  ColumnFull,
  ColumnMax,
  Columns,
  FigureCaption,
  Graphic,
};
