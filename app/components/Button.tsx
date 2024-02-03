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

export const Button: React.FC<
  React.ComponentProps<"div"> & {
    duration?: number;
    scaleOffsetLevel?: number;
    magneticOffsetLevel?: number;
  }
> = ({
  children,
  duration = 0.15,
  scaleOffsetLevel = 0.3,
  magneticOffsetLevel = 0.15,
  // ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const scaleTranslateX = useTransform(() => mouseX.get() * scaleOffsetLevel);
  const scaleTranslateY = useTransform(() => mouseY.get() * scaleOffsetLevel);

  const scale = useMotionValue(0);
  const opacity = useMotionValue(0);

  const transformOriginX = useMotionValue(0);
  const transformOriginY = useMotionValue(0);

  const transformOrigin = useMotionTemplate`${transformOriginX}px ${transformOriginY}px`;

  const magneticOffset = useMotionValue(0);
  const clickScale = useMotionValue(1);

  const magneticTranslateX = useTransform(
    () => mouseX.get() * magneticOffset.get()
  );
  const magneticTranslateY = useTransform(
    () => mouseY.get() * magneticOffset.get()
  );

  return (
    <motion.div
      className={style.Button}
      ref={elementRef}
      onHoverStart={(mouseEvent) => {
        if (!elementRef.current) return null;

        animate(magneticOffset, magneticOffsetLevel, { duration });
        animate(clickScale, clickScaleLevel, { duration });

        const {
          topLeftOffsetX, //
          topLeftOffsetY,
          centerOffsetX,
          centerOffsetY,
        } = mouseOffset(mouseEvent, elementRef.current);

        transformOriginX.set(topLeftOffsetX);
        transformOriginY.set(topLeftOffsetY);
        mouseX.set(centerOffsetX);
        mouseY.set(centerOffsetY);

        animate(scale, 1, { duration });
        animate(opacity, 1, { duration: opacityDuration });
      }}
      onHoverEnd={(mouseEvent) => {
        if (!elementRef.current) return null;

        const {
          topLeftOffsetX, //
          topLeftOffsetY,
        } = mouseOffset(mouseEvent, elementRef.current);

        // TODO: if this value is wayyy outside the button, set to center
        transformOriginX.set(topLeftOffsetX);
        transformOriginY.set(topLeftOffsetY);

        animate(magneticOffset, 0, { duration });
        animate(mouseX, 0, { duration });
        animate(mouseY, 0, { duration });
        animate(scale, 0, { duration });
        animate(opacity, 0, {
          duration: opacityDuration,
          delay: duration - opacityDuration,
        });
        animate(clickScale, 1, { duration });
      }}
      onMouseMove={(mouseEvent) => {
        if (!elementRef.current) return null;

        const {
          topLeftOffsetX, //
          topLeftOffsetY,
          centerOffsetX,
          centerOffsetY,
        } = mouseOffset(mouseEvent, elementRef.current);

        transformOriginX.set(topLeftOffsetX);
        transformOriginY.set(topLeftOffsetY);
        mouseX.set(centerOffsetX);
        mouseY.set(centerOffsetY);
      }}
      onPointerDown={() =>
        animate(clickScale, 1, { duration: clickDuration })
      }
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
      ></motion.div>
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

const opacityDuration = 0.05;
const clickDuration = 0.1;
const clickScaleLevel = 1.1;
