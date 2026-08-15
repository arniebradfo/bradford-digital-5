import { Fragment } from "react";
import style from "./TagNav.module.css";
import { cx } from "../utils/joinClassNames";
import { getAllProjects, getProjectsByTag, TagKey } from "../data/projects";
import { LinkButton } from "./LinkButton";
import { Meta, Txt } from "./Text";

interface TagNavProps {
  activeTag?: string;
  className?: string;
}

const TAG_NAV_ITEMS: {
  label: string;
  href: string;
  tagKey?: TagKey | "all";
}[] = [
  { label: "All", href: "/work", tagKey: "all" },
  { label: "PNNL", href: "/PNNL", tagKey: "PNNL" },
  { label: "ASI", href: "/ASI", tagKey: "ASI" },
  { label: "Bestway", href: "/Bestway", tagKey: "Bestway" },
  { label: "College", href: "/College", tagKey: "College" },
  { label: "Freelance", href: "/Freelance", tagKey: "Freelance" },
  { label: "Side Projects", href: "/SideProject", tagKey: "SideProject" },
  { label: "Featured", href: "/featured", tagKey: "featured" },
  { label: "Archives", href: "/archives", tagKey: "archives" },
];

export const TagNav: React.FC<TagNavProps> = ({
  activeTag = "all",
  className,
}) => {
  const normalizedActive = activeTag.toLowerCase();

  return (
    <nav
      className={cx(style.NavWrapper, className)}
      aria-label="Work Categories"
    >
      <div className={style.NavLayout}>
        <Meta fg={2}>Work:</Meta>
        {/* <Txt fg={4} className={style.NavSpacer} /> */}
        {TAG_NAV_ITEMS.map((item, i) => {
          const isActive =
            (item.tagKey === "all" && normalizedActive === "all") ||
            (item.tagKey && item.tagKey.toLowerCase() === normalizedActive);

          const count =
            item.tagKey === "all"
              ? getAllProjects().length
              : getProjectsByTag(item.tagKey || "").length;

          return (
            <Fragment key={item.href}>
              {i > 0 && (
                <Txt fg={4} className={style.NavSpacer}>
                  /
                </Txt>
              )}
              <LinkButton
                href={item.href}
                offsetPx={16}
                className={cx(style.NavLink, isActive && style.Active)}
                classNameInside={style.NavLinkInside}
              >
                <span>{item.label}</span>
                <span className={style.CountBadge}>{count}</span>
              </LinkButton>
            </Fragment>
          );
        })}
      </div>
    </nav>
  );
};
