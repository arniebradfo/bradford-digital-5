import Link from "next/link";
import style from "./TagNav.module.css";
import { cx } from "../utils/joinClassNames";
import { getAllProjects, getProjectsByTag, TagKey } from "../data/projects";

interface TagNavProps {
  activeTag?: string;
  className?: string;
}

const TAG_NAV_ITEMS: { label: string; href: string; tagKey?: TagKey | "all" }[] = [
  { label: "All Work", href: "/work", tagKey: "all" },
  { label: "PNNL", href: "/PNNL", tagKey: "PNNL" },
  { label: "ASI", href: "/ASI", tagKey: "ASI" },
  { label: "Bestway", href: "/Bestway", tagKey: "Bestway" },
  { label: "College", href: "/College", tagKey: "College" },
  { label: "Freelance", href: "/Freelance", tagKey: "Freelance" },
  { label: "Side Projects", href: "/SideProject", tagKey: "SideProject" },
  { label: "Featured", href: "/featured", tagKey: "featured" },
  { label: "Archives", href: "/archives", tagKey: "archives" },
];

export const TagNav: React.FC<TagNavProps> = ({ activeTag = "all", className }) => {
  const normalizedActive = activeTag.toLowerCase();

  return (
    <nav className={cx(style.NavWrapper, className)} aria-label="Work Categories">
      <div className={style.NavScroll}>
        {TAG_NAV_ITEMS.map((item) => {
          const isActive =
            (item.tagKey === "all" && normalizedActive === "all") ||
            (item.tagKey && item.tagKey.toLowerCase() === normalizedActive);

          const count =
            item.tagKey === "all"
              ? getAllProjects().length
              : getProjectsByTag(item.tagKey || "").length;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cx(style.TagPill, isActive && style.Active)}
            >
              <span>{item.label}</span>
              <span className={style.CountBadge}>{count}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
