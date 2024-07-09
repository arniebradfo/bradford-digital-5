import Link from "next/link";
import { externalLinkAttributes as external } from "../utils/link";
import { Txt } from "../components/Text";
import { Spacer } from "../components/Spacer";
import { cx } from "../utils/joinClassNames";
import { NavLinks } from "./NavLinks";
import { Logo } from "./Logo";
import style from "./Header.module.css";

export const Header: React.FC<React.ComponentProps<"header">> = ({
  className,
  ...props
}) => (
  <header className={cx(style.HeaderWrapper, className)} {...props}>
    <div className={cx(style.HeaderLayout)}>
      <Txt tag="h1" fg={1} uppercase bold className={style.HeaderText}>
        {/* Link Button? */}
        <Link href={"/"}>
          <Logo
            style={{
              height: 16 * 2,
              width: 16 * 2,
              marginLeft: -8,
            }}
          />
          <span>
            <Txt>James Bradford</Txt>
            <Spacer normal>/</Spacer>
            <Txt fg={3}>UX Engineer</Txt>
          </span>
        </Link>
      </Txt>

      <NavLinks className={style.HeaderNav} />
    </div>
  </header>
);
