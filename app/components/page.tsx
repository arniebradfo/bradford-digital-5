import { LinkButton } from "./LinkButton";
import { jCN } from "../utils/joinClassNames";
import { HeroImage, HeroImageProps } from "./HeroImage";

import styleButton from "./LinkButton.module.css";
import stylePage from "./page.module.css";

import Layer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import Layer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import Layer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import Layer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";

const imageLayers: HeroImageProps["imageLayers"] = [
  { src: Layer4, alt: "RedEye screenshot background layer with grid", style: { backgroundColor: "#121212" } },
  { src: Layer3, alt: "RedEye screenshot mid layer with node-graph of computer network" },
  { src: Layer2, alt: "RedEye screenshot mid layer with log line information panel" },
  { src: Layer1, alt: "RedEye screenshot top layer with timeline and menu bar" },
];

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
      <div className={jCN([stylePage.ButtonRow])}>
        <HeroImage imageLayers={imageLayers} />
      </div>
    </div>
  );
}
