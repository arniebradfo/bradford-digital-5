export const themeDetectorInline = `
var themeClassName = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "darkTheme"
  : "lightTheme";
document.documentElement.classList.add(themeClassName);
`;
