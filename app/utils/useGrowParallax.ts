import {
  animate,
  clamp,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { MouseEventProps, mouseOffset } from "./mouseOffset";
import { useCallback, useState } from "react";

export const useGrowParallax = ({
  elementRef,
  offsetPx,
  duration,
}: {
  elementRef: React.RefObject<HTMLElement>;
  offsetPx: number;
  duration: number;
}) => {
  const translateX = useMotionValue(0);
  const translateY = useMotionValue(0);

  const scaleX = useMotionValue(0);
  const scaleY = useMotionValue(0);
  const scale = useMotionTemplate`${scaleX}, ${scaleY}`;

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

      let {
        topLeftOffsetX, //
        topLeftOffsetY,
      } = mouseOffset({ mouseEvent, elementDOMRect: _elementDOMRect });

      topLeftOffsetX = clamp(0, _elementDOMRect?.width || 0, topLeftOffsetX);
      topLeftOffsetY = clamp(0, _elementDOMRect?.height || 0, topLeftOffsetY);

      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);

      const { height = 1, width = 1 } = _elementDOMRect || {};
      const scaleFromX = initialScaleSize / width;
      const scaleFromY = initialScaleSize / height;

      scaleX.set(scaleFromX);
      scaleY.set(scaleFromY);
      animate(scaleX, 1, { duration });
      animate(scaleY, 1, { duration });
      animate(opacity, 1, { duration: opacityDuration });
    },
    [
      duration,
      elementRef,
      opacity,
      scaleX,
      scaleY,
      transformOriginX,
      transformOriginY,
    ]
  );

  const updateGrowParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      let {
        topLeftOffsetX, //
        topLeftOffsetY,
        centerOffsetX,
        centerOffsetY,
      } = mouseOffset({ mouseEvent, elementDOMRect });

      topLeftOffsetX = clamp(0, elementDOMRect?.width || 0, topLeftOffsetX);
      topLeftOffsetY = clamp(0, elementDOMRect?.height || 0, topLeftOffsetY);

      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);

      const { width = 0, height = 0 } = elementDOMRect || {};
      const offsetX = offsetPx / width;

      // offsetX = offsetPx
      translateX.set(centerOffsetX * offsetX);
      translateY.set(centerOffsetY * offsetX);
    },
    [
      elementDOMRect,
      offsetPx,
      transformOriginX,
      transformOriginY,
      translateX,
      translateY,
    ]
  );

  const endGrowParallax = useCallback(
    ({ mouseEvent }: MouseEventProps) => {
      let {
        topLeftOffsetX, //
        topLeftOffsetY,
      } = mouseOffset({ mouseEvent, elementDOMRect });

      topLeftOffsetX = clamp(0, elementDOMRect?.width || 0, topLeftOffsetX);
      topLeftOffsetY = clamp(0, elementDOMRect?.height || 0, topLeftOffsetY);

      transformOriginX.set(topLeftOffsetX);
      transformOriginY.set(topLeftOffsetY);

      const { height = 1, width = 1 } = elementDOMRect || {};
      const scaleFromX = initialScaleSize / width;
      const scaleFromY = initialScaleSize / height;

      animate(scaleX, scaleFromX, { duration });
      animate(scaleY, scaleFromY, { duration });
      animate(opacity, 0, {
        duration: opacityDuration,
        delay: duration - opacityDuration,
      });
    },
    [
      duration,
      elementDOMRect,
      opacity,
      scaleX,
      scaleY,
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
const initialScaleSize = 12;
