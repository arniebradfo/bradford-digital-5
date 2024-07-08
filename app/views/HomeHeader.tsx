import Link from "next/link";
import { externalLinkAttributes as external } from "../utils/link";
import { Txt } from "../components/Text";
import { Spacer } from "../components/Spacer";
import { cx } from "../utils/joinClassNames";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";
import style from "./HomeHeader.module.css";
import styleSection from "./Section.module.css";

export const HomeHeader: React.FC<React.ComponentProps<"header">> = ({
  className,
  ...props
}) => (
  <header
    className={cx(style.HeaderWrapper, styleSection.SectionWrapper, className)}
    {...props}
  >
    <div className={cx(style.HeaderLayout, styleSection.Section)}>
      <Logo
        style={{
          marginBottom: 48,
          height: 16 * 4,
          width: 16 * 4,
          marginInline: -16
        }}
      />

      <Txt tag="h1" size={1} fg={1} uppercase className={style.HeaderText} bold>
        <Txt>James Bradford</Txt>
        <Spacer normal>/</Spacer>
        <wbr />
        <Txt fg={3}>UX Engineer</Txt>
      </Txt>

      <Txt tag="p" fg={2} className={style.HeaderDetails}>
        <Txt bold fg={2}>
          User Research
          <Spacer>/</Spacer>
          UX Design
          <Spacer>/</Spacer>
          UI Development
        </Txt>
        <Spacer>-</Spacer>
        Currently working in the{" "}
        <Link href={"https://www.pnnl.gov/visual-analytics"} {...external}>
          Human Centered Computing Group
        </Link>{" "}
        at{" "}
        <Link href={"https://www.pnnl.gov/"} {...external}>
          Pacific Northwest National Laboratory
        </Link>
        {"'s "}
        Seattle Office making web apps for cybersecurity, geospatial analysis,
        machine learning, and data visualization.
      </Txt>

      <NavLinks className={style.HeaderNav} />
    </div>
  </header>
);
