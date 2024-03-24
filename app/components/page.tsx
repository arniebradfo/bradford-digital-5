import { LinkButton } from "./LinkButton";
import { jCN } from "../utils/joinClassNames";
import { HeroImage } from "./HeroImage";

import styleButton from "./LinkButton.module.css";
import stylePage from "./page.module.css";


export default function Page() {
  return (
    <div className={stylePage.Layout}>
      <div className={stylePage.ButtonRow}>
        <LinkButton
          className={jCN([
            stylePage.LinkButtonTestInside,
            styleButton.LinkButtonEmphasis,
          ])}
          href={"#"}
        >
          Primary
        </LinkButton>
        <LinkButton
          className={jCN([
            stylePage.LinkButtonTestInside,
            styleButton.LinkButtonOutline,
          ])}
          href={"#"}
        >
          Secondary
        </LinkButton>
        <LinkButton
          className={jCN([
            stylePage.LinkButtonTestInside,
            styleButton.LinkButtonOutline,
          ])}
          href={"#"}
        >
          Outline
        </LinkButton>
        <LinkButton
          className={jCN([stylePage.LinkButtonTestInside])}
          href={"/"}
        >
          Normal
        </LinkButton>
      </div>
      <div className={jCN([stylePage.ButtonRow])} >
        <HeroImage/>
      </div>
    </div>
  );
}
