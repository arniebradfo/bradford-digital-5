import {
  ProjectLinkButton,
  ProjectLinkButtonProps,
} from "../components/ProjectLinkButton";
import { cx } from "../utils/joinClassNames";
import { linkContent } from "./linkContent";
import { SectionDescription } from "./SectionDescription";
import style from "../layout/Section.module.css";

import ImgBlueprintFigma from "../../public/lfs-media/Project-Icons/Project-Icon-Blueprint-Figma-Components.svg";
import ImgBlueprintStyler from "../../public/lfs-media/Project-Icons/Project-Icon-Blueprint-Styler.svg";

export const ProjectLinksSection: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={cx(className, style.SectionWrapper)} {...props}>
    <div className={cx(style.Section, style.ProjectsSection)}>
      <SectionDescription {...section.projects.description} />
      <div className={cx(style.SectionContent, style.ProjectLinkList)}>
        {section.projects.links.map((linkProps, i) => (
          <ProjectLinkButton
            key={i}
            className={style.ProjectLink}
            external
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
  <div className={cx(className, style.SectionWrapper)} {...props}>
    <div className={cx(style.Section, style.ProjectsSection)}>
      <SectionDescription {...section.plugins.description} />
      <div className={cx(style.SectionContent, style.ProjectLinkList)}>
        {section.plugins.links.map((linkProps, i) => (
          <ProjectLinkButton
            key={i}
            className={style.ProjectLink}
            external
            {...linkProps}
          />
        ))}
      </div>
    </div>
  </div>
);

export const BlueprintLinksSection: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={cx(className, style.SectionWrapper)} {...props}>
    <div className={cx(style.Section, style.ProjectsSection)}>
      <SectionDescription {...section.blueprint.description} />
      <div className={cx(style.SectionContent, style.ProjectLinkList)}>
        {section.blueprint.links.map((linkProps, i) => (
          <ProjectLinkButton
            key={i}
            className={cx(style.ProjectLink)}
            external
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

const blueprintStyler: ProjectLinkButtonProps = {
  label: "CSS Theme Overlay",
  header: "Blueprint Styler",
  description: "Add custom themes to Palantir's Blueprint component library",
  imgSrc: ImgBlueprintStyler,
  imgAlt: "",
  isLarge: true,
  href: "https://pnnl.github.io/blueprint-styler/",
};

const blueprintFigma: ProjectLinkButtonProps = {
  label: "Figma Library",
  header: "Blueprint Component & Icon Libraries",
  description: "A (mostly) 1:1 match to Palantir's Blueprint component library",
  imgSrc: ImgBlueprintFigma,
  imgAlt: "",
  isLarge: true,
  href: "https://www.figma.com/@pnnl",
};

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
  blueprint: {
    description: {
      label: "PNNL",
      header: "Blueprint Design System",
      description:
        "An Extension of Palantir's Blueprint Design System that includes theming, developer utilities, and designer resources",
    },
    links: [blueprintStyler, blueprintFigma],
  },
};
