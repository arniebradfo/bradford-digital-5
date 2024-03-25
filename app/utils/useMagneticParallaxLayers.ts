import { MotionValue, useMotionTemplate, useTransform } from "framer-motion";

export const useMagneticParallaxLayers = ({
  scale0,
  translateX,
  translateY,
  scaleMore = 0.01,
  translateMore = 0.01,
}: {
  scale0: MotionValue<number>;
  translateX: MotionValue<number>;
  translateY: MotionValue<number>;
  scaleMore?: number;
  translateMore?: number;
}) => {
  const x = useTransform(() => translateX.get() * translateMore);
  const y = useTransform(() => translateY.get() * translateMore);
  const rX = useTransform(() => translateX.get() * 1 * 0.5);
  const rY = useTransform(() => translateY.get() * -1 * 0.5);
  const scale = useTransform(() => 1 + scale0.get() * scaleMore);
  const transform = useMotionTemplate`rotateX(${rY}deg) rotateY(${rX}deg) scale(${scale}) translate(${x}px, ${y}px)`;
  return transform as MotionValue<string> & 'none';
};
