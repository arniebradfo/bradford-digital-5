import { cx } from "../utils/joinClassNames";
import style from "./NavLinks.module.css";
import { LinkButton } from "../components/LinkButton";
import { Txt } from "../components/Text";
import { Fragment } from "react";
// import Resume from "../../public/lfs-media/Resume/Resume-James-Bradford-UX-Engineer.pdf";

export const NavLinks: React.FC<React.ComponentProps<"div"> & {}> = ({
  className,
  ...props
}) => (
  <nav className={cx(style.NavLayout, className)} {...props}>
    {links.map((linkProps, i) => (
      <Fragment key={linkProps.children}>
        {i > 0 && (
          <Txt fg={4} className={style.NavSpacer}>
            /
          </Txt>
        )}
        <LinkButton
          offsetPx={16}
          classNameInside={style.NavLinkInside}
          {...linkProps}
        />
      </Fragment>
    ))}
  </nav>
);

const links = [
  // {
  //   children: "Project Work",
  //   href: "/",
  // },
  {
    children: "LinkedIn",
    href: "https://www.linkedin.com/in/arniebradfo/",
    external: true,
  },
  {
    children: "GitHub",
    href: "https://github.com/arniebradfo",
    external: true,
  },
  {
    children: "Figma",
    href: "https://www.figma.com/@arniebradfo",
    external: true,
  },
  {
    children: "Resume",
    href: "/lfs-media/Resume/Resume-James-Bradford-UX-Engineer.pdf",
    external: true,
    prefetch: false,
  },
  // {
  //   children: "FUN!",
  //   href: "/components",
  // },
];
