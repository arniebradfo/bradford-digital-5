import {
  animate,
  useAnimationFrame,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { mouseOffset } from "./mouseOffset";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

export const useMagneticParallax = ({
  elementRef,
  offsetPx,
  duration,
  isScrollUpdated,
}: {
  elementRef: React.RefObject<HTMLElement>;
  offsetPx: number;
  duration: number;
  isScrollUpdated?: boolean;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const magneticOffset = useMotionValue(0);

  const translateX = useTransform(() => mouseX.get() * magneticOffset.get());
  const translateY = useTransform(() => mouseY.get() * magneticOffset.get());

  const [_elementDOMRect, setElementDOMRect] = useState<DOMRect>();

  useLayoutEffect(
    () => setElementDOMRect(elementRef.current?.getBoundingClientRect()),
    [elementRef]
  );

  const getElementDOMRect = useCallback(
    (getNew = false) => {
      if (getNew) {
        const elementDOMRect = elementRef.current?.getBoundingClientRect();
        setElementDOMRect(elementDOMRect);
        return elementDOMRect;
      } else {
        return _elementDOMRect;
      }
    },
    [_elementDOMRect, elementRef]
  );

  const magneticParallax = useCallback(
    (start = false) => {
      const elementDOMRect = getElementDOMRect(start);

      if (!magneticOffset.isAnimating() && magneticOffset.get() === 0) {
        const { width = 0, height = 0 } = elementDOMRect || {};
        const offsetX = offsetPx / width; // if width === 0 then offsetX === Infinity
        if (offsetX < Infinity)
          animate(magneticOffset, offsetX, { duration, ease });
      }

      const { centerOffsetX, centerOffsetY } = mouseOffset({ elementDOMRect });
      mouseX.set(centerOffsetX);
      mouseY.set(centerOffsetY);
    },
    [duration, getElementDOMRect, magneticOffset, mouseX, mouseY, offsetPx]
  );

  const startMagneticParallax = useCallback(() => {
    magneticParallax(true);
  }, [magneticParallax]);

  const updateMagneticParallax = useCallback(() => {
    magneticParallax(false);
  }, [magneticParallax]);

  const endMagneticParallax = useCallback(() => {
    animate(magneticOffset, 0, { duration, ease });
    animate(mouseX, 0, { duration, ease });
    animate(mouseY, 0, { duration, ease });
  }, [duration, magneticOffset, mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!isScrollUpdated) return;
    const elementDOMRect = getElementDOMRect(true);
    const { centerOffsetX, centerOffsetY } = mouseOffset({ elementDOMRect });
    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);
  });

  return {
    translateX,
    translateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  };
};

const ease = "easeInOut";
