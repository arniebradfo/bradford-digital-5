import Image, { ImageProps } from "next/image";
import { cx } from "../utils/joinClassNames";
import style from "./layout.module.css";

type HtmlProps<T extends keyof JSX.IntrinsicElements = "div"> =
  React.ComponentProps<T>;

const ArticleWrapper: React.FC<HtmlProps> = ({
  className,
  children,
  ...props
}) => (
  <section
    className={cx(
      className,
      style.ArticleWrapper,
    )}
    {...props}
    >
    <div className={cx(
      style.PageElements,
      style.MetaHeader,
      style.ArticleLayout,
      style.ColumnTextChildren
    )}>{children}</div>
  </section>
);

const ColumnText: React.FC<HtmlProps> = ({ className, ...props }) => (
  <div
    className={cx(className, style.ColumnText, style.ColumnContainer)}
    {...props}
  />
);

const ColumnFull: React.FC<HtmlProps> = ({ className, ...props }) => (
  <div
    className={cx(className, style.ColumnFull, style.ColumnContainer)}
    {...props}
  />
);

const ColumnMax: React.FC<HtmlProps> = ({ className, ...props }) => (
  <div
    className={cx(className, style.ColumnMax, style.ColumnContainer)}
    {...props}
  />
);

const Columns: React.FC<
  HtmlProps & { wrap?: boolean; count?: 1 | 2 | 3 | 4 | 5 | 6 }
> = ({ className, wrap = true, count = 1, ...props }) => (
  <div
    className={cx(className, style.Columns, styleColumnCount[count - 1])}
    {...props}
  />
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

const _Image: React.FC<HtmlProps & { imageProps: ImageProps }> = ({
  className,
  imageProps,
}) => <Image className={cx(className)} {...imageProps} />;

export const Layouts = {
  ArticleWrapper,
  ColumnText,
  ColumnFull,
  ColumnMax,
  Columns,
  FigureCaption,
  Graphic,
  Image: _Image,
};
