import { MotionValue, useMotionTemplate, useTransform } from "framer-motion";

export type useMagneticParallaxLayersProps = {
  scale0: MotionValue<number>;
  translateX: MotionValue<number>;
  translateY: MotionValue<number>;
  scaleMore?: number;
  scaleUp?: number;
  translateMore?: number;
};

export const useMagneticParallaxLayers = ({
  scale0,
  translateX,
  translateY,
  scaleMore = 0.01,
  scaleUp = 0.01,
  translateMore = 0.01,
}: useMagneticParallaxLayersProps) => {
  const x = useTransform(() => translateX.get() * translateMore);
  const y = useTransform(() => translateY.get() * translateMore);
  const rX = useTransform(() => translateX.get() * 1 * rotateMore);
  const rY = useTransform(() => translateY.get() * -1 * rotateMore);
  const scale = useTransform(() => 1 + scale0.get() * (scaleMore + scaleUp));
  const transform = useMotionTemplate`rotateX(${rY}deg) rotateY(${rX}deg) scale(${scale}) translate(${x}px, ${y}px)`;

  // const { scrollYProgress } = useScroll({ target: elementRef, offset: ["start end", "end start"] });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });

  return transform as MotionValue<string> & "none";
};

const rotateMore = 0.2