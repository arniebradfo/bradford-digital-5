"use client";
import {
  Easing,
  animate,
  motion,
  useAnimationControls,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import style from "./Button.module.css";
import { useRef, useState } from "react";
import { mouseOffset } from "./mouseOffset";

export const Button3: React.FC<React.ComponentProps<"div">> = ({
  children,
  // ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const scaleTranslateX = useTransform(() => mouseX.get() * scaleOffsetLevel);
  const scaleTranslateY = useTransform(() => mouseY.get() * scaleOffsetLevel);

  const scale = useMotionValue(0);

  const transformOriginX = useMotionValue(0);
  const transformOriginY = useMotionValue(0);

  const transformOrigin = useMotionTemplate`${transformOriginX}px ${transformOriginY}px`;

  const magneticOffset = useMotionValue(0);

  const magneticTranslateX = useTransform(
    () => mouseX.get() * magneticOffset.get()
  );
  const magneticTranslateY = useTransform(
    () => mouseY.get() * magneticOffset.get()
  );

  return (
    <div
      className={style.Button}
      ref={elementRef}
      onMouseEnter={(mouseEvent) => {
        if (!elementRef.current) return null;

        animate(magneticOffset, magneticOffsetLevel, { duration });

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
      }}
      onMouseLeave={(mouseEvent) => {
        if (!elementRef.current) return null;

        const {
          topLeftOffsetX, //
          topLeftOffsetY,
        } = mouseOffset(mouseEvent, elementRef.current);

        transformOriginX.set(topLeftOffsetX);
        transformOriginY.set(topLeftOffsetY);

        animate(magneticOffset, 0, { duration });
        animate(mouseX, 0, { duration });
        animate(mouseY, 0, { duration });
        animate(scale, 0, { duration });
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
      // {...props}
    >
      <motion.div
        className={style.ButtonBg}
        style={{
          x: scaleTranslateX,
          y: scaleTranslateY,
          transformOrigin,
          scale,
        }}
      ></motion.div>
      <motion.div style={{ x: magneticTranslateX, y: magneticTranslateY }}>
        {children}
      </motion.div>
    </div>
  );
};

const duration = 0.2;
const scaleOffsetLevel = 0.3;
const magneticOffsetLevel = 0.2;
