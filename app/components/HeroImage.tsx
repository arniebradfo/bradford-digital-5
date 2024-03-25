"use client";

import { jCN } from "../utils/joinClassNames";
import Image from "next/image";

import style from "./HeroImage.module.css";
import Layer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import Layer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import Layer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import Layer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { CSSProperties, useRef } from "react";
import {
  KeyframeOptions,
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useMagneticParallaxLayers } from "../utils/useMagneticParallaxLayers";

export const HeroImage: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    translateX,
    translateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetPx: 8,
    duration,
  });

  const scale0 = useMotionValue(0);
  const scale = useTransform(() => 1 + scale0.get() * scaleMore);
  const transform = useMotionTemplate`scale(${scale})`;

  const motionValues = {
    translateX,
    translateY,
    scale0,
  };

  const t1 = useMagneticParallaxLayers({
    ...motionValues,
    scaleMore: scaleUp + scaleMore * 1,
    translateMore: translateMore * 1,
  });
  const t2 = useMagneticParallaxLayers({
    ...motionValues,
    scaleMore: scaleUp + scaleMore * 2,
    translateMore: translateMore * 2,
  });
  const t3 = useMagneticParallaxLayers({
    ...motionValues,
    scaleMore: scaleUp + scaleMore * 3,
    translateMore: translateMore * 3,
  });
  const t4 = useMagneticParallaxLayers({
    ...motionValues,
    scaleMore: scaleUp + scaleMore * 4,
    translateMore: translateMore * 4,
  });

  const transforms = [t1, t2, t3, t4];

  const customVar = { "--duration": duration + "s" } as CSSProperties;

  return (
    <motion.div
      className={style.ImageLayers}
      ref={elementRef}
      onHoverStart={(mouseEvent) => {
        startMagneticParallax({ mouseEvent });
        animate(scale0, 1, { duration, ease: "easeInOut" });
      }}
      onHoverEnd={(mouseEvent) => {
        endMagneticParallax({ mouseEvent });
        animate(scale0, 0, { duration, ease: "easeInOut" });
      }}
      onMouseMove={(mouseEvent) => {
        updateMagneticParallax({ mouseEvent });
      }}
      style={customVar}
    >
      <motion.div
        className={jCN([style.ImageLayer, style.ImageBackground])}
        style={{
          backgroundColor: "#121212",
          transform: t1,
        }}
      />
      <MotionImage
        src={Layer4}
        className={style.ImageLayer}
        alt="a test image"
        style={{
          position: "relative",
          transform: t1,
        }}
      />
      {[Layer3, Layer2, Layer1].map((layer, i) => (
        <MotionImage
          key={i}
          src={layer}
          alt="a test image"
          className={style.ImageLayer}
          style={{
            transform: transforms[i + 1],
          }}
        />
      ))}
    </motion.div>
  );
};

const MotionImage = motion(Image);

const scaleUp = 0.015;
const scaleMore = 0.005;
const translateMore = 2;
const duration = 0.15;
const ease: KeyframeOptions["ease"] = "easeInOut";
