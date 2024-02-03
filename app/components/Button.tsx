"use client";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import style from "./Button.module.css";
import { useRef } from "react";
import { mouseOffset } from "./mouseOffset";
import { useMagneticParallax } from "./useMagneticParallax";
import { useScaleParallax } from "./useScaleParallax";

export const Button: React.FC<React.ComponentProps<"div">> = ({
  children,
  // ...props
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
    <motion.div
      className={style.Button}
      ref={elementRef}
      onHoverStart={(mouseEvent) => {
        if (!elementRef.current) return null;
        startMagneticParallax({ mouseEvent, element: elementRef.current });
        startScaleParallax({ mouseEvent, element: elementRef.current });
        animate(clickScale, clickScaleLevel, { duration });
      }}
      onHoverEnd={(mouseEvent) => {
        if (!elementRef.current) return null;
        endMagneticParallax({ mouseEvent, element: elementRef.current });
        endScaleParallax({ mouseEvent, element: elementRef.current });
        animate(clickScale, 1, { duration });
      }}
      onMouseMove={(mouseEvent) => {
        if (!elementRef.current) return null;
        updateMagneticParallax({ mouseEvent, element: elementRef.current });
        updateScaleParallax({ mouseEvent, element: elementRef.current });
      }}
      onPointerDown={() => animate(clickScale, 1, { duration: clickDuration })}
      onPointerUp={() =>
        animate(clickScale, clickScaleLevel, {
          duration: clickDuration,
        })
      }
      // {...props}
    >
      <motion.div
        className={style.ButtonBg}
        style={{
          x: scaleTranslateX,
          y: scaleTranslateY,
          transformOrigin,
          scale,
          opacity,
        }}
      />
      <motion.div
        style={{
          x: magneticTranslateX,
          y: magneticTranslateY,
          scale: clickScale,
          transformOrigin: "50% 50%",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

const duration = 0.15;
const clickDuration = 0.1;
const clickScaleLevel = 1.1;
