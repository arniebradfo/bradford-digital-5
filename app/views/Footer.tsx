import Link from "next/link";
import { Spacer } from "../components/Spacer";
import { Txt } from "../components/Text";
import { jCN } from "../utils/joinClassNames";
import style from "./Footer.module.css";
import styleSection from "./Section.module.css";
import { externalLinkAttributes } from "../utils/link";

export const Footer: React.FC<React.ComponentProps<"footer">> = ({
  className,
  ...props
}) => (
  <footer
    className={jCN([className, style.Layout, styleSection.SectionWrapper])}
    {...props}
  >
    <div className={jCN([styleSection.Section, style.FooterSection])}>
      <Txt>
        <Txt>Copyright {new Date().getFullYear()}</Txt>
        <Spacer>-</Spacer>
        <Txt fg={1}>James Bradford</Txt>
      </Txt>
      <Spacer>/</Spacer>
      <Txt>
        <Link href={"https://github.com/arniebradfo/bradford-digital-5"} {...externalLinkAttributes}>
          Coded with ♥
        </Link>
        {" using "}
        <Link href={"https://react.dev/"} {...externalLinkAttributes}>
          React
        </Link>
        {" & "}
        <Link href={"https://nextjs.org/"} {...externalLinkAttributes}>
          Next.js
        </Link>
      </Txt>
      <Spacer>/</Spacer>
      <Txt>
        Deployed on{" "}
        <Link href={"https://vercel.com/solutions/nextjs"} {...externalLinkAttributes}>
          Vercel
        </Link>
      </Txt>
    </div>
  </footer>
);
