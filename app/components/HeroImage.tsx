"use client";

import { jCN } from "../utils/joinClassNames";
import Image from "next/image";

import style from "./HeroImage.module.css";
import Layer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import Layer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import Layer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import Layer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";
import { useMagneticParallax } from "../utils/useMagneticParallax";
import { useRef } from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";

export const HeroImage: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const {
    translateX: x0,
    translateY: y0,
    startMagneticParallax,
    updateMagneticParallax,
    endMagneticParallax,
  } = useMagneticParallax({
    elementRef,
    offsetPx: 24,
    duration: 0.2,
  });

  const x1 = useTransform(() => x0.get() * 1);
  const y1 = useTransform(() => y0.get() * 1);

  const x2 = useTransform(() => x0.get() * 2);
  const y2 = useTransform(() => y0.get() * 2);

  const x3 = useTransform(() => x0.get() * 3);
  const y3 = useTransform(() => y0.get() * 3);

  const x4 = useTransform(() => x0.get() * 4);
  const y4 = useTransform(() => y0.get() * 4);

  const tVals = [
    [x1, y1],
    [x2, y2],
    [x3, y3],
    [x4, y4],
  ];

  return (
    <motion.div
      className={style.ImageLayers}
      ref={elementRef}
      onHoverStart={(mouseEvent) => {
        startMagneticParallax({ mouseEvent });
      }}
      onHoverEnd={(mouseEvent) => {
        endMagneticParallax({ mouseEvent });
      }}
      onMouseMove={(mouseEvent) => {
        updateMagneticParallax({ mouseEvent });
      }}
    >
      <MotionImage
        src={Layer4}
        className={style.ImageBase}
        alt="a test image"
        style={{
          x: x1,
          y: y1,
          transformOrigin: "50% 50%",
        }}
      />
      {[Layer3, Layer2, Layer1].map((layer, i) => (
        <MotionImage
          key={i}
          src={layer}
          alt="a test image"
          className={style.ImageLayer}
          style={{
            x: tVals[i + 1][0],
            y: tVals[i + 1][1],
            transformOrigin: "50% 50%",
          }}
        />
      ))}
    </motion.div>
  );
};

const MotionImage = motion(Image);
