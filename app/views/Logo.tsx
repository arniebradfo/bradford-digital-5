import Image, { ImageProps } from "next/image";
import { cx } from "../utils/joinClassNames";

export const Logo: React.FC<Partial<ImageProps>> = ({
  className,
  ...props
}) => (
  [
    ['showDarkTheme', "/logo/small-white.svg"],
    ['showLightTheme', "/logo/small.svg"],
  ].map(([themeClassName, src]) => (
  <Image
    key={themeClassName}
    className={cx(className, themeClassName)}
    src={src} // {"/logo/small.svg"}
    alt={`jb logo- ${themeClassName}`}
    width={16}
    height={16}
    priority
    {...props}
  />
  ))
);
