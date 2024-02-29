"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import style from "./LinkButton.module.css";
import { useRef } from "react";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { useScaleParallax } from "../utils/useScaleParallax";
import Link from "next/link";
import { jCN } from "../utils/joinClassNames";

const MotionLink = motion(Link);

export type LinkButtonProps = React.ComponentProps<typeof MotionLink> & {
  insideClassName?: string;
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  insideClassName,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const clickScale = useMotionValue(1);

  const {
    magneticTranslateX,
    magneticTranslateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
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
    offsetLevel: 0.3,
    duration,
  });

  return (
    <MotionLink
      className={jCN([className, style.LinkButton])}
      ref={elementRef}
      onHoverStart={(mouseEvent) => {
        if (!elementRef.current) return;
        startMagneticParallax({ mouseEvent, element: elementRef.current });
        startScaleParallax({ mouseEvent, element: elementRef.current });
        animate(clickScale, clickScaleLevel, { duration });
      }}
      onHoverEnd={(mouseEvent) => {
        if (!elementRef.current) return;
        endMagneticParallax({ mouseEvent, element: elementRef.current });
        endScaleParallax({ mouseEvent, element: elementRef.current });
        animate(clickScale, 1, { duration });
      }}
      onMouseMove={(mouseEvent) => {
        if (!elementRef.current) return;
        updateMagneticParallax({ mouseEvent, element: elementRef.current });
        updateScaleParallax({ mouseEvent, element: elementRef.current });
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
        className={jCN([insideClassName])}
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
