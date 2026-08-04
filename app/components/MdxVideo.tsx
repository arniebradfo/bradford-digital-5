import React from "react";

interface MdxVideoProps extends React.ComponentProps<"video"> {}

export const MdxVideo: React.FC<MdxVideoProps> = ({
  className = "",
  style,
  ...props
}) => {
  return (
    <video
      preload="metadata"
      controls
      className={`mdx-video ${className}`}
      style={{
        maxWidth: "100%",
        height: "auto",
        borderRadius: "8px",
        margin: "1rem 0",
        ...style,
      }}
      {...props}
    />
  );
};
