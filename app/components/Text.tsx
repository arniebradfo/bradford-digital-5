import React, { ComponentProps, HTMLAttributes } from "react";
import style from "./Text.module.css";

// THIS?: https://stackoverflow.com/a/54049872/5648839 //
type TagProps<Tag> = Tag extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[Tag] : never

export type TextProps<TagName extends keyof JSX.IntrinsicElements> = TagProps<TagName> & {
  /** type of tag to use */
  tagName?: TagName;

  // COLOR //
  /** #1 font color  */
  heading?: boolean;
  /** #2 font color - default  */
  body?: boolean;
  /** #3 font color  */
  muted?: boolean;
  /** #4 font color  */
  disabled?: boolean;

  // SIZE //
  /** large font-size  */
  large?: boolean;
  /** medium font-size  */
  medium?: boolean;
  /** small font-size  */
  small?: boolean;
  /** header font-sizes */
  h?: number;

  // FONT STYLE //
  /** bold font-weight  */
  bold?: boolean;
  /** normal font-weight - default (ie not bold)  */
  normal?: boolean;
  /** italic font-style  */
  italic?: boolean;

  // FAMILY / STYLE //
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
export const Txt = <TagName extends keyof JSX.IntrinsicElements>({
  tagName: RootTag = 'span',

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
  monospace,
  meta,

  ellipsize,

  className,
  ...props
}: TextProps<TagName>) => {

  return <RootTag className={style.Text} {...props} />;
};
