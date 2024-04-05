"use client";

import { jCN } from "../utils/joinClassNames";

import style from "./HeroImage.module.css";

import { useMagneticParallax } from "../utils/useMagneticParallax";
import { CSSProperties, useRef } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { HeroImageLayer, HeroImageLayerProps } from "./HeroImageLayer";

export type HeroImageProps = React.ComponentProps<typeof HeroImage>;

export const HeroImage: React.FC<
  React.ComponentProps<typeof motion.div> & {
    imageLayers: Omit<HeroImageLayerProps, "motionValues">[];
  }
> = ({ className, imageLayers, ...props }) => {
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
      {imageLayers.map(
        (
          {
            className: layerClassName,
            style: layerStyle,
            level,
            ...layerProps
          },
          i
        ) => (
          <HeroImageLayer
            key={i}
            className={jCN([layerClassName, style.ImageLayer])}
            motionValues={{
              translateX,
              translateY,
              scale0,
            }}
            level={level || i + 1}
            style={{
              position: i == 0 ? "relative" : undefined, // first layer determines size
              ...layerStyle,
            }}
            {...layerProps}
          />
        )
      )}
    </motion.div>
  );
};

const duration = 0.15;
