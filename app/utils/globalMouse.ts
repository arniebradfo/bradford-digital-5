// Variables to store the latest mouse position
export let globalMouse = { x: 0, y: 0 };

// Function to update the mouse position
function updateMousePosition(event: MouseEvent) {
  globalMouse.x = event.clientX;
  globalMouse.y = event.clientY;
}

// Listen to mousemove events on the document
if (typeof window !== "undefined")
  document.addEventListener("mousemove", updateMousePosition);
