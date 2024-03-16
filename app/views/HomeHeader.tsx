import Image from "next/image";
import Link from "next/link";
import { externalLinkAttributes } from "../utils/link";
import { Txt } from "../components/Text";
import { Spacer } from "../components/Spacer";
import { jCN } from "../utils/joinClassNames";
import { NavLinks } from "./NavLinks";
import style from "./HomeHeader.module.css";
import styleSection from "./Section.module.css";

export const HomeHeader: React.FC<React.ComponentProps<"header">> = ({
  className,
  ...props
}) => (
  <header
    className={jCN([
      style.HeaderWrapper,
      styleSection.SectionWrapper,
      className,
    ])}
    {...props}
  >
    <div className={jCN([style.HeaderLayout, styleSection.Section])}>
      <Image
        src="/logo/small.svg"
        alt="jb logo"
        width={16 * 3}
        height={16 * 3}
        priority
        style={{ marginBottom: 48 }}
      />

      <Txt tag="h1" size={1} fg={1} uppercase className={style.HeaderText} bold>
        <Txt>James Bradford</Txt>
        <Spacer normal>/</Spacer>
        <wbr/>
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
        <Link
          href={"https://www.pnnl.gov/visual-analytics"}
          {...externalLinkAttributes}
        >
          Human Centered Computing Group
        </Link>{" "}
        at{" "}
        <Link href={"https://www.pnnl.gov/"} {...externalLinkAttributes}>
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
