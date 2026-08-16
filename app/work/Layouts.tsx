import React from "react";
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

const getChildAspectRatio = (child: React.ReactNode): number => {
  if (!React.isValidElement(child)) return 1;
  const props = child.props as any;

  if (typeof props?.aspectRatio === "number" && props.aspectRatio > 0) {
    return props.aspectRatio;
  }

  const imgProps = props?.imageProps;
  if (imgProps) {
    if (typeof imgProps.aspectRatio === "number" && imgProps.aspectRatio > 0) {
      return imgProps.aspectRatio;
    }
    if (typeof imgProps.src === "object" && imgProps.src !== null) {
      const { width, height } = imgProps.src;
      if (typeof width === "number" && typeof height === "number" && height > 0) {
        return width / height;
      }
    }
    if (imgProps.width && imgProps.height) {
      const w = Number(imgProps.width);
      const h = Number(imgProps.height);
      if (w > 0 && h > 0) return w / h;
    }
  }

  if (props?.src && typeof props.src === "object" && props.src !== null) {
    const { width, height } = props.src;
    if (typeof width === "number" && typeof height === "number" && height > 0) {
      return width / height;
    }
  }

  if (props?.width && props?.height) {
    const w = Number(props.width);
    const h = Number(props.height);
    if (w > 0 && h > 0) return w / h;
  }

  return 1;
};

const Columns: React.FC<
  HtmlProps & {
    wrap?: boolean;
    count?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
    equalHeight?: boolean;
  }
> = ({
  className,
  wrap = true,
  count = 1,
  equalHeight = false,
  children,
  style: rootStyle,
  ...props
}) => {
  if (equalHeight) {
    const childrenArray = React.Children.toArray(children).filter((child) =>
      React.isValidElement(child)
    );
    const ratios = childrenArray.map(getChildAspectRatio);
    const gridTemplateColumns = ratios.map((r) => `${r}fr`).join(" ");

    return (
      <div
        className={cx(
          className,
          style.Columns,
          wrap && style.ColumnsWrap
        )}
        style={{
          gridTemplateColumns,
          ...rootStyle,
        }}
        {...props}
      >
        {childrenArray.map((child, index) => {
          if (!React.isValidElement(child)) return child;
          const ratio = ratios[index];
          const childProps = child.props as any;

          return React.cloneElement(child as React.ReactElement<any>, {
            style: {
              aspectRatio: `${ratio}`,
              width: "100%",
              height: "auto",
              minWidth: 0,
              ...childProps?.style,
            },
          });
        })}
      </div>
    );
  }

  return (
    <div
      className={cx(className, style.Columns, styleColumnCount[count - 1])}
      style={rootStyle}
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
    style: imageStyle,
    ...imageProps
  },
  screenshot = true,
  style: rootStyle,
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
      style={rootStyle}
      {...props}
    >
      <Image
        className={cx(imageClassName, screenshot && style.Screenshot)}
        sizes={imgSizes.column1Text}
        style={imageStyle}
        {...imageProps}
        placeholder={placeholder}
      />
      <figcaption>{children}</figcaption>
    </figure>
  );
};

const Graphic: React.FC<HtmlProps & { imageProps: ImageProps }> = ({
  className,
  imageProps: {
    placeholder: userPlaceholder,
    style: imageStyle,
    ...imageProps
  },
  style: rootStyle,
  ...props
}) => {
  const placeholder = getSafePlaceholder({
    ...imageProps,
    placeholder: userPlaceholder,
  });

  return (
    <div className={cx(className, style.Graphic)} style={rootStyle} {...props}>
      <Image style={imageStyle} {...imageProps} placeholder={placeholder} />
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
    style: imageStyle,
    ...imageProps
  },
  screenshot = true,
  style: rootStyle,
  ...props
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
      style={{
        ...rootStyle,
        ...imageStyle,
      }}
      {...imageProps}
      {...props}
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

