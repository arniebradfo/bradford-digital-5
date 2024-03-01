import { ProjectLinkButton } from "../components/ProjectLinkButton";
import { jCN } from "../utils/joinClassNames";
import { externalLinkAttributes } from "../utils/link";
import { linkContent } from "./linkContent";
import style from "./ProjectLinks.module.css";

export const ProjectLinks: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={jCN([className, style.Layout])} {...props}>
    {[...pluginLinks, ...projectLinks].map((linkProps) => (
      <ProjectLinkButton
        className={style.ProjectLink}
        key={linkProps.header}
        {...externalLinkAttributes}
        {...linkProps}
      />
    ))}
  </div>
);

const pluginLinks = [
  linkContent.pluginWordpress,
  linkContent.pluginFigmaStyleQuickActions,
  linkContent.pluginFigmaAutoConstraints,
  linkContent.pluginFigmaSelectRandom,
  linkContent.pluginFigmaRepeatList,
  linkContent.pluginAdobeXdRepeatText,
];

const projectLinks = [
  linkContent.projectRedeye,
  linkContent.blueprintComponents,
  linkContent.blueprintStyler,
  linkContent.projectHydropowerELibrary,
  linkContent.projectIrrigationViz,
  linkContent.projectAvyMap,
];
