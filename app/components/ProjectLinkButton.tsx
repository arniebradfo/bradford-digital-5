import { ReactNode } from "react";
import { cx } from "../utils/joinClassNames";
import { LinkButton, LinkButtonProps } from "./LinkButton";
import style from "./ProjectLinkButton.module.css";
import { Txt } from "./Text";
import Image from "next/image";

type ImageProps = React.ComponentProps<typeof Image>;

export type ProjectLinkButtonProps = LinkButtonProps & {
  label: ReactNode;
  header: ReactNode;
  description: ReactNode;
  imgSrc: ImageProps["src"];
  imgAlt: string;
  imgProps?: Partial<ImageProps>;
  isLarge?: boolean;
};

export const ProjectLinkButton: React.FC<ProjectLinkButtonProps> = ({
  className,
  label,
  header,
  description,
  imgSrc,
  imgAlt,
  imgProps,
  isLarge,
  ...props
}) => (
  <LinkButton
    className={cx(className, style.Layout, isLarge && style.ImageIsLarge)}
    classNameInside={style.InsideLayout}
    classNameBg={style.ButtonBg}
    offsetPx={60}
    // duration={0.3}
    {...props}
  >
    <div className={style.ImageWrapper}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        height={64}
        // width={64}
        {...imgProps}
        className={cx(style.Image, imgProps?.className)}
      />
    </div>
    <div className={style.Text}>
      <Txt fg={3} size={6} uppercase>
        {label}
      </Txt>
      <Txt tag="h3" fg={1} size={3} bold>
        {header}
      </Txt>
      <Txt fg={2} size={5}>
        {description}
      </Txt>
    </div>
  </LinkButton>
);
