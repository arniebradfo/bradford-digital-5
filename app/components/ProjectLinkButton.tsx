import { ReactNode } from "react";
import { jCN } from "../utils/joinClassNames";
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
};

export const ProjectLinkButton: React.FC<ProjectLinkButtonProps> = ({
  className,
  label,
  header,
  description,
  imgSrc,
  imgAlt,
  imgProps,
  ...props
}) => (
  <LinkButton
    className={jCN([className, style.Layout])}
    classNameInside={style.InsideLayout}
    classNameBg={style.ButtonBg}
    offsetPx={40}
    // duration={0.2}
    {...props}
  >
    <div className={style.ImageWrapper}>
      <Image
        className={style.Image}
        src={imgSrc}
        alt={imgAlt}
        height={64}
        // width={64}
        {...imgProps}
      />
    </div>
    <div className={style.Text}>
      <Txt fg={3} size={6} uppercase >
        {label}
      </Txt>
      <Txt tag="h2" fg={1} size={3} bold>
        {header}
      </Txt>
      <Txt fg={2} size={5}>
        {description}
      </Txt>
    </div>
  </LinkButton>
);
