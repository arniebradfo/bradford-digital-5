export type MouseEventProps = {
  mouseEvent: React.MouseEvent | MouseEvent;
};

export type MouseOffsetProps = MouseEventProps & {
  elementDOMRect?: DOMRect;
  // element?: HTMLElement | null;
};

export function mouseOffset<T extends HTMLElement>({
  mouseEvent,
  elementDOMRect,
}: MouseOffsetProps) {
  const { clientX: globalMouseX, clientY: globalMouseY } = mouseEvent;

  const {
    height: elementH,
    width: elementW,
    left: elementX,
    top: elementY,
  } = elementDOMRect || blankDOMRect;
  // } = element?.getBoundingClientRect() || blankDOMRect;

  const topLeftOffsetX = globalMouseX - elementX;
  const topLeftOffsetY = globalMouseY - elementY;

  const centerX = elementX + elementW / 2;
  const centerY = elementY + elementH / 2;

  const centerOffsetX = globalMouseX - centerX;
  const centerOffsetY = globalMouseY - centerY;

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
