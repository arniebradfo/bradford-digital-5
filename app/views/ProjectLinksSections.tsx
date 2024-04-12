import {
  ProjectLinkButton,
  ProjectLinkButtonProps,
} from "../components/ProjectLinkButton";
import { cx } from "../utils/joinClassNames";
import { externalLinkAttributes } from "../utils/link";
import { linkContent } from "./linkContent";
import { SectionDescription } from "./SectionDescription";
import style from "./Section.module.css";

export const ProjectLinksSection: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={style.SectionWrapper} {...props}>
    <div className={cx(style.Section, style.ProjectsSection)}>
      <SectionDescription {...section.projects.description} />
      <div className={cx(style.SectionContent, style.ProjectLinkList)}>
        {section.projects.links.map((linkProps, i) => (
          <ProjectLinkButton
            key={i}
            className={style.ProjectLink}
            {...externalLinkAttributes}
            {...linkProps}
          />
        ))}
      </div>
    </div>
  </div>
);

export const PluginLinksSection: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={style.SectionWrapper} {...props}>
    <div className={cx(style.Section, style.ProjectsSection)}>
      <SectionDescription {...section.plugins.description} />
      <div className={cx(style.SectionContent, style.ProjectLinkList)}>
        {section.plugins.links.map((linkProps, i) => (
          <ProjectLinkButton
            key={i}
            className={style.ProjectLink}
            {...externalLinkAttributes}
            {...linkProps}
          />
        ))}
      </div>
    </div>
  </div>
);

const pluginLinks: ProjectLinkButtonProps[] = [
  linkContent.pluginWordpress,
  linkContent.pluginFigmaStyleQuickActions,
  linkContent.pluginFigmaAutoConstraints,
  linkContent.pluginFigmaSelectRandom,
  linkContent.pluginFigmaRepeatList,
  linkContent.pluginAdobeXdRepeatText,
];

const projectLinks: ProjectLinkButtonProps[] = [
  linkContent.projectRedeye,
  linkContent.blueprintComponents,
  linkContent.blueprintStyler,
  linkContent.projectHydropowerELibrary,
  linkContent.projectIrrigationViz,
  linkContent.projectAvyMap,
];

const section = {
  plugins: {
    description: {
      label: "Personal Projects",
      header: "Plugins",
      description:
        "Extensions and utilities for software I use frequently to optimize my personal workflows, published open source.",
    },
    links: pluginLinks,
  },
  projects: {
    description: {
      label: "Web App Development",
      header: "Professional Work",
      description:
        "Projects done under professional time and resource constraints, contributing both design and engineering.",
    },
    links: projectLinks,
  },
};
