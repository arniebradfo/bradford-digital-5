"use client";
import { motion } from "framer-motion";
import style from "./LinkButton.module.css";
import { useRef } from "react";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { useGrowParallax } from "../utils/useGrowParallax";
import Link from "next/link";
import { jCN } from "../utils/joinClassNames";
import { useClickScale } from "../utils/useClickScale";

const MotionLink = motion(Link);

export type LinkButtonProps = React.ComponentProps<typeof MotionLink> & {
  offsetPx?: number;
  duration?: number;
  classNameBg?: string;
  classNameInside?: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  offsetPx = 24,
  duration = 0.15,
  classNameInside,
  classNameBg,
  ...props
}) => {
  const elementRef = useRef<HTMLElement>(null);

  const {
    translateX: magneticTranslateX,
    translateY: magneticTranslateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetPx: offsetPx / 2,
    duration,
  });

  const {
    translateX: growTranslateX,
    translateY: growTranslateY,
    transformOrigin: growTransformOrigin,
    scale: growScale,
    opacity: growOpacity,
    startGrowParallax,
    updateGrowParallax,
    endGrowParallax,
  } = useGrowParallax({
    elementRef,
    offsetPx,
    duration,
  });

  const {
    scale: clickScale,
    startClickScale,
    endClickScale,
    onPointerDown: clickScalePointerDown,
    onPointerUp: clickScalePointerUp,
  } = useClickScale({
    elementRef,
    scalePx: 8,
    duration,
    clickDuration,
  });

  return (
    <MotionLink
      className={jCN([className, style.LinkButton])}
      ref={elementRef}
      onHoverStart={(mouseEvent) => {
        startMagneticParallax({ mouseEvent });
        startGrowParallax({ mouseEvent });
        startClickScale();
      }}
      onHoverEnd={(mouseEvent) => {
        endMagneticParallax({ mouseEvent });
        endGrowParallax({ mouseEvent });
        endClickScale();
      }}
      onMouseMove={(mouseEvent) => {
        updateMagneticParallax({ mouseEvent });
        updateGrowParallax({ mouseEvent });
      }}
      onPointerDown={() => {
        clickScalePointerDown();
      }}
      onPointerUp={() => {
        clickScalePointerUp();
      }}
      {...props}
    >
      <motion.div
        className={jCN([classNameBg, style.LinkButtonBg])}
        style={{
          x: growTranslateX,
          y: growTranslateY,
          transformOrigin: growTransformOrigin,
          scale: growScale,
          opacity: growOpacity,
        }}
      />
      <motion.div
        className={jCN([classNameInside])}
        style={{
          x: magneticTranslateX,
          y: magneticTranslateY,
          scale: clickScale,
          transformOrigin: "50% 50%",
        }}
      >
        {children}
      </motion.div>
    </MotionLink>
  );
};

const clickDuration = 0.1;
