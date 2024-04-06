import { LinkButton } from "./LinkButton";
import { cx } from "../utils/joinClassNames";

import styleButton from "./LinkButton.module.css";
import stylePage from "./page.module.css";

export default function Page() {
  return (
    <div className={stylePage.Layout}>
      <div className={stylePage.ButtonRow}>
        <LinkButton
          className={cx(
            stylePage.LinkButtonTestInside,
            styleButton.LinkButtonEmphasis
          )}
          href={"#"}
        >
          Primary
        </LinkButton>
        <LinkButton
          className={cx(
            stylePage.LinkButtonTestInside,
            styleButton.LinkButtonOutline
          )}
          href={"#"}
        >
          Secondary
        </LinkButton>
        <LinkButton
          className={cx(
            stylePage.LinkButtonTestInside,
            styleButton.LinkButtonOutline
          )}
          href={"#"}
        >
          Outline
        </LinkButton>
        <LinkButton className={cx(stylePage.LinkButtonTestInside)} href={"/"}>
          Normal - Home
        </LinkButton>
      </div>
    </div>
  );
}
