"use client";
import {
  Easing,
  animate,
  motion,
  useAnimationControls,
  useMotionValue,
  useSpring,
} from "framer-motion";
import style from "./Button.module.css";
import { useRef, useState } from "react";

export const Button2: React.FC<React.ComponentProps<"div">> = ({
  children,
  // ...props
}) => {
  const animationControl = useAnimationControls();
  const elementRef = useRef<HTMLDivElement>(null);
  const childrenOffsetValue = useMotionValue(0);
  // const childrenOffsetSpring = useSpring(childrenOffsetValue)

  return (
    <div
      className={style.Button}
      ref={elementRef}
      onMouseEnter={() => {
        if (!elementRef.current) return null;
        animate(childrenOffsetValue, offsetValue);
      }}
      onMouseLeave={() => {
        if (!elementRef.current) return null;
        childrenOffsetValue.set(0);
        // animate(childrenOffsetValue, 0)
        animationControl.start({
          x: 0,
          y: 0,
        });
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

        const centerX = elementX + elementW / 2;
        const centerY = elementY + elementH / 2;

        const offsetX = mouseX - centerX;
        const offsetY = mouseY - centerY;

        const translateX = offsetX * childrenOffsetValue.get();
        const translateY = offsetY * childrenOffsetValue.get();

        animationControl.set({
          x: translateX,
          y: translateY,
        });
      }}
      // {...props}
    >
      <motion.div
        className={style.ButtonBg}
        animate={animationControl}
        // style={{ }}
      ></motion.div>
      <span>{children}</span>
    </div>
  );
};

const duration = 0.2;
const offsetValue = 0.4;
