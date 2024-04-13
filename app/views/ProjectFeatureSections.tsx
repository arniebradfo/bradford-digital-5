import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

import RedEyeLayer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import RedEyeLayer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import RedEyeLayer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import RedEyeLayer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";

import ImgRedEye from "../../public/lfs-media/Project-Icons/Project-Icon-RedEye.svg";

import { HeroImage, HeroImageProps } from "../components/HeroImage";
import {
  SectionDescription,
  SectionDescriptionProps,
} from "./SectionDescription";
import React from "react";

export const ProjectFeatureSection: React.FC<
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

export type ProjectFeatureSectionProps = React.ComponentProps<
  typeof ProjectFeatureSection
>;

const redeye: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    label: "PNNL / CISA RedTeam",
    header: "RedEye",
    description:
      "Red Team C2 Log Visualization tool to  display complex data, evaluate mitigation strategies, and enable effective decision making in response to a Red Team assessment.",
    imageProps: {
      src: ImgRedEye,
      alt: "RedEye Logo"
    },
    links: [
      {
        href: "/RedEye",
        children: "Case Study",
        type: "emphasis",
      },
      {
        href: "https://github.com/cisagov/RedEye",
        children: "GitHub",
        type: "outline",
        external: true,
      },
    ],
  },
  heroImageProps: {
    imageLayers: [
      {
        src: RedEyeLayer4,
        alt: "RedEye screenshot background layer with grid",
        style: { backgroundColor: "#121212" },
      },
      {
        src: RedEyeLayer3,
        alt: "RedEye screenshot mid layer with node-graph of computer network",
      },
      {
        src: RedEyeLayer2,
        alt: "RedEye screenshot mid layer with log line information panel",
      },
      {
        src: RedEyeLayer1,
        alt: "RedEye screenshot top layer with timeline and menu bar",
      },
    ],
  },
};

export const sections = {
  redeye,
};
