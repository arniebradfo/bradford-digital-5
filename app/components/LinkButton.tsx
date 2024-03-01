"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import style from "./LinkButton.module.css";
import { useRef } from "react";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { useGrowParallax } from "../utils/useGrowParallax";
import Link from "next/link";
import { jCN } from "../utils/joinClassNames";
import { useClickScale } from "../utils/useClickScale";

const MotionLink = motion(Link);

export type LinkButtonProps = React.ComponentProps<typeof MotionLink> & {
  classNameInside?: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  classNameInside,
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
    offsetLevel: 0.15,
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
    offsetLevel: 0.3,
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
        className={style.LinkButtonBg}
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

const duration = 0.15;
const clickDuration = 0.1;
// const clickScaleLevel = 1.1;
// const scalePx = 20;
