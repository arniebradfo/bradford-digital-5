"use client";

import { cx } from "../utils/joinClassNames";

import style from "./HeroImage.module.css";

import { useMagneticParallax } from "../utils/useMagneticParallax";
import { CSSProperties, useRef } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
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
    translateY: magneticTranslateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetPx: 8,
    duration,
  });

  const scale0 = useMotionValue(0);
  const scrollTranslateY = useMotionValue(0);
  const translateY = useTransform(() => magneticTranslateY.get()/2 + scrollTranslateY.get());

  const customVar = { "--duration": duration + "s" } as CSSProperties;

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["200px end", "end 200px"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollScale = Math.abs(Math.abs(latest - 0.5) * 2 -1)
    console.log("Page scroll: ", latest-0.5);
    scale0.set(scrollScale*3)
    scrollTranslateY.set((latest-0.5)*15*scrollScale)
  });

  // ANIMATE from page scroll translate x to mouse translate x

  return (
    <motion.div
      className={cx(className, style.ImageLayers)}
      ref={elementRef}
      onHoverStart={() => {
        startMagneticParallax();
        // animate(scale0, 1, { duration, ease: "easeInOut" });
      }}
      onHoverEnd={() => {
        endMagneticParallax();
        // animate(scale0, 0, { duration, ease: "easeInOut" });
      }}
      onMouseMove={() => {
        updateMagneticParallax();
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
            className={cx(layerClassName, style.ImageLayer)}
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
