import Link from "next/link";
import { Spacer } from "../components/Spacer";
import { cx } from "../utils/joinClassNames";
import { externalLinkAttributes } from "../utils/link";
import style from "./NavLinks.module.css";
import { LinkButton } from "../components/LinkButton";
import { Txt } from "../components/Text";
import { Fragment } from "react";
// import Resume from "../../public/lfs-media/Resume/Resume-James-Bradford-UX-Engineer.pdf";

export const NavLinks: React.FC<React.ComponentProps<"div">> = ({
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
  {
    children: "LinkedIn",
    href: "https://www.linkedin.com/in/arniebradfo/",
    ...externalLinkAttributes,
  },
  {
    children: "GitHub",
    href: "https://github.com/arniebradfo",
    ...externalLinkAttributes,
  },
  {
    children: "Figma",
    href: "https://www.figma.com/@arniebradfo",
    ...externalLinkAttributes,
  },
  {
    children: "Resume",
    href: "/lfs-media/Resume/Resume-James-Bradford-UX-Engineer.pdf",
    ...externalLinkAttributes,
  },
  {
    children: "FUN!",
    href: "/components",
  },
];
