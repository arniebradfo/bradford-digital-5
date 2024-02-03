import {
  HoverHandlers,
  animate,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { MouseOffsetProps, mouseOffset } from "./mouseOffset";

export const useScaleParallax = ({
  offsetLevel,
  duration,
}: {
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



  const startScaleParallax = ({
    mouseEvent,
    element,
  }: MouseOffsetProps) => {
    const {
      topLeftOffsetX, //
      topLeftOffsetY,
    } = mouseOffset({ mouseEvent, element });

    transformOriginX.set(topLeftOffsetX);
    transformOriginY.set(topLeftOffsetY);

    animate(scale, 1, { duration });
    animate(opacity, 1, { duration: opacityDuration });
  };
  const updateScaleParallax = ({ mouseEvent, element }: MouseOffsetProps) => {

    const {
      topLeftOffsetX, //
      topLeftOffsetY,
      centerOffsetX,
      centerOffsetY,
    } = mouseOffset({ mouseEvent, element });

    transformOriginX.set(topLeftOffsetX);
    transformOriginY.set(topLeftOffsetY);
    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);
  };
  const endScaleParallax = ({ mouseEvent, element }: MouseOffsetProps) => {
    const {
      topLeftOffsetX, //
      topLeftOffsetY,
    } = mouseOffset({ mouseEvent, element });

    // TODO: if this value is wayyy outside the button, set to center
    transformOriginX.set(topLeftOffsetX);
    transformOriginY.set(topLeftOffsetY);

    animate(scale, 0, { duration });
    animate(opacity, 0, {
      duration: opacityDuration,
      delay: duration - opacityDuration,
    });
  };

  return {
    scaleTranslateX,
    scaleTranslateY,
    transformOrigin,
    scale,
    opacity,
    startScaleParallax,
    updateScaleParallax,
    endScaleParallax
  };
};

const opacityDuration = 0.05;
