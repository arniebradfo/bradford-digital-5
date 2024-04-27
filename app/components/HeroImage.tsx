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
    isScrollParallax?: boolean;
  }
> = ({ className, imageLayers, isScrollParallax, ...props }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    translateX,
    translateY: translateYMagnetic,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetPx: 8,
    duration,
    isScrollUpdated: true,
  });

  const scrollTranslateY = useMotionValue(0);
  const translateYCombined = useTransform(
    () => translateYMagnetic.get() + scrollTranslateY.get()
  );

  const scaleScroll = useMotionValue(0);
  const scaleMagnetic = useMotionValue(0);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["40% end", "40% start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isScrollParallax) return; // skip computation if unused
    
    const _scaleScroll0 = Math.abs(Math.abs(latest - 0.5) * 2 - 1);
    const _translateYScroll0 = (latest - 0.5) * _scaleScroll0;
    const _scaleScroll = _scaleScroll0 * 3;
    const _translateYScroll = _translateYScroll0 * 15;
    // console.log("Page scroll: ", latest - 0.5);
    if (scaleScroll.get() === 0) {
      animate(scaleScroll, _scaleScroll, { duration, ease: "easeInOut" });
      animate(scrollTranslateY, _translateYScroll, {
        duration,
        ease: "easeInOut",
      });
    } else {
      scaleScroll.set(_scaleScroll);
      scrollTranslateY.set(_translateYScroll);
    }
  });

  const customVar = { "--duration": duration + "s" } as CSSProperties;

  return (
    <motion.div
      className={cx(className, style.ImageLayers)}
      ref={elementRef}
      onHoverStart={() => {
        startMagneticParallax();
        animate(scaleMagnetic, 1, { duration, ease: "easeInOut" });
      }}
      onHoverEnd={() => {
        endMagneticParallax();
        animate(scaleMagnetic, 0, { duration, ease: "easeInOut" });
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
              translateY: isScrollParallax
                ? translateYCombined
                : translateYMagnetic,
              scale0: isScrollParallax ? scaleScroll : scaleMagnetic,
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
