"use client";
import {
  AnimationDefinition,
  motion,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";
import style from "./Button.module.css";
import { useRef, useState } from "react";

export const Button: React.FC<React.ComponentProps<"div">> = ({
  children,
  // ...props
}) => {
  const animationControl = useAnimationControls();
  const elementRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  return (
    <div
      className={style.primaryButton}
      ref={elementRef}
      // onMouseEnter={(e) => {}}
      onMouseLeave={(e) => {
        x.set(0);
        y.set(0);
        // const transform = { x: 0, y: 0 };
        // animationControl.start(transform);
      }}
      onMouseMove={(e) => {
        if (!elementRef.current) return null;

        const { clientX: mouseX, clientY: mouseY } = e;
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

        const offsetCoefficient = 0.3;

        console.log({
          // offsetX,
          // offsetY,
        });

        // TODO: decrease duration value by distance of target to mouse

        // const durationStart
        const tX = offsetX * offsetCoefficient;
        const tY = offsetY * offsetCoefficient;

        x.set(tX);
        y.set(tY);

        // const transform: AnimationDefinition = { x, y };
        // animationControl.start(transform, { ease: "linear", duration: 0.05 });
      }}
      // {...props}
    >
      <motion.div
        className={style.ButtonBg}
        animate={animationControl}
        style={{ x, y }}
      ></motion.div>
      <span>{children}</span>
    </div>
  );
};
