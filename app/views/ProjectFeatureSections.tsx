import { Txt } from "../components/Text";
import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

import Layer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import Layer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import Layer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import Layer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";
import { HeroImage, HeroImageProps } from "../components/HeroImage";
import { LinkButton } from "../components/LinkButton";
import {
  SectionDescription,
  SectionDescriptionProps,
} from "./SectionDescription";
import React from "react";

const ProjectFeatureSection: React.FC<
  React.ComponentProps<"div"> & {
    sectionDescriptionProps: SectionDescriptionProps;
    heroImageProps: HeroImageProps;
  }
> = ({ className, sectionDescriptionProps, heroImageProps, ...props }) => (
  <div className={cx(className, style.SectionWrapper)} {...props}>
    <div className={cx(style.Section, style.ProjectsSection)}>
      <SectionDescription {...sectionDescriptionProps} />
      <div className={cx(style.SectionContent)}>
        <HeroImage {...heroImageProps} />
      </div>
    </div>
  </div>
);

export const RedEyeFeatureSection: React.FC<React.ComponentProps<"div">> = (props) => (
  <ProjectFeatureSection
    sectionDescriptionProps={section.redeye}
    heroImageProps={{ imageLayers }}
    {...props}
  />
);

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
