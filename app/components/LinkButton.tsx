"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import style from "./LinkButton.module.css";
import { useLayoutEffect, useMemo, useRef } from "react";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { useScaleParallax } from "../utils/useScaleParallax";
import Link from "next/link";
import { jCN } from "../utils/joinClassNames";

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

  const clickScale = useMotionValue(1);

  const {
    magneticTranslateX,
    magneticTranslateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetLevel: 0.15,
    duration,
  });

  const {
    scaleTranslateX,
    scaleTranslateY,
    transformOrigin,
    scale,
    opacity,
    startScaleParallax,
    updateScaleParallax,
    endScaleParallax,
  } = useScaleParallax({
    elementRef,
    offsetLevel: 0.3,
    duration,
  });

  return (
    <MotionLink
      className={jCN([className, style.LinkButton])}
      ref={elementRef}
      onHoverStart={(mouseEvent) => {
        if (!elementRef.current) return;
        startMagneticParallax({ mouseEvent });
        startScaleParallax({ mouseEvent });
        animate(clickScale, clickScaleLevel, { duration });
      }}
      onHoverEnd={(mouseEvent) => {
        if (!elementRef.current) return;
        endMagneticParallax({ mouseEvent });
        endScaleParallax({ mouseEvent });
        animate(clickScale, 1, { duration });
      }}
      onMouseMove={(mouseEvent) => {
        if (!elementRef.current) return;
        updateMagneticParallax({ mouseEvent });
        updateScaleParallax({ mouseEvent });
      }}
      onPointerDown={() => {
        animate(clickScale, 1, { duration: clickDuration });
      }}
      onPointerUp={() => {
        animate(clickScale, clickScaleLevel, { duration: clickDuration });
      }}
      {...props}
    >
      <motion.div
        className={style.LinkButtonBg}
        style={{
          x: scaleTranslateX,
          y: scaleTranslateY,
          transformOrigin,
          scale,
          opacity,
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
const clickScaleLevel = 1.1;
