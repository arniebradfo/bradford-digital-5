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

import IrrigationVizLayer1 from "../../public/lfs-media/Hero/IrrigationVizHero-01-Map.png";
import IrrigationVizLayer2 from "../../public/lfs-media/Hero/IrrigationVizHero-02-LeftPanel.png";
import IrrigationVizLayer3 from "../../public/lfs-media/Hero/IrrigationVizHero-03-NavMapMetrics.png";

import AvyMapLayer1 from "../../public/lfs-media/Hero/AvyMapHero-01-Map.png";
import AvyMapLayer2 from "../../public/lfs-media/Hero/AvyMapHero-02-Controls.png";
import AvyMapLayer3 from "../../public/lfs-media/Hero/AvyMapHero-03-Button.png";

import ImgRedEye from "../../public/lfs-media/Project-Icons/Project-Icon-RedEye.svg";
import ImgHydropowerELibrary from "../../public/lfs-media/Project-Icons/Project-Icon-Hydropower-eLibrary.svg";
import ImgIrrigationViz from "../../public/lfs-media/Project-Icons/Project-Icon-IrrigationViz.svg";
import ImgAvyMap from "../../public/lfs-media/Project-Icons/Project-Icon-AvyMap.svg";

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
  <div className={cx(className, style.SectionWrapper, style.SectionInteractive)} {...props}>
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
      alt: "RedEye Logo",
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
    href: "/RedEye",
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
      alt: "Hydropower eLibrary Favicon",
    },
    links: [
      {
        href: "https://hydropowerelibrary.pnnl.gov",
        children: "Live Site",
        type: "outline",
        external: true,
      },
    ],
  },
  heroImageProps: {
    href: "https://hydropowerelibrary.pnnl.gov",
    external: true,
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

const irrigationViz: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    label: "PNNL / WPTO",
    header: "IrrigationViz",
    description: "Visualize and compare upgrades to an irrigation district",
    imageProps: {
      src: ImgIrrigationViz,
      alt: "IrrigationViz Logo",
    },
    links: [
      {
        href: "https://irrigationviz.pnnl.gov/",
        children: "Live Site",
        type: "outline",
        external: true,
      },
    ],
  },
  heroImageProps: {
    href: "https://irrigationviz.pnnl.gov/",
    external: true,

    imageLayers: [
      {
        src: IrrigationVizLayer1,
        alt: "",
        style: { backgroundColor: "#F6F6F4" },
      },
      {
        src: IrrigationVizLayer2,
        alt: "",
      },
      {
        src: IrrigationVizLayer3,
        alt: "",
      },
    ],
  },
};

const avyMap: ProjectFeatureSectionProps = {
  sectionDescriptionProps: {
    label: "Personal Project",
    header: "AvyMap",
    description: "Visualize avalanche danger of any slope",
    imageProps: {
      src: ImgAvyMap,
      alt: "AvyMap Icon",
    },
    links: [
      {
        href: "https://www.avymap.com/#15.09/48.80559/-121.77503",
        children: "Live Prototype",
        type: "outline",
        external: true,
      },
    ],
  },
  heroImageProps: {
    href: "https://www.avymap.com/#15.09/48.80559/-121.77503",
    external: true,
    imageLayers: [
      {
        src: AvyMapLayer1,
        alt: "",
        style: { backgroundColor: "#F0F8FA" },
      },
      {
        src: AvyMapLayer2,
        alt: "",
      },
      {
        src: AvyMapLayer3,
        alt: "",
      },
    ],
  },
};

export const sections = {
  redeye,
  hydropowerELibrary,
  irrigationViz,
  avyMap,
};
