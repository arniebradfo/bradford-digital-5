import Link from "next/link";
import { Spacer } from "../components/Spacer";
import { jCN } from "../utils/joinClassNames";
import { externalLinkAttributes } from "../utils/link";
import style from "./NavLinks.module.css";
import { LinkButton } from "../components/LinkButton";
import { Txt } from "../components/Text";

export const NavLinks: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <nav className={jCN([style.NavLayout, className])} {...props}>
    {[
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
        href: "#",
      },
      {
        children: "FUN!",
        href: "/components",
      },
    ].map((linkProps, i) => (
      <>
        {i > 0 && <Txt fg={4} className={style.NavSpacer}>/</Txt>}
        <LinkButton {...linkProps} />
      </>
    ))}
  </nav>
);
