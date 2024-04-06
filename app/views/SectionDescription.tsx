import { ReactNode } from "react";
import { LinkButton, LinkButtonProps } from "../components/LinkButton";
import { Txt } from "../components/Text";
import { jCN } from "../utils/joinClassNames";
import Image, { ImageProps } from "next/image";
import style from "./Section.module.css";

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
  <div className={jCN([className, style.SectionDescription])}>
    {imageProps && (
      // img alt is in imageProps...
      // eslint-disable-next-line jsx-a11y/alt-text 
      <Image {...imageProps} />
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
      <div>
        <LinkButton href={"#"}>Link</LinkButton>
      </div>
    )}
  </div>
);
