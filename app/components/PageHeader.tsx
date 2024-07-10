import { cx } from "../utils/joinClassNames";
import { sections } from "../views/ProjectFeatureSections";
import { HeroImage, HeroImageProps } from "./HeroImage";
import { Spacer } from "./Spacer";
import { H1, P, Txt } from "./Text";
import style from "./PageHeader.module.css";
import { ReactNode } from "react";
import { LinkButton, LinkButtonProps } from "./LinkButton";

export type PageHeaderProps = React.ComponentProps<typeof PageHeader>;

export const PageHeader: React.FC<
  React.ComponentProps<"div"> & {
    header?: ReactNode;
    subHeader?: ReactNode;
    description?: ReactNode;
    links?: LinkButtonProps[];
    heroImageProps: HeroImageProps;
  }
> = ({ className, header, subHeader, description, links, heroImageProps, ...props }) => (
  <header className={cx(className, style.Header)} {...props}>
    <div className={cx(style.HeaderText)}>
      <H1>
        <Txt>{header}</Txt>
        <Spacer>/</Spacer>
        <Txt fg={3}>{subHeader}</Txt>
      </H1>
      <P bold mono size={5} fg={2}>
        {description}
      </P>
      {links && (
        <div className={cx(style.ButtonRow)}>
          {links.map((linkProps, i) => (
            <LinkButton key={i} {...linkProps} />
          ))}
        </div>
      )}
    </div>

    <div className={cx(style.HeroImageWrapper)}>
      <HeroImage {...heroImageProps} /* isScrollParallax */ />
    </div>
  </header>
);
