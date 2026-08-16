import Image, { ImageProps } from "next/image";
import { cx } from "../utils/joinClassNames";
import style from "./layout.module.css";
import { imgSizes } from "../utils/imgSizes";

type HtmlProps<T extends keyof JSX.IntrinsicElements = "div"> =
  React.ComponentProps<T>;

const ArticleWrapper: React.FC<HtmlProps> = ({
  className,
  children,
  ...props
}) => (
  <section className={cx(className, style.ArticleWrapper)} {...props}>
    <div
      className={cx(
        style.PageElements,
        style.MetaHeader,
        style.ArticleLayout,
        style.ColumnTextChildren
      )}
    >
      {children}
    </div>
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
  HtmlProps & { wrap?: boolean; count?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 }
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
  style.Columns7,
  style.Columns8,
];

const getSafePlaceholder = (
  imageProps: Partial<ImageProps>
): ImageProps["placeholder"] => {
  const hasBlur = Boolean(
    imageProps.blurDataURL ||
      (typeof imageProps.src === "object" &&
        imageProps.src !== null &&
        "blurDataURL" in imageProps.src &&
        Boolean((imageProps.src as { blurDataURL?: string }).blurDataURL))
  );

  if (imageProps.placeholder === "blur" && !hasBlur) {
    return "empty";
  }
  return imageProps.placeholder ?? (hasBlur ? "blur" : "empty");
};

const FigureCaption: React.FC<
  HtmlProps & { imageProps: ImageProps; screenshot?: boolean }
> = ({
  className,
  children,
  imageProps: {
    className: imageClassName,
    placeholder: userPlaceholder,
    ...imageProps
  },
  screenshot = true,
  ...props
}) => {
  const placeholder = getSafePlaceholder({
    ...imageProps,
    placeholder: userPlaceholder,
  });

  return (
    <figure
      className={cx(
        className,
        style.ColumnFull,
        style.ColumnContainer,
        style.Figure
      )}
      {...props}
    >
      <Image
        className={cx(imageClassName, screenshot && style.Screenshot)}
        sizes={imgSizes.column1Text}
        {...imageProps}
        placeholder={placeholder}
      />
      <figcaption>{children}</figcaption>
    </figure>
  );
};

const Graphic: React.FC<HtmlProps & { imageProps: ImageProps }> = ({
  className,
  imageProps: { placeholder: userPlaceholder, ...imageProps },
  ...props
}) => {
  const placeholder = getSafePlaceholder({
    ...imageProps,
    placeholder: userPlaceholder,
  });

  return (
    <div className={cx(className, style.Graphic)} {...props}>
      <Image {...imageProps} placeholder={placeholder} />
    </div>
  );
};

const _Image: React.FC<
  HtmlProps & { imageProps: ImageProps; screenshot?: boolean }
> = ({
  className,
  imageProps: {
    className: imageClassName,
    placeholder: userPlaceholder,
    ...imageProps
  },
  screenshot = true,
}) => {
  const placeholder = getSafePlaceholder({
    ...imageProps,
    placeholder: userPlaceholder,
  });

  return (
    <Image
      className={cx(
        className,
        imageClassName,
        screenshot ? style.Screenshot : style.Flat
      )}
      {...imageProps}
      placeholder={placeholder}
    />
  );
};

const Note: React.FC<HtmlProps> = ({ className, ...props }) => (
  <aside className={cx(className, style.Note)} {...props} />
);

export const Layouts = {
  ArticleWrapper,
  ColumnText,
  ColumnFull,
  ColumnMax,
  Columns,
  FigureCaption,
  Graphic,
  Image: _Image,
  Note,
};
