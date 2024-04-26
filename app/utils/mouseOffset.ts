import { globalMouse } from "./globalMouse";

export type MouseOffsetProps = {
  elementDOMRect?: DOMRect;
};

export function mouseOffset({ elementDOMRect }: MouseOffsetProps) {
  const {
    height: elementH,
    width: elementW,
    left: elementX,
    top: elementY,
  } = elementDOMRect || blankDOMRect;

  const topLeftOffsetX = globalMouse.x - elementX;
  const topLeftOffsetY = globalMouse.y - elementY;

  const centerX = elementX + elementW / 2;
  const centerY = elementY + elementH / 2;

  const centerOffsetX = globalMouse.x - centerX;
  const centerOffsetY = globalMouse.y - centerY;

  return {
    topLeftOffsetX,
    topLeftOffsetY,

    centerX,
    centerY,

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
