"use client";

import { jCN } from "../utils/joinClassNames";
import Image from "next/image";

import style from "./HeroImage.module.css";
import { MotionValue, motion } from "framer-motion";
import {
  useMagneticParallaxLayers,
  useMagneticParallaxLayersProps,
} from "../utils/useMagneticParallaxLayers";

export const HeroImageLayer: React.FC<
  React.ComponentProps<typeof MotionImage> & {
    level: number;
    backgroundColor?: string;
    motionValues: useMagneticParallaxLayersProps;
  }
> = ({
  level,
  backgroundColor,
  motionValues,
  className,
  style: motionStyle,
  ...props
}) => {
  const transform = useMagneticParallaxLayers({
    ...motionValues,
    scaleUp,
    scaleMore: scaleMore * level,
    translateMore: translateMore * level,
  });

  return (
    <MotionImage
      className={jCN([className, style.ImageLayer])}
      style={{
        transform,
        backgroundColor,
        ...motionStyle,
      }}
      {...props}
    />
  );
};

const MotionImage = motion(Image);

const scaleUp = 0.015;
const scaleMore = 0.005;
const translateMore = 2;