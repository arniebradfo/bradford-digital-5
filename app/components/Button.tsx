"use client";
import { motion, useAnimationControls } from "framer-motion";
import style from "./Button.module.css";
import { useRef, useState } from "react";

export const Button: React.FC<React.ComponentProps<"div">> = ({
  children,
  // ...props
}) => {
  const animationControl = useAnimationControls();
  const elementRef = useRef<HTMLDivElement>(null);
  const [animationState, setAnimationState] = useState<AnimationState>('off');

  return (
    <motion.div
      className={style.primaryButton}
      animate={animationControl}
      ref={elementRef}
      onMouseLeave={(e) => {
        const transform = { x: 0, y: 0 }
        setAnimationState('stopping')
        animationControl.start(transform).then(()=>setAnimationState('off'));
      }}
      // onMouseEnter={(e) => {}}
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

        const offsetCoefficient = 0.2;

        const transform = {
          x: offsetX * offsetCoefficient,
          y: offsetY * offsetCoefficient,
        }

        // todo use transition timing to 'catch up' to mouse

        if (animationState === 'off') {
          setAnimationState('starting')
          animationControl.start(transform).then(()=>setAnimationState('running'));
        } else {
          animationControl.set(transform)
        }
      }}
      // {...props}
    >
      {children}
    </motion.div>
  );
};

type AnimationState = "off" | "starting" | "running" | "stopping";
