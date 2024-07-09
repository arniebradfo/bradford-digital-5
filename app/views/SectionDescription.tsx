import { ReactNode } from "react";
import { LinkButton, LinkButtonProps } from "../components/LinkButton";
import { Txt } from "../components/Text";
import { cx } from "../utils/joinClassNames";
import Image, { ImageProps } from "next/image";
import style from "./Section.module.css";

export type SectionDescriptionProps = React.ComponentProps<
  typeof SectionDescription
>;

export const SectionDescription: React.FC<
  React.ComponentProps<"div"> & {
    imageProps?: ImageProps;
    label?: ReactNode;
    header?: ReactNode;
    description?: ReactNode;
    links?: LinkButtonProps[];
  }
> = ({
  className,
  imageProps,
  label,
  header,
  description,
  links,
  ...props
}) => (
  <div className={cx(className, style.SectionDescription)} {...props}>
    {imageProps && (
      <Image className={cx(style.SectionDescriptionImage)} {...imageProps} />
    )}
    {label && (
      <Txt size={6} fg={3} uppercase>
        {label}
      </Txt>
    )}
    {header && (
      <Txt size={2} fg={1} tag="h3" bold>
        {header}
      </Txt>
    )}
    {description && (
      <Txt size={5} tag="p">
        {description}
      </Txt>
    )}
    {links && (
      <div className={cx(style.SectionDescriptionButtonRow)}>
        {links.map((linkProps,i) => (
          <LinkButton key={i} {...linkProps} />
        ))}
      </div>
    )}
  </div>
);
