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
  // const [isActive, setIsActive] = useState(false);

  const startMagneticParallax = useCallback(() => {
    // setIsActive(true);

    // cache the element dimensions on start
    const _elementDOMRect = elementRef.current?.getBoundingClientRect();
    setElementDOMRect(_elementDOMRect);

    const { width = 0, height = 0 } = _elementDOMRect || {};
    const offsetX = offsetPx / width;

    animate(magneticOffset, offsetX, { duration, ease });

    const { centerOffsetX, centerOffsetY } = mouseOffset({
      elementDOMRect:_elementDOMRect,
    });
    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);

  }, [duration, elementRef, magneticOffset, mouseX, mouseY, offsetPx]);

  const updateMagneticParallax = useCallback(() => {
    const { centerOffsetX, centerOffsetY } = mouseOffset({
      elementDOMRect,
    });
    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);
  }, [elementDOMRect, mouseX, mouseY]);

  const endMagneticParallax = useCallback(() => {
    // setIsActive(false);

    animate(magneticOffset, 0, { duration, ease });
    animate(mouseX, 0, { duration, ease });
    animate(mouseY, 0, { duration, ease });
  }, [duration, magneticOffset, mouseX, mouseY]);

  // const { scrollYProgress } = useScroll({
  //   target: elementRef,
  //   offset: ["start end", "end start"],
  // });

  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   if (!isActive) return;
  //   // console.log("Page scroll: ", latest);

  //   // cache the element dimensions on start
  //   const _elementDOMRect = elementRef.current?.getBoundingClientRect();
  //   setElementDOMRect(_elementDOMRect);

  //   const { width = 0, height = 0 } = _elementDOMRect || {};
  //   const offsetX = offsetPx / width;

  //   animate(magneticOffset, offsetX, { duration, ease });

  //   const { centerOffsetX, centerOffsetY } = mouseOffset({
  //     elementDOMRect,
  //   });
  //   mouseX.set(centerOffsetX);
  //   mouseY.set(centerOffsetY);
  //   // requestAnimationFrame(() => {

  //   // })
  // });

  // useAnimationFrame((time, delta) => {
  //   // console.log({time, delta});
  // });

  return {
    translateX,
    translateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  };
};

const ease = "easeInOut";
