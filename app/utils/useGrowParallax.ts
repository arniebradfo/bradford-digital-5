import {
  animate,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { MouseEventProps, mouseOffset } from "./mouseOffset";
import { useCallback, useState } from "react";

export const useGrowParallax = ({
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

  const translateX = useTransform(() => mouseX.get() * offsetLevel);
  const translateY = useTransform(() => mouseY.get() * offsetLevel);

  const scale = useMotionValue(0);
  const opacity = useMotionValue(0);

  const transformOriginX = useMotionValue(0);
  const transformOriginY = useMotionValue(0);

  const transformOrigin = useMotionTemplate`${transformOriginX}px ${transformOriginY}px`;

  const [elementDOMRect, setElementDOMRect] = useState<DOMRect>();

  const startGrowParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      
      // cache the element dimensions on start
      const _elementDOMRect = elementRef.current?.getBoundingClientRect();
      setElementDOMRect(_elementDOMRect);

      const {
        topLeftOffsetX, //
        topLeftOffsetY,
      } = mouseOffset({ mouseEvent, elementDOMRect: _elementDOMRect });

      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);

      animate(scale, 1, { duration });
      animate(opacity, 1, { duration: opacityDuration });
    },
    [duration, elementRef, opacity, scale, transformOriginX, transformOriginY]
  );

  const updateGrowParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      const {
        topLeftOffsetX, //
        topLeftOffsetY,
        centerOffsetX,
        centerOffsetY,
      } = mouseOffset({ mouseEvent, elementDOMRect });

      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);
      mouseX.set(centerOffsetX);
      mouseY.set(centerOffsetY);
    },
    [elementDOMRect, mouseX, mouseY, transformOriginX, transformOriginY]
  );

  const endGrowParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      const {
        topLeftOffsetX, //
        topLeftOffsetY,
      } = mouseOffset({ mouseEvent, elementDOMRect });

      // TODO: if this value is wayyy outside the button, set to center
      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);

      animate(scale, 0, { duration });
      animate(opacity, 0, {
        duration: opacityDuration,
        delay: duration - opacityDuration,
      });
    },
    [
      duration,
      elementDOMRect,
      opacity,
      scale,
      transformOriginX,
      transformOriginY,
    ]
  );

  return {
    translateX,
    translateY,
    transformOrigin,
    scale,
    opacity,
    startGrowParallax,
    updateGrowParallax,
    endGrowParallax,
  };
};

const opacityDuration = 0.05;
