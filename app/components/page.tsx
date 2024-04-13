import { LinkButton } from "./LinkButton";
import { cx } from "../utils/joinClassNames";

import styleButton from "./LinkButton.module.css";
import stylePage from "./page.module.css";

export default function Page() {
  return (
    <div className={stylePage.Layout}>
      <div className={stylePage.ButtonRow}>
        <LinkButton type="emphasis" href={"#"}>
          Primary
        </LinkButton>
        <LinkButton type="outline" href={"#"}>
          Secondary
        </LinkButton>
        <LinkButton type="outline" href={"#"}>
          Outline
        </LinkButton>
        <LinkButton type="minimal" href={"/"}>
          Normal - Home
        </LinkButton>
      </div>
    </div>
  );
}
