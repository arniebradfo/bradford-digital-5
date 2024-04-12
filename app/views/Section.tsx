
import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";
import { ReactNode } from "react";

export const Section: React.FC<
  React.ComponentProps<"div"> & { description: ReactNode; content: ReactNode }
> = ({ className, children: _, description, content, ...props }) => (
  <div className={style.SectionWrapper}>
    <div className={cx(style.Section, style.ProjectsSection)}>
      {description}
      <div className={cx(style.SectionContent, style.ProjectLinkList)}>
        {content}
      </div>
    </div>
  </div>
);


