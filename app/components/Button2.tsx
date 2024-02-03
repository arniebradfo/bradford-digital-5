"use client";
import {
  Easing,
  animate,
  motion,
  useAnimationControls,
  useMotionValue,
  useSpring,
  useTransform,
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
  const translateX = useMotionValue(0);
  const translateY = useMotionValue(0);
  const x = useTransform(() => translateX.get() * childrenOffsetValue.get());
  const y = useTransform(() => translateY.get() * childrenOffsetValue.get());
  // const childrenOffsetSpring = useSpring(childrenOffsetValue)

  return (
    <div
      className={style.Button}
      ref={elementRef}
      onMouseEnter={(mouseEvent) => {
        if (!elementRef.current) return null;
        animate(childrenOffsetValue, offsetValue);
        
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

        translateX.set(offsetX)
        translateY.set(offsetY)

      }}
      onMouseLeave={() => {
        if (!elementRef.current) return null;
        animate(childrenOffsetValue, 0);
        animate(translateX, 0);
        animate(translateY, 0);

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

        translateX.set(offsetX)
        translateY.set(offsetY)

        // const _translateX = offsetX * childrenOffsetValue.get();
        // const _translateY = offsetY * childrenOffsetValue.get();

        // animationControl.set({
        //   x: _translateX,
        //   y: _translateY,
        // });
      }}
      // {...props}
    >
      <motion.div
        className={style.ButtonBg}
        // animate={animationControl}
        style={{ x, y }}
      ></motion.div>
      <span>{children}</span>
    </div>
  );
};

const duration = 0.2;
const offsetValue = 0.4;
