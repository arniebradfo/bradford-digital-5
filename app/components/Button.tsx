"use client";
import { Easing, motion, useAnimationControls } from "framer-motion";
import style from "./Button.module.css";
import { useRef, useState } from "react";
import { mouseOffset } from "./mouseOffset";

export const Button: React.FC<React.ComponentProps<"div">> = ({
  children,
  // ...props
}) => {
  const animationControl = useAnimationControls();
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={style.Button}
      ref={elementRef}
      onMouseEnter={() => {
        if (!elementRef.current) return null;
        animationControl.start({ scale: 1 }, { ease: "backOut", duration });
      }}
      onMouseLeave={() => {
        if (!elementRef.current) return null;
        animationControl.start({ scale: 0 }, { ease: "backIn", duration });
      }}
      onMouseMove={(mouseEvent) => {
        if (!elementRef.current) return null;

        const {
          topLeftOffsetX, //
          topLeftOffsetY,
          centerOffsetX,
          centerOffsetY,
        } = mouseOffset(mouseEvent, elementRef.current);

        const translateX = centerOffsetX * offsetCoefficient;
        const translateY = centerOffsetY * offsetCoefficient;

        animationControl.set({
          x: translateX,
          y: translateY,
          transformOrigin: `${topLeftOffsetX}px ${topLeftOffsetY}px`,
        });
      }}
      // {...props}
    >
      <motion.div
        className={style.ButtonBg}
        animate={animationControl}
        style={{ scale: 0, transformOrigin: "50% 50%" }}
      ></motion.div>
      <span>{children}</span>
    </div>
  );
};

const duration = 0.2;
const offsetCoefficient = 0.4;
