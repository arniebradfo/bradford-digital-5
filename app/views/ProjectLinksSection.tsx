import {
  ProjectLinkButton,
  ProjectLinkButtonProps,
} from "../components/ProjectLinkButton";
import { jCN } from "../utils/joinClassNames";
import { externalLinkAttributes } from "../utils/link";
import { linkContent } from "./linkContent";
import { SectionDescription } from "./SectionDescription";
import style from "./ProjectLinksSection.module.css";
import styleSection from "./Section.module.css";

export const ProjectLinksSection: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={jCN([className, style.Layout])} {...props}>
    {sections.map(({ label, header, description, links }) => (
      <div key={header} className={styleSection.SectionWrapper}>
        <div className={jCN([styleSection.Section, style.ProjectsSection])}>
          <SectionDescription
            className={jCN([style.ProjectsDescription])}
            {...{ label, header, description }}
          />

          <div className={jCN([style.ProjectLinkList, style.ProjectsContent])}>
            {links.map((linkProps, i) => (
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
    ))}
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
    label: "Personal Projects",
    header: "Plugins",
    description:
      "Extensions and utilities for software I use frequently to optimize my personal workflows, published open source.",
    links: pluginLinks,
  },
  projects: {
    label: "Web App Development",
    header: "Professional Work",
    description:
      "Projects done under professional time and resource constraints, contributing both design and engineering.",
    links: projectLinks,
  },
};
const sections = Object.values(section);
