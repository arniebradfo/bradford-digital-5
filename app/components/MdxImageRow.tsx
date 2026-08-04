import React from "react";

interface MdxImageRowProps extends React.ComponentProps<"div"> {
  maxWidth?: number;
}

export const MdxImageRow: React.FC<MdxImageRowProps> = ({
  children,
  className = "",
  style,
  ...props
}) => {
  return (
    <div
      className={`mdx-image-row ${className}`}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        alignItems: "center",
        margin: "1rem 0",
        flexWrap: "wrap",
        ...style,
      }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (!child) return null;
        return (
          <div style={{ flex: 1, minWidth: "150px" }}>
            {child}
          </div>
        );
      })}
    </div>
  );
};
