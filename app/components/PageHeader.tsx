import { cx } from "../utils/joinClassNames";
import { sections } from "../views/ProjectFeatureSections";
import { HeroImage } from "./HeroImage";
import { Spacer } from "./Spacer";
import { H1, P, Txt } from "./Text";
import style from "./PageHeader.module.css";
import { ReactNode } from "react";
import { LinkButton, LinkButtonProps } from "./LinkButton";

export const PageHeader: React.FC<
  React.ComponentProps<"div"> & {
    label?: ReactNode;
    header?: ReactNode;
    subHeader?: ReactNode;
    description?: ReactNode;
    links?: LinkButtonProps[];
  }
> = ({
  className,
  label,
  header,
  subHeader,
  description,
  links = _links,
  ...props
}) => (
  <header className={cx(className, style.Header)} {...props}>
    <div className={cx(style.HeaderText)}>
      <H1>
        <Txt>{header}RedEye</Txt>
        <Spacer>/</Spacer>
        <Txt fg={3}>{subHeader}Red Team Log Visualization</Txt>
      </H1>
      <P italic size={4} fg={2}>
        {description}
        RedEye is a visualization tool developed for the US CyberSecurity and
        Infrastructure Security Agency (CISA) to improve the analysis and
        communication of Red Team cybersecurity assessments. The tool imports
        log records and summarizes them into a navigable hierarchy, timeline,
        and interactive node-graph visualization. Additionally, RedEye includes
        commenting and annotation features for providing context to address
        identified vulnerabilities.
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
      <HeroImage {...sections.redeye.heroImageProps} /* isScrollParallax */ />
    </div>

    {/* content */}
  </header>
);

const _links = sections.redeye.sectionDescriptionProps.links;
