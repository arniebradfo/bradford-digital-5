import { globalMouse } from "./globalMouse";

export type MouseOffsetProps = {
  elementDOMRect?: DOMRect;
};

/** xy offsets of mouse local to an elementDOMRect. 
 * Defaults to centerXY if globalMouse is uninitialized */
export function mouseOffset({ elementDOMRect }: MouseOffsetProps) {
  const {
    height: elementH,
    width: elementW,
    left: elementX,
    top: elementY,
  } = elementDOMRect || blankDOMRect;

  const centerX = elementX + elementW / 2;
  const centerY = elementY + elementH / 2;

  const topLeftOffsetX = globalMouse.x < 0 ? elementW / 2 : globalMouse.x - elementX;
  const topLeftOffsetY = globalMouse.y < 0 ? elementH / 2 : globalMouse.y - elementY;

  const centerOffsetX = globalMouse.x < 0 ? 0 : globalMouse.x - centerX;
  const centerOffsetY = globalMouse.y < 0 ? 0 : globalMouse.y - centerY;

  return {
    centerX,
    centerY,

    topLeftOffsetX,
    topLeftOffsetY,

    centerOffsetX,
    centerOffsetY,
  };
}

const blankDOMRect = {
  height: 0,
  width: 0,
  left: 0,
  top: 0,
};
