import Image, { ImageProps } from "next/image";
import { cx } from "../utils/joinClassNames";
// import style from "./Logo.module.css";

export const Logo: React.FC<Partial<ImageProps>> = ({
  className,
  ...props
}) => (
  // [
  //   [style.showDarkTheme, "/logo/small-white.svg"],
  //   [style.showLightTheme, "/logo/small.svg"],
  // ].map(([theme, src]) => (
  <Image
    // key={theme}
    // className={cx(className)}
    // src={src}
    className={cx(className)}
    src={"/logo/small.svg"}
    alt={`jb logo`} // - ${theme}`}
    width={16 * 3}
    height={16 * 3}
    priority
    {...props}
  />
  // ));
);
