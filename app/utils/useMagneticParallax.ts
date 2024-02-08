import {
  HoverHandlers,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { MouseOffsetProps, mouseOffset } from "./mouseOffset";

export const useMagneticParallax = ({
  offsetLevel,
  duration,
}: {
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

  const startMagneticParallax = ({ mouseEvent, element }: MouseOffsetProps) => {
    const { centerOffsetX, centerOffsetY } = mouseOffset({
      mouseEvent,
      element,
    });
    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);

    animate(magneticOffset, offsetLevel, { duration });
  };

  const updateMagneticParallax = ({
    mouseEvent,
    element,
  }: MouseOffsetProps) => {
    const { centerOffsetX, centerOffsetY } = mouseOffset({
      mouseEvent,
      element,
    });
    mouseX.set(centerOffsetX);
    mouseY.set(centerOffsetY);
  };
  const endMagneticParallax = ({ mouseEvent, element }: MouseOffsetProps) => {
    animate(magneticOffset, 0, { duration });
    animate(mouseX, 0, { duration });
    animate(mouseY, 0, { duration });
  };

  return {
    magneticTranslateX,
    magneticTranslateY,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  };
};
