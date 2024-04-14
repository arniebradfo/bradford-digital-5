import { cx } from "../utils/joinClassNames";
import style from "./Section.module.css";

import RedEyeLayer1 from "../../public/lfs-media/Hero/RedEyeHero-01-BackgroundGrid.png";
import RedEyeLayer2 from "../../public/lfs-media/Hero/RedEyeHero-02-Graph.png";
import RedEyeLayer3 from "../../public/lfs-media/Hero/RedEyeHero-03-InfoPanel.png";
import RedEyeLayer4 from "../../public/lfs-media/Hero/RedEyeHero-04-NavBar.png";

import HydroELibLayer1 from "../../public/lfs-media/Hero/HydroELibraryHero-01-Background.png";
import HydroELibLayer2 from "../../public/lfs-media/Hero/HydroELibraryHero-02-Filter.png";
import HydroELibLayer3 from "../../public/lfs-media/Hero/HydroELibraryHero-03-Navigation.png";
import HydroELibLayer4 from "../../public/lfs-media/Hero/HydroELibraryHero-04-DampMap.png";

import ImgRedEye from "../../public/lfs-media/Project-Icons/Project-Icon-RedEye.svg";
import ImgHydropowerELibrary from "../../public/lfs-media/Project-Icons/Project-Icon-Hydropower-eLibrary.svg";

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
        src: RedEyeLayer1,
        alt: "RedEye screenshot background layer with grid",
        style: { backgroundColor: "#121212" },
      },
      {
        src: RedEyeLayer2,
        alt: "RedEye screenshot mid layer with node-graph of computer network",
      },
      {
        src: RedEyeLayer3,
        alt: "RedEye screenshot mid layer with log line information panel",
      },
      {
        src: RedEyeLayer4,
        alt: "RedEye screenshot top layer with timeline and menu bar",
      },
    ],
  },
};

const hydropowerELibrary: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    label: "PNNL / WPTO",
    header: "Hydropower eLibrary",
    description: "A repository of FERC licensed hydropower projects",
    imageProps: {
      src: ImgHydropowerELibrary,
      alt: "Hydropower eLibrary Favicon"
    },
    links: [
      {
        href: "/Hydropower-eLibrary",
        children: "Case Study",
        type: "emphasis",
      },
      {
        href: "https://hydropowerelibrary.pnnl.gov",
        children: "Live Site",
        type: "outline",
        external: true,
      },
    ],
  },
  heroImageProps: {
    imageLayers: [
      {
        src: HydroELibLayer1,
        alt: "",
        style: { backgroundColor: "#FFFFFF" },
      },
      {
        src: HydroELibLayer2,
        alt: "",
      },
      {
        src: HydroELibLayer3,
        alt: "",
      },
      {
        src: HydroELibLayer4,
        alt: "",
      },
    ],
  },
};

export const sections = {
  redeye,
  hydropowerELibrary
};
