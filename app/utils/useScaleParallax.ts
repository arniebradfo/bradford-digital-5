import {
  animate,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { MouseEventProps, mouseOffset } from "./mouseOffset";
import { useCallback } from "react";

export const useScaleParallax = ({
  elementRef,
  offsetLevel,
  duration,
}: {
  elementRef: React.RefObject<HTMLElement>;
  offsetLevel: number;
  duration: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const scaleTranslateX = useTransform(() => mouseX.get() * offsetLevel);
  const scaleTranslateY = useTransform(() => mouseY.get() * offsetLevel);

  const scale = useMotionValue(0);
  const opacity = useMotionValue(0);

  const transformOriginX = useMotionValue(0);
  const transformOriginY = useMotionValue(0);

  const transformOrigin = useMotionTemplate`${transformOriginX}px ${transformOriginY}px`;

  const startScaleParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      const {
        topLeftOffsetX, //
        topLeftOffsetY,
      } = mouseOffset({ mouseEvent, element: elementRef.current });

      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);

      animate(scale, 1, { duration });
      animate(opacity, 1, { duration: opacityDuration });
    },
    [duration, elementRef, opacity, scale, transformOriginX, transformOriginY]
  );

  const updateScaleParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      const {
        topLeftOffsetX, //
        topLeftOffsetY,
        centerOffsetX,
        centerOffsetY,
      } = mouseOffset({ mouseEvent, element: elementRef.current });

      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);
      mouseX.set(centerOffsetX);
      mouseY.set(centerOffsetY);
    },
    [elementRef, mouseX, mouseY, transformOriginX, transformOriginY]
  );

  const endScaleParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      const {
        topLeftOffsetX, //
        topLeftOffsetY,
      } = mouseOffset({ mouseEvent, element: elementRef.current });

      // TODO: if this value is wayyy outside the button, set to center
      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);

      animate(scale, 0, { duration });
      animate(opacity, 0, {
        duration: opacityDuration,
        delay: duration - opacityDuration,
      });
    },
    [duration, elementRef, opacity, scale, transformOriginX, transformOriginY]
  );

  return {
    scaleTranslateX,
    scaleTranslateY,
    transformOrigin,
    scale,
    opacity,
    startScaleParallax,
    updateScaleParallax,
    endScaleParallax,
  };
};

const opacityDuration = 0.05;
