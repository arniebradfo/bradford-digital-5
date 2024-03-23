import { LinkButton } from "./LinkButton";
import styleButton from "./LinkButton.module.css";
import stylePage from "./page.module.css";
import { jCN } from "../utils/joinClassNames";
import TestImage from "../../public/lfs-media/AvyMap/AvyMap_Screenshot-Desktop.png";
import Image from "next/image";

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
          Parallax
        </LinkButton>
        <LinkButton
          className={jCN([
            stylePage.LinkButtonTestInside,
            styleButton.LinkButtonOutline,
          ])}
          href={"#"}
        >
          Parallax Parallax
        </LinkButton>
        <LinkButton
          className={jCN([
            stylePage.LinkButtonTestInside,
            styleButton.LinkButtonOutline,
          ])}
          href={"#"}
        >
          Parallax
        </LinkButton>
        <LinkButton
          className={jCN([stylePage.LinkButtonTestInside])}
          href={"/"}
        >
          Home
        </LinkButton>
      </div>
      <div className={stylePage.ButtonRow}>
        <Image src={TestImage} alt="a test image" />
      </div>
    </div>
  );
}
