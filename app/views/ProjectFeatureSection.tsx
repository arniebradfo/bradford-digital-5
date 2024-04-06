import { Txt } from "../components/Text";
import { jCN } from "../utils/joinClassNames";
import style from "./Section.module.css";

import Layer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import Layer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import Layer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import Layer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";
import { HeroImage, HeroImageProps } from "../components/HeroImage";
import { LinkButton } from "../components/LinkButton";
import { SectionDescription } from "./SectionDescription";

const imageLayers: HeroImageProps["imageLayers"] = [
  {
    src: Layer4,
    alt: "RedEye screenshot background layer with grid",
    style: { backgroundColor: "#121212" },
  },
  {
    src: Layer3,
    alt: "RedEye screenshot mid layer with node-graph of computer network",
  },
  {
    src: Layer2,
    alt: "RedEye screenshot mid layer with log line information panel",
  },
  {
    src: Layer1,
    alt: "RedEye screenshot top layer with timeline and menu bar",
  },
];

export const ProjectFeatureSection: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={jCN([className, style.Layout])} {...props}>
    {sections.map(({ ...description }) => (
      <div key={description.header} className={style.SectionWrapper}>
        <div className={jCN([style.Section, style.ProjectsSection])}>
          <SectionDescription {...description} />
          <div className={jCN([style.SectionContent])}>
            <HeroImage imageLayers={imageLayers} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const section = {
  redeye: {
    label: "PNNL / CISA RedTeam",
    header: "RedEye",
    description:
      "Red Team C2 Log Visualization tool to  display complex data, evaluate mitigation strategies, and enable effective decision making in response to a Red Team assessment.",
    // link: "#",
  },
};
const sections = Object.values(section);
