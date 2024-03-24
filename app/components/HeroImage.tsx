import { jCN } from "../utils/joinClassNames";
import Image from "next/image";

import style from "./HeroImage.module.css";
import Layer1 from "../../public/lfs-media/RedEye/Hero/Layer-1.png";
import Layer2 from "../../public/lfs-media/RedEye/Hero/Layer-2.png";
import Layer3 from "../../public/lfs-media/RedEye/Hero/Layer-3.png";
import Layer4 from "../../public/lfs-media/RedEye/Hero/Layer-4.png";

export const HeroImage: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => (
  <div className={style.ImageLayers}>
    <Image src={Layer4} className={style.ImageBase} alt="a test image" />
    {[Layer1, Layer2, Layer3].map((layer, i) => (
      <Image
        key={i}
        src={layer}
        alt="a test image"
        className={style.ImageLayer}
      />
    ))}
  </div>
);
