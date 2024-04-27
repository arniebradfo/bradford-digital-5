import {
  animate,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { mouseOffset } from "./mouseOffset";
import { useCallback, useEffect, useState } from "react";

export const useMagneticParallax = ({
  elementRef,
  offsetPx,
  duration,
}: {
  elementRef: React.RefObject<HTMLElement>;
  offsetPx: number;
  duration: number;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const magneticOffset = useMotionValue(0);

  const translateX = useTransform(() => mouseX.get() * magneticOffset.get());
  const translateY = useTransform(() => mouseY.get() * magneticOffset.get());

  const [elementDOMRect, setElementDOMRect] = useState<DOMRect>();
  
  const startMagneticParallax = useCallback(() => {
    // cache the element dimensions on start
    const _elementDOMRect = elementRef.current?.getBoundingClientRect();
    setElementDOMRect(_elementDOMRect);
  }, [elementRef]);

  const updateMagneticParallax = useCallback(() => {
    const { width = 0, height = 0 } = elementDOMRect || {};

    // if width === 0 then we divide by 0 here and get Infinity
    const offsetX = offsetPx / width;

    if (magneticOffset.get() === 0 && offsetX < Infinity) {
      // console.log({ width, offsetX, offsetPx });
      animate(magneticOffset, offsetX, { duration, ease });
    }

    const { centerOffsetX, centerOffsetY } = mouseOffset({
      elementDOMRect,
    });
    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);
    // magneticOffset.set(offsetX);
  }, [duration, elementDOMRect, magneticOffset, mouseX, mouseY, offsetPx]);

  const endMagneticParallax = useCallback(() => {
    animate(magneticOffset, 0, { duration, ease });
    animate(mouseX, 0, { duration, ease });
    animate(mouseY, 0, { duration, ease });
  }, [duration, magneticOffset, mouseX, mouseY]);

  return {
    translateX,
    translateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  };
};

const ease = "easeInOut";
