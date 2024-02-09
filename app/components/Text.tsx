import React, { HTMLAttributes } from "react";
import style from "./Text.module.css";

export type TextProps = HTMLAttributes<HTMLOrSVGElement> & {
  /** type of tag to use */
  tagName?: keyof JSX.IntrinsicElements;

  // COLOR
  /** #1 font color  */
  heading?: boolean;
  /** #2 font color - default  */
  body?: boolean;
  /** #3 font color  */
  muted?: boolean;
  /** #4 font color  */
  disabled?: boolean;

  // SIZE
  /** large font-size  */
  large?: boolean;
  /** medium font-size  */
  medium?: boolean;
  /** small font-size  */
  small?: boolean;
  /** header font-sizes */
  h?: number;

  // FONT STYLE
  /** bold font-weight  */
  bold?: boolean;
  /** normal font-weight - default (ie not bold)  */
  normal?: boolean;
  /** italic font-style  */
  italic?: boolean;

  // FAMILY / Style
  /** sans-serif font-family - default */
  sans?: boolean;
  /** monospace font-family (ie code) */
  monospace?: boolean;
  /** all caps text blocks */
  meta?: boolean;

  /** truncate text with '...' if its in a flex parent */
  ellipsize?: boolean;
};

/** A utility text component for declarative styling */
export const Txt: React.FC<TextProps> = ({
  tagName,

  heading,
  body,
  muted,
  disabled,

  large,
  medium,
  small,
  h,

  bold,
  normal,
  italic,

  sans,
  monospace: mono,
  meta,

  ellipsize,
  className,
  ...props
}) => {
  /* const txtCss = useMemo(
    () => [
      {
        color: body //
          ? Tkn.TextBody
          : heading
          ? Tkn.TextHeading
          : muted
          ? Tkn.TextMuted
          : disabled
          ? Tkn.TextDisabled
          : undefined,
      },
      {
        fontSize: medium //
          ? Tkn.FontSizeMedium
          : large
          ? Tkn.FontSizeLarge
          : small
          ? Tkn.FontSizeSmall
          : undefined,
      },
      meta && utilityStyles.textMeta, // needs to come before fontWeight
      {
        fontWeight: normal //
          ? (Tkn.FontWeightNormal as any)
          : bold
          ? (Tkn.FontWeightBold as any)
          : undefined,
      },
      {
        fontStyle: normal //
          ? "normal"
          : italic
          ? "italic"
          : undefined,
      },
      {
        fontFamily: sans
          ? Tkn.FontFamilySans
          : mono
          ? Tkn.FontFamilyMonospace
          : serif
          ? Tkn.FontFamilySerif
          : undefined,
      },
      {
        display: block ? "block" : undefined,
      },
      running && utilityStyles.textRunning,
      ellipsize && utilityStyles.textEllipsis,
      alignTxtIcons,
    ],
    [
      block,
      bold,
      disabled,
      ellipsize,
      heading,
      italic,
      large,
      medium,
      meta,
      mono,
      muted,
      normal,
      body,
      running,
      sans,
      serif,
      small,
    ]
  );

  const _className = useMemo(() => {
    const classNames = [];
    if (skeleton) classNames.push(Classes.SKELETON);
    if (className) classNames.push(className);
    return classNames.length > 0 ? classNames.join(" ") : undefined;
  }, [className, skeleton]);

  const RootTag = useMemo(() => {
    return tagName ?? (running ? "p" : "span");
  }, [running, tagName]);
 */
  
  const RootTag = tagName ?? "span";

  return <RootTag className={style.Text} {...props} />;
};
