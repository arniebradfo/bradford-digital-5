import { LinkButton } from "./LinkButton";
import { jCN } from "../utils/joinClassNames";
import Image from "next/image";

import styleButton from "./LinkButton.module.css";
import stylePage from "./page.module.css";

import Layer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import Layer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import Layer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import Layer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";

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
      <div className={jCN([stylePage.ButtonRow, stylePage.ImageLayers])} >
        <Image src={Layer4} className={stylePage.ImageBase} alt="a test image" />
        {[Layer1, Layer2, Layer3].map((layer, i) => (
          <Image key={i} src={layer} alt="a test image" className={stylePage.ImageLayer} />
        ))}
      </div>
    </div>
  );
}
