import {
  ProjectLinkButton,
  ProjectLinkButtonProps,
} from "../components/ProjectLinkButton";
import { Txt } from "../components/Text";
import { jCN } from "../utils/joinClassNames";
import { externalLinkAttributes } from "../utils/link";
import { linkContent } from "./linkContent";
import style from "./ProjectLinks.module.css";
import styleSection from "./Section.module.css";

export const ProjectLinks: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={jCN([className, style.Layout])} {...props}>
    {sections.map(({ label, header, description, links }) => (
      <div key={header} className={styleSection.SectionWrapper}>
        <div className={jCN([styleSection.Section, style.ProjectsSection])}>
          <div className={styleSection.SectionDescription}>
            <Txt size={6} fg={3} uppercase>
              {label}
            </Txt>
            <Txt size={2} fg={1} tag="h3" bold>
              {header}
            </Txt>
            <Txt size={5} tag="p">
              {description}
            </Txt>
          </div>

          <div className={jCN([style.ProjectLinkList, styleSection.SectionContent])}>
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
      "Extensions to software I use frequently. These are utilities that optimize my personal workflows, but are published open source.",
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
