/** Stores the latest mouse position. `-1` values are uninitialized */
export let globalMouse = { x: -1, y: -1 };

function updateMousePosition(event: MouseEvent) {
  globalMouse.x = event.clientX;
  globalMouse.y = event.clientY;
}

if (typeof window !== "undefined") {
  // mouseover fires like css hover, when mouse may not have moved, as a fallback
  document.addEventListener("mouseover", updateMousePosition);
  // mousemove fires rapidly to smoothly update animation frames
  document.addEventListener("mousemove", updateMousePosition);
}
