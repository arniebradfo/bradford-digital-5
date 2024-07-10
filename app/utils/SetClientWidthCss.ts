"use client";

import { useLayoutEffect } from "react";

export const SetClientWidthCss = () => {
  useLayoutEffect(() => {
    window.addEventListener("resize", setClientWidthCss);
    return () => {
      window.removeEventListener("resize", setClientWidthCss);
    };
  });
  return null;
};

const setClientWidthCss = () => {
  if (typeof window !== "undefined") {
    document.documentElement.style.setProperty(
      "--clientWidth",
      document.documentElement.clientWidth + "px"
    );
  }
};

setClientWidthCss();
