"use client";
import {
  AnimationDefinition,
  MotionStyle,
  motion,
  useAnimationControls,
  useMotionValue,
} from "framer-motion";
import style from "./Button.module.css";
import { useRef, useState } from "react";

export const Button2: React.FC<React.ComponentProps<"div">> = ({
  children,
  // ...props
}) => {
  const animationControl = useAnimationControls();
  const elementRef = useRef<HTMLDivElement>(null);
  // const translateX = useMotionValue(0);
  // const translateY = useMotionValue(0);
  // const scaleX = useMotionValue(0);
  // const scaleY = useMotionValue(0);

  return (
    <div
      className={style.primaryButton}
      ref={elementRef}
      onMouseEnter={(e) => {
        if (!elementRef.current) return null;

        const { clientX: mouseX, clientY: mouseY } = e;
        const {
          // offsetHeight: elementH,
          // offsetWidth: elementW,
          offsetLeft: elementX,
          offsetTop: elementY,
        } = elementRef.current;
        // get mouse XY relative to the button's transform origin
        const tOX = mouseX - elementX;
        const tOY = mouseY - elementY;

        animationControl.set({
          ...defaultStyle,
          transformOrigin: `${tOX}px ${tOY}px`,
        });
        animationControl.start({ scale: 1, opacity: 1 }, { duration });

        // set scale
      }}
      onMouseLeave={(e) => {
        if (!elementRef.current) return null;

        const { clientX: mouseX, clientY: mouseY } = e;
        const {
          // offsetHeight: elementH,
          // offsetWidth: elementW,
          offsetLeft: elementX,
          offsetTop: elementY,
        } = elementRef.current;
        const tOX = mouseX - elementX;
        const tOY = mouseY - elementY;

        animationControl.start(
          {
            ...defaultStyle,
            transformOrigin: `${tOX}px ${tOY}px`,
          },
          { duration }
        );
      }}
      // {...props}
    >
      <motion.div
        className={style.ButtonBg}
        animate={animationControl}
        style={defaultStyle}
      ></motion.div>
      <span>{children}</span>
    </div>
  );
};

const defaultStyle = {
  scale: 0,
  // opacity: 0,
  // transformOrigin: "40px 20px",
};

const duration = 0.2;
