import Link from "next/link";
import { Spacer } from "../components/Spacer";
import { Txt } from "../components/Text";
import { cx } from "../utils/joinClassNames";
import style from "./Footer.module.css";
import styleSection from "../layout/Section.module.css";
import { externalLinkAttributes as external } from "../utils/link";

export const Footer: React.FC<React.ComponentProps<"footer">> = ({
  className,
  ...props
}) => (
  <footer
    className={cx(className, style.Layout, styleSection.SectionWrapper)}
    {...props}
  >
    <Txt tag="p" size={6} className={cx(styleSection.Section, style.FooterSection)}>
      <Txt>
        <Txt>Copyright {new Date().getFullYear()}</Txt>
        <Spacer>-</Spacer>
        <Txt fg={1} bold>James Bradford</Txt>
      </Txt>
      <Spacer>/</Spacer>
      <Txt>
        <Link href={"https://github.com/arniebradfo/bradford-digital-5"} {...external}>
          Coded with ♥
        </Link>
        {" using "}
        <Link href={"https://react.dev/"} {...external}>
          React
        </Link>
        {", "}
        <Link href={"https://www.framer.com/motion/"} {...external}>
          Framer Motion
        </Link>
        {" & "}
        <Link href={"https://nextjs.org/"} {...external}>
          Next.js
        </Link>
      </Txt>
      <Spacer>/</Spacer>
      <Txt>
        Deployed on{" "}
        <Link href={"https://vercel.com/solutions/nextjs"} {...external}>
          Vercel
        </Link>
      </Txt>
    </Txt>
  </footer>
);
