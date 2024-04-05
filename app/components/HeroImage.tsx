"use client";

import { jCN } from "../utils/joinClassNames";

import style from "./HeroImage.module.css";
import Layer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import Layer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import Layer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import Layer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { CSSProperties, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { HeroImageLayer } from "./HeroImageLayer";

export const HeroImage: React.FC<React.ComponentProps<typeof motion.div>> = ({
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

  const customVar = { "--duration": duration + "s" } as CSSProperties;

  return (
    <motion.div
      className={jCN([className, style.ImageLayers])}
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
      {...props}
    >
      {[Layer4, Layer3, Layer2, Layer1].map((layer, i) => (
        <HeroImageLayer
          key={i}
          src={layer}
          alt="a test image"
          className={jCN([style.ImageLayer])}
          motionValues={{
            translateX,
            translateY,
            scale0,
          }}
          level={i + 1}
          style={{
            backgroundColor: i == 0 ? "#121212" : undefined,
            position: i == 0 ? "relative" : undefined,
          }}
        />
      ))}
    </motion.div>
  );
};

const duration = 0.15;
