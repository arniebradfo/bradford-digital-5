"use client";

import { cx } from "../utils/joinClassNames";

import style from "./HeroImage.module.css";

import { useMagneticParallax } from "../utils/useMagneticParallax";
import { CSSProperties, useCallback, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { HeroImageLayer, HeroImageLayerProps } from "./HeroImageLayer";
import { useRouter } from "next/navigation";
import { globalMouse } from "../utils/globalMouse";

export type HeroImageProps = React.ComponentProps<typeof HeroImage>;

export const HeroImage: React.FC<
  React.ComponentProps<typeof motion.div> & {
    imageLayers: Omit<HeroImageLayerProps, "motionValues">[];
    isScrollParallax?: boolean;
    href?: string; // LinkProps["href"];
    external?: boolean;
  }
> = ({
  className,
  imageLayers,
  isScrollParallax,
  href,
  external,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
    offset: ["start end", "end start"],
  });

  const [isActive, setIsActive] = useState(false);

  const startActive = useCallback(() => {
    // if (isActive) return;
    setIsActive(true);
    startMagneticParallax();
    animate(scaleMagnetic, 1, { duration, ease: "easeInOut" });
  }, [scaleMagnetic, startMagneticParallax]);

  const endActive = useCallback(() => {
    // if (!isActive) return;
    setIsActive(false);
    endMagneticParallax();
    animate(scaleMagnetic, 0, { duration, ease: "easeInOut" });
  }, [endMagneticParallax, scaleMagnetic]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const {
      bottom = 0,
      top = 0,
      left = 0,
      right = 0,
    } = elementRef.current?.getBoundingClientRect() || {};

    const { x, y } = globalMouse;

    if (y > top && y < bottom && x > left && x < right) {
      console.log("hover");
      if (!isActive) {
        startActive();
      }
    } else if (isActive) {
      endActive();
    }
  });

  const customVar = { "--duration": duration + "s" } as CSSProperties;

  return (
    <motion.div
      className={cx(
        className,
        style.ImageLayers,
        href && style.ImageLink // hover cursor if href
      )}
      ref={elementRef}
      onClick={() => {
        if (!href) return;
        if (external) window.open(href);
        else router.push(href);
      }}
      onHoverStart={startActive}
      onHoverEnd={endActive}
      onMouseMove={updateMagneticParallax}
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
