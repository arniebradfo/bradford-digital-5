"use client";
import {
  Easing,
  motion,
  useAnimationControls,
} from "framer-motion";
import style from "./Button.module.css";
import { useRef, useState } from "react";

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
        animationControl.start({ scale: 1}, {  ease: 'backOut', duration });

      }}
      onMouseLeave={() => {
        if (!elementRef.current) return null;
        animationControl.start({ scale: 0 }, { ease: 'backIn', duration });
      }}
      onMouseMove={(mouseEvent) => {
        if (!elementRef.current) return null;

        const { clientX: mouseX, clientY: mouseY } = mouseEvent;
        const {
          offsetHeight: elementH,
          offsetWidth: elementW,
          offsetLeft: elementX,
          offsetTop: elementY,
        } = elementRef.current;

        const transformOriginX = mouseX - elementX;
        const transformOriginY = mouseY - elementY;

        const centerX = elementX + elementW / 2;
        const centerY = elementY + elementH / 2;

        const offsetX = mouseX - centerX;
        const offsetY = mouseY - centerY;

        const translateX = offsetX * offsetCoefficient;
        const translateY = offsetY * offsetCoefficient;

        animationControl.set({
          x: translateX,
          y: translateY,
          transformOrigin: `${transformOriginX}px ${transformOriginY}px`,
        });
      }}
      // {...props}
    >
      <motion.div
        className={style.ButtonBg}
        animate={animationControl}
        style={{ scale: 0, transformOrigin: '50% 50%' }}
      ></motion.div>
      <span>{children}</span>
    </div>
  );
};

const duration = .2;
const offsetCoefficient = 0.4;
