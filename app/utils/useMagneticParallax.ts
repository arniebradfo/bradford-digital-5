import { animate, useMotionValue, useTransform } from "framer-motion";
import { MouseEventProps, mouseOffset } from "./mouseOffset";
import { useCallback, useLayoutEffect, useState } from "react";

export const useMagneticParallax = ({
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

  const magneticOffset = useMotionValue(0);

  const magneticTranslateX = useTransform(
    () => mouseX.get() * magneticOffset.get()
  );
  const magneticTranslateY = useTransform(
    () => mouseY.get() * magneticOffset.get()
  );
  const [elementDOMRect, setElementDOMRect] = useState<DOMRect>();

  const startMagneticParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      // cache the element dimensions on start
      const _elementDOMRect = elementRef.current?.getBoundingClientRect();
      setElementDOMRect(_elementDOMRect);

      const { centerOffsetX, centerOffsetY } = mouseOffset({
        mouseEvent,
        elementDOMRect: _elementDOMRect,
      });
      mouseX.set(centerOffsetX);
      mouseY.set(centerOffsetY);

      animate(magneticOffset, offsetLevel, { duration });
    },
    [duration, elementRef, magneticOffset, mouseX, mouseY, offsetLevel]
  );

  const updateMagneticParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      const { centerOffsetX, centerOffsetY } = mouseOffset({
        mouseEvent,
        elementDOMRect,
      });
      mouseX.set(centerOffsetX);
      mouseY.set(centerOffsetY);
    },
    [elementDOMRect, mouseX, mouseY]
  );

  const endMagneticParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      animate(magneticOffset, 0, { duration });
      animate(mouseX, 0, { duration });
      animate(mouseY, 0, { duration });
    },
    [duration, magneticOffset, mouseX, mouseY]
  );

  return {
    magneticTranslateX,
    magneticTranslateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  };
};
