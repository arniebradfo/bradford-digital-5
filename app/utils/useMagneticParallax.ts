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

  const [elementDOMRect, setElementDOMRect] = useState<DOMRect>();

  useLayoutEffect(() => {
    const _elementDOMRect = elementRef.current?.getBoundingClientRect();
    setElementDOMRect(_elementDOMRect);
  }, [elementRef]);

  const startMagneticParallax = useCallback(() => {
    // cache the element dimensions on start
    const _elementDOMRect = elementRef.current?.getBoundingClientRect();
    setElementDOMRect(_elementDOMRect);

    const { width = 0, height = 0 } = _elementDOMRect || {};
    const offsetX = offsetPx / width; // if width === 0 then offsetX === Infinity
    if (offsetX < Infinity)
      animate(magneticOffset, offsetX, { duration, ease });

    const { centerOffsetX, centerOffsetY } = mouseOffset({
      elementDOMRect: _elementDOMRect,
    });

    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);
  }, [duration, elementRef, magneticOffset, mouseX, mouseY, offsetPx]);

  const updateMagneticParallax = useCallback(() => {
    if (!magneticOffset.isAnimating() && magneticOffset.get() === 0) {
      const { width = 0, height = 0 } = elementDOMRect || {};
      const offsetX = offsetPx / width; // if width === 0 then offsetX === Infinity
      if (offsetX < Infinity)
        animate(magneticOffset, offsetX, { duration, ease });
    }

    const { centerOffsetX, centerOffsetY } = mouseOffset({
      elementDOMRect,
    });

    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);
  }, [duration, elementDOMRect, magneticOffset, mouseX, mouseY, offsetPx]);

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

    const _elementDOMRect = elementRef.current?.getBoundingClientRect();
    setElementDOMRect(_elementDOMRect);
    const { centerOffsetX, centerOffsetY } = mouseOffset({
      elementDOMRect: _elementDOMRect,
    });
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
