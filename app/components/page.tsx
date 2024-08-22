import { LinkButton } from "./LinkButton";
import { cx } from "../utils/joinClassNames";

import styleButton from "./LinkButton.module.css";
import stylePage from "./page.module.css";
import { sections } from "../views/ProjectFeatureSections";
import { HeroImage } from "./HeroImage";

export default function Page() {
  return (
    <div className={stylePage.Layout}>
      <div className={stylePage.ButtonRow}>
        <LinkButton type="emphasis" href={"#"}>
          Emphasis
        </LinkButton>
        <LinkButton type="primary" href={"#"}>
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
      Scroll Down
      <div style={{ marginBlock: 1000 }}>
        <HeroImage {...sections.irrigationViz.heroImageProps} isScrollParallax />
      </div>
      <div style={{ marginBlock: 1000 }}>
        <HeroImage {...sections.redeye.heroImageProps} isScrollParallax />
      </div>
      <div style={{ marginBlock: 1000 }}>
        <HeroImage {...sections.hydropowerELibrary.heroImageProps} isScrollParallax />
      </div>
      <div style={{ marginBlock: 1000 }}>
        <HeroImage {...sections.avyMap.heroImageProps} isScrollParallax />
      </div>
    </div>
  );
}
